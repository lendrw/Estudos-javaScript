import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IListagemPessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

export interface IDetalhePessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {
    try {
        // Primeiro, busca todos os dados pra contar
        const { data: todos } = await Api.get<IListagemPessoa[]>('/pessoas');

        // Filtra (se tiver filtro)
        const dadosFiltrados = filter
            ? todos.filter(p =>
                  p.nomeCompleto.toLowerCase().includes(filter.toLowerCase())
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
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
};



const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {
        const { data } = await Api.get(`/pessoas/${id}`);

        if (data) {
            return data;
        }

        return new Error('Erro ao consultar o registro.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
    }
};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<Number | Error> => {
    try {
        const { data } = await Api.post<IDetalhePessoa>('/pessoas', dados);

        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar o registro.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    }
};

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {
        await Api.put(`/pessoas/${id}`, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
    }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/pessoas/${id}`);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao excluir o registro.');
    }
};


export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};