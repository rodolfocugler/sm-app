import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {Grid, ListItemIcon} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {useTheme} from "@mui/material/styles";
import {CheckCircleOutline} from "@mui/icons-material";

function About({innerRef}) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                marginBottom: 0,
                backgroundColor: theme.palette.secondary[300],
                color: theme.palette.secondary[900],
            }}
            paddingLeft={{xs: 5, sm: 8, lg: 24}}
            paddingRight={{xs: 5, sm: 0}}
            paddingTop={{xs: 5, sm: 8, md: 13}}
            paddingBottom={{xs: 5, sm: 8, md: 13}}
            ref={innerRef}>

            <Grid
                container
                spacing={3}
                alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">QUEM SOMOS</Typography>

                    <Typography
                        variant="body1"
                        textAlign={"justify"}
                        sx={{pt: 5}}>
                        A SM Assessoria em Radioproteção é uma empresa do ramo de prestação de serviços e consultoria em
                        radioproteção fundada em 2014. Está sediada em Sorocaba/SP e desenvolve atividades no ramo de
                        segurança
                        radiológica que visam estabelecer cuidados essenciais ao desempenho humano no trabalho,
                        otimizando recursos
                        naturais e materiais, segundo as normas vigentes de proteção radiológica no território nacional.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            mt: 6,
                            fontSize: 22
                        }}>
                        RESPONSABILIDADE TÉCNICA
                    </Typography>

                    <Typography
                        variant="h6">
                        Salvador Mangini Filho
                    </Typography>

                    <List dense={true} sx={{marginLeft: 3}}>
                        <ListItem>
                            <ListItemIcon sx={{minWidth: 40}}>
                                <CheckCircleOutline/>
                            </ListItemIcon>
                            <ListItemText primary={"Radiografia Industrial"} secondary={"1989 (IR - 0356)"}/>
                        </ListItem>

                        <ListItem>
                            <ListItemIcon sx={{minWidth: 40}}>
                                <CheckCircleOutline/>
                            </ListItemIcon>
                            <ListItemText primary={"Medidores Nucleares Industrias"} secondary={"2003 (MN - 0949)"}/>
                        </ListItem>

                        <ListItem>
                            <ListItemIcon sx={{minWidth: 40}}>
                                <CheckCircleOutline/>
                            </ListItemIcon>
                            <ListItemText primary={"Física Médica"} secondary={"2007 (FM - 0077)"}/>
                        </ListItem>
                    </List>
                    {/*<List sx={{width: '100%'}}>*/}
                    {/*    <ListItem alignItems="flex-start">*/}
                    {/*        <ListItemAvatar sx={{display: {xs: 'none', sm: 'block'}}}>*/}
                    {/*            <Avatar sx={{bgcolor: theme.palette.primary.main, width: 50, height: 50}}>*/}
                    {/*                <CheckCircleOutline/>*/}
                    {/*            </Avatar>*/}
                    {/*        </ListItemAvatar>*/}
                    {/*        <ListItemText*/}
                    {/*            sx={{ml: 2}}*/}
                    {/*            primary={*/}
                    {/*                <React.Fragment>*/}
                    {/*                    <Typography pb={{xs: 1, lg: 0}}>*/}
                    {/*                        Radiografia Industrial, 1989 (IR - 0356)*/}
                    {/*                    </Typography>*/}

                    {/*                    <Typography pb={{xs: 1, lg: 0}}>*/}
                    {/*                        Medidores Nucleares Industrias, 2003 (MN - 0949)*/}
                    {/*                    </Typography>*/}

                    {/*                    <Typography pb={{xs: 1, lg: 0}}>*/}
                    {/*                        Física Médica, 2007 (FM - 0077)*/}
                    {/*                    </Typography>*/}
                    {/*                </React.Fragment>*/}
                    {/*            }*/}
                    {/*        />*/}
                    {/*    </ListItem>*/}
                    {/*</List>*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            borderRadius: {xs: '25px', sm: '125px 0 0 125px'},
                            marginLeft: {xs: 0, sm: 4},
                            backgroundImage: "url('about-us-bg.jpeg')",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: ['30vh', '45vh', '30vh', '60vh']
                        }}>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

About.propTypes = {};

export default About;