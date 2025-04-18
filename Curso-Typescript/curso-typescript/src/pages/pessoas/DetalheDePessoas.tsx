/* eslint-disable no-console */
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { VTextField, VForm, useVForm, IVFormErrors } from "../../shared/forms";
import { Box, Grid2, LinearProgress, Paper, Typography } from "@mui/material";
import * as yup from 'yup';
import { AutoCompleteCidade } from "./components/AutoCompleteCidade";

interface IFormData {
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({
    email: yup.string().required().email(),
    cidadeId: yup.number().required(),
    nomeCompleto: yup.string().required().min(3),
});

export const DetalheDePessoas: React.FC = () => {
    const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();

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
                cidadeId: undefined,
                nomeCompleto: '',
            });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {

        formValidationSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {   
                setIsLoading(true);

                if (id === 'nova') {
                    PessoasService
                        .create(dadosValidados)
                        .then((result) => {
                            setIsLoading(false);
        
                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/pessoas');
                                } else {
                                    navigate(`/pessoas/detalhe/${result}`);
                                }                    
                            }
                        });
                } else {
                    PessoasService
                        .updateById(Number(id), { id: Number(id), ...dadosValidados })
                        .then((result) => {
                            setIsLoading(false);
                            
                            if (result instanceof Error) {
                                alert(result.message);
                            } else { if (isSaveAndClose()) {
                                navigate('/pessoas');
                            }}
                        });
                }

            })
            .catch((errors: yup.ValidationError) => {
                const validationErrors: IVFormErrors = {};

                errors.inner.forEach(error => {
                    if (!error.path) return;

                    validationErrors[error.path] = error.message;
                });

                console.log(validationErrors);
                formRef.current?.setErrors(validationErrors);
            });
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

                    aoClicarEmSalvar={save}
                    aoClicarEmSalvarEFechar={saveAndClose}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                />
            }
        >

        <VForm 
            ref={formRef} 
            onSubmit={handleSave} 
        >
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

                    <Grid2 container direction='row' spacing={2} maxHeight={90}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 2 }}>
                            <VTextField 
                                fullWidth
                                disabled={isLoading}
                                label='Nome completo' 
                                name='nomeCompleto'
                                onChange={e => setNome(e.target.value)}/>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction='row' spacing={2} maxHeight={90}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 2 }}>
                            <VTextField 
                                fullWidth
                                disabled={isLoading}
                                label='E-mail' 
                                name='email'/>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction='row' spacing={2} maxHeight={90}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 2 }}>
                            <AutoCompleteCidade isExternalLoading={isLoading}/>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Box>
        </VForm>
        
        </LayoutBaseDePagina>
    )
}