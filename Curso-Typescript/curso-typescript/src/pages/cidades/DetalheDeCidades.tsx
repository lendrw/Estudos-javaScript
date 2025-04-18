/* eslint-disable no-console */
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { CidadesService } from "../../shared/services/api/cidades/CidadesService";
import { VTextField, VForm, useVForm, IVFormErrors } from "../../shared/forms";
import { Box, Grid2, LinearProgress, Paper, Typography } from "@mui/material";
import * as yup from 'yup';

interface IFormData {
    nome: string;
}

const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({
    nome: yup.string().required().min(3),
});

export const DetalheDeCidades: React.FC = () => {
    const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            CidadesService.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);

                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/cidades');
                    } else {
                        setNome(result.nome);
                        formRef.current?.setData(result);
                    }
                });
        } else {
            formRef.current?.setData({
                nome: '',
            });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {

        formValidationSchema.
            validate(dados, { abortEarly: false })
            .then((dadosValidados) => {   
                setIsLoading(true);

                if (id === 'nova') {
                    CidadesService
                        .create(dadosValidados)
                        .then((result) => {
                            setIsLoading(false);
        
                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/cidades');
                                } else {
                                    navigate(`/cidades/detalhe/${result}`);
                                }                    
                            }
                        });
                } else {
                    CidadesService
                        .updateById(Number(id), { id: Number(id), ...dadosValidados })
                        .then((result) => {
                            setIsLoading(false);
                            
                            if (result instanceof Error) {
                                alert(result.message);
                            } else { if (isSaveAndClose()) {
                                navigate('/cidades');
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
            CidadesService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        alert('Registro apagado com sucesso!');
                        navigate('/cidades');
                    }
                });
        }
    };

    return (
        <LayoutBaseDePagina
            titulo={id === 'nova' ? 'Nova cidade' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo="Nova"
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvar={save}
                    aoClicarEmSalvarEFechar={saveAndClose}
                    aoClicarEmApagar={() => handleDelete(Number(id))}
                    aoClicarEmVoltar={() => navigate('/cidades')}
                    aoClicarEmNovo={() => navigate('/cidades/detalhe/nova')}
                />
            }
        >

        <VForm 
            ref={formRef} 
            onSubmit={handleSave} 
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}
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
                                label='Nome' 
                                name='nome'
                                onChange={e => setNome(e.target.value)}/>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Box>
        </VForm>
        
        </LayoutBaseDePagina>
    )
}