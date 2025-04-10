import { Box, Paper, useTheme, Button, Icon, 
        Divider, Skeleton, Typography, 
        Theme, useMediaQuery } from '@mui/material'
import React from 'react'

interface IFerramentasDeDetalhe {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhe> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

  return (
    <Box 
        height={theme.spacing(5)} 
        gap={1}
        marginX={1} 
        padding={1} 
        paddingX={2} 
        display="flex" 
        alignItems="center"
        component={Paper}
    >
        {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
            <Button
                variant='contained'
                color='primary'
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvar}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Salvar
                </Typography>
            </Button>
        )}

        {mostrarBotaoSalvarCarregando && (
            <Skeleton width={110} height={60}/>
        )}

        {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
            <Button
                variant='outlined'
                color='primary'
                disableElevation
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvarEFechar}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Salvar e fechar
                </Typography>
            </Button>            
        )}

        {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
            <Skeleton width={180} height={60}/>
        )}

        {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
            <Button
                variant='outlined'
                color='primary'
                disableElevation
                startIcon={<Icon>delete</Icon>}
                onClick={aoClicarEmApagar}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Apagar
                </Typography>
            </Button>
        )}

        {mostrarBotaoApagarCarregando && (
            <Skeleton width={110} height={60}/>
        )}

        {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
            <Button
                variant='outlined'
                color='primary'
                disableElevation
                startIcon={<Icon>add</Icon>}
                onClick={aoClicarEmNovo}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    {textoBotaoNovo}
                </Typography>
            </Button>
        )}

        {(mostrarBotaoNovoCarregando && !smDown) && (
            <Skeleton width={110} height={60}/>
        )}

        {
            (
                mostrarBotaoVoltar && (mostrarBotaoNovo || mostrarBotaoApagar || 
                mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
            ) && (
                <Divider variant='middle' orientation='vertical'/>
            )
        }

        {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
            <Button
                variant='outlined'
                color='primary'
                disableElevation
                startIcon={<Icon>arrow_back</Icon>}
                onClick={aoClicarEmVoltar}
            >
                <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
                    Voltar
                </Typography>
            </Button>
        )}

        {mostrarBotaoVoltarCarregando && (
            <Skeleton width={110} height={60}/>
        )}

    </Box>
  )
}

