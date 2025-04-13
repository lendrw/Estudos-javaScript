import { Box, Card, CardContent, Grid2, Typography } from "@mui/material"
import { FerramentasDeDetalhe } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { useEffect, useState } from "react"
import { CidadesService } from "../../shared/services/api/cidades/CidadesService"
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService"


export const Dashboard = () => {
    const [isLoadingPessoas, setIsLoadingPessoas] = useState(true);
    const [isLoadingCidades, setIsLoadingCidades] = useState(true);
    const [totalCountCidades, setTotalCountCidades] = useState(0);
    const [totalCountPessoas, setTotalCountPessoas] = useState(0);

    useEffect(() => {
        setIsLoadingCidades(true);
        setIsLoadingPessoas(true);
    
            CidadesService.getAll(1)
                .then((result) => {
                    setIsLoadingCidades(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setTotalCountCidades(result.totalCount);
                    }
                });

            PessoasService.getAll(1)
                .then((result) => {
                    setIsLoadingPessoas(false);

                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setTotalCountPessoas(result.totalCount);
                    }
                    });
        }, []);


    return (
        <LayoutBaseDePagina 
            titulo="Página inicial" 
            barraDeFerramentas={(
                <FerramentasDeDetalhe
                    mostrarBotaoSalvar={false}
                    mostrarBotaoApagar={false}
                    mostrarBotaoNovo={false}
                    mostrarBotaoVoltar={false}
                />
            )}
        >
            <Box width='100%' display='flex'>
                <Grid2 
                    container 
                    margin={2} 
                    spacing={2}
                    width='100%'
                >
                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                        <Card>
                            <CardContent>
                                <Typography variant='h5' align='center'>
                                    Total de pessoas
                                </Typography>

                                <Box 
                                    padding={6} 
                                    display='flex' 
                                    justifyContent='center'
                                    alignItems='center'
                                >
                                    {!isLoadingPessoas && (
                                        <Typography variant='h1'>
                                            {totalCountPessoas}
                                        </Typography>
                                    )}
                                    {isLoadingPessoas && (
                                        <Typography variant='h6'>
                                            Carregando...
                                        </Typography>
                                    )}
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                        <Card>
                            <CardContent>
                                <Typography variant='h5' align='center'>
                                    Total de cidades
                                </Typography>

                                <Box 
                                    padding={6} 
                                    display='flex' 
                                    justifyContent='center'
                                    alignItems='center'
                                >
                                    {!isLoadingCidades && (
                                        <Typography variant='h1'>
                                            {totalCountCidades}
                                        </Typography>
                                    )}
                                    {isLoadingCidades && (
                                        <Typography variant='h6'>
                                            Carregando...
                                        </Typography>
                                    )}
                                </Box>
                                
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
        </LayoutBaseDePagina>
    )
}