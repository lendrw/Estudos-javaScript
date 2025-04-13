import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IListagemCidade {
    id: number;
    nome: string;
}

export interface IDetalheCidade {
    id: number;
    nome: string;
}

type TCidadesComTotalCount = {
    data: IListagemCidade[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TCidadesComTotalCount | Error> => {
    try {
        // Primeiro, busca todos os dados pra contar
        const { data: todos } = await Api.get<IListagemCidade[]>('/cidades');

        // Filtra (se tiver filtro)
        const dadosFiltrados = filter
            ? todos.filter(p =>
                  p.nome.toLowerCase().includes(filter.toLowerCase())
              )
            : todos;

        // Pagina manualmente
        const start = (page - 1) * Environment.LIMITE_DE_LINHAS;
        const end = start + Environment.LIMITE_DE_LINHAS;
        const paginados = dadosFiltrados.slice(start, end);

        return {
            data: paginados,
            totalCount: dadosFiltrados.length,
        };
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar cidades.');
    }
};



const getById = async (id: number): Promise<IDetalheCidade | Error> => {
    try {
        const { data } = await Api.get(`/cidades/${id}`);

        if (data) {
            return data;
        }

        return new Error('Erro ao consultar o registro.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
    }
};

const create = async (dados: Omit<IDetalheCidade, 'id'>): Promise<Number | Error> => {
    try {
        const { data } = await Api.post<IDetalheCidade>('/cidades', dados);

        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar o registro.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    }
};

const updateById = async (id: number, dados: IDetalheCidade): Promise<void | Error> => {
    try {
        await Api.put(`/cidades/${id}`, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
    }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/cidades/${id}`);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao excluir o registro.');
    }
};


export const CidadesService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};