import { randomUUID } from 'crypto'
import { InMemoryRepository } from './in-memory.repository'
import { NotFoundError } from '../errors/not-found-error'

type StubModelProps = {
  id: string
  name: string
  price: number
  created_at: Date
  updated_at: Date
}

class StubInMemoryRepository extends InMemoryRepository<StubModelProps> {
  constructor() {
    super()
    this.sortableFields = ['name']
  }

  protected async applyFilter(
    items: StubModelProps[],
    filter: string | null,
  ): Promise<StubModelProps[]> {
    if (!filter) {
      return items
    }
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }
}

describe('InMemoryRepository Unit Tests', () => {
  let sut: StubInMemoryRepository
  let model: StubModelProps
  let props: any
  let created_at: Date
  let updated_at: Date

  beforeEach(() => {
    sut = new StubInMemoryRepository()
    created_at = new Date()
    updated_at = new Date()
    props = {
      name: 'test name',
      price: 10,
    }
    model = {
      id: randomUUID(),
      created_at,
      updated_at,
      ...props,
    }
  })

  describe('create', () => {
    it('should create a new model', () => {
      const result = sut.create(props)
      expect(result.name).toStrictEqual('test name')
    })
  })

  describe('insert', () => {
    it('should insert a new model', async () => {
      const result = await sut.insert(model)
      expect(result).toStrictEqual(sut.items[0])
    })
  })

  describe('find by id', () => {
    it('should throw error when id not found', async () => {
      await expect(sut.findById('fake_id')).rejects.toThrow(
        new NotFoundError('Model with ID fake_id not found'),
      )

      const id = randomUUID()
      await expect(sut.findById(id)).rejects.toThrow(
        new NotFoundError(`Model with ID ${id} not found`),
      )
    })

    it('should find a model by id', async () => {
      const data = await sut.insert(model)
      const result = await sut.findById(data.id)
      expect(result).toStrictEqual(data)
    })
  })

  describe('update', () => {
    it('should update a model', async () => {
      const data = await sut.insert(model)
      const modelUpdated = {
        id: data.id,
        name: 'updated name',
        price: 2000,
        created_at,
        updated_at,
      }
      const result = await sut.update(modelUpdated)
      expect(result).toStrictEqual(sut.items[0])
    })

    it('should throw error when id not found', async () => {
      await expect(sut.update(model)).rejects.toThrow(
        new NotFoundError(`Model with ID ${model.id} not found`),
      )
    })
  })

  describe('delete', () => {
    it('should delete a model', async () => {
      const data = await sut.insert(model)
      expect(sut.items).toHaveLength(1)
      await sut.delete(data.id)
      expect(sut.items).toHaveLength(0)
    })

    it('should throw error when id not found', async () => {
      await expect(sut.delete('fake_id')).rejects.toThrow(
        new NotFoundError('Model with ID fake_id not found'),
      )

      const id = randomUUID()
      await expect(sut.delete(id)).rejects.toThrow(
        new NotFoundError(`Model with ID ${id} not found`),
      )
    })
  })

  describe('applyFilter', () => {
    it('should not filter items when filter param is null', async () => {
      const items = [model]
      const spyFilterMethod = jest.spyOn(items, 'filter' as any)
      const result = await sut['applyFilter'](items, null)
      expect(spyFilterMethod).not.toHaveBeenCalled()
      expect(result).toStrictEqual(items)
    })

    it('should filter data using filter param', async () => {
      const items = [
        { id: randomUUID(), name: 'test', price: 10, created_at, updated_at },
        { id: randomUUID(), name: 'TEST', price: 20, created_at, updated_at },
        { id: randomUUID(), name: 'fake', price: 30, created_at, updated_at },
      ]
      const spyFilterMethod = jest.spyOn(items, 'filter' as any)
      const result = await sut['applyFilter'](items, 'test')
      expect(spyFilterMethod).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual([items[0], items[1]])
    })
  })
})
