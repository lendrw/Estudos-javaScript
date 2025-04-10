import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { VTextField, VForm } from "../../shared/forms";
import { FormHandles } from "@unform/core";
import { Box, Grid2, LinearProgress, Paper, Typography } from "@mui/material";

interface IFormData {
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

export const DetalheDePessoas: React.FC = () => {
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();
    const formRef = useRef<FormHandles>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            PessoasService.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/pessoas');
                    } else {
                        setNome(result.nomeCompleto);
                        formRef.current?.setData(result);
                    }
                });
        } else {
            formRef.current?.setData({
                email: '',
                cidadeId: '',
                nomeCompleto: '',
            });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {
        setIsLoading(true);

        if (id === 'nova') {
            PessoasService
                .create(dados)
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        navigate(`/pessoas/detalhe/${result}`);
                    }
                });
        } else {
            PessoasService
                .updateById(Number(id), { id: Number(id), ...dados })
                .then((result) => {
                    setIsLoading(false);
                    
                    if (result instanceof Error) {
                        alert(result.message);
                    } 
                });
        }
    };

    const handleDelete = (id: number) => {
        if(confirm('Realmente deseja apagar?')) {
            PessoasService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        alert('Registro apagado com sucesso!');
                        navigate('/pessoas');
                    }
                });
        }
    };

    return (
        <LayoutBaseDePagina
            titulo={id === 'nova' ? 'Nova pessoa' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo="Nova"
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvar={() => formRef.current?.submitForm()}
                    aoClicarEmSalvarEFechar={() => formRef.current?.submitForm()}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                />
            }
        >

        <VForm ref={formRef} onSubmit={handleSave}>
            <Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
                
                <Grid2 container direction='column' padding={2} spacing={2}>

                    {isLoading && (
                        <Grid2>
                            <LinearProgress variant='indeterminate'/>
                        </Grid2>
                    )}

                    <Grid2>
                        <Typography variant='h6'>Geral</Typography>
                    </Grid2>

                    <Grid2 container direction='row' spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 2 }}>
                            <VTextField 
                                fullWidth
                                disabled={isLoading}
                                label='Nome completo' 
                                name='nomeCompleto'
                                onChange={e => setNome(e.target.value)}/>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction='row' spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 2 }}>
                            <VTextField 
                                fullWidth
                                disabled={isLoading}
                                label='E-mail' 
                                name='email'/>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction='row' spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 2 }}>
                            <VTextField 
                                fullWidth
                                disabled={isLoading}
                                label='Cidade' 
                                name='cidadeId'/>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Box>
        </VForm>
        
        </LayoutBaseDePagina>
    )
}