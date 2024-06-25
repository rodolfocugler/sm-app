import * as React from 'react';
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import ServiceRow from "@/app/components/services/serviceRow";

function Services({innerRef}) {
    const theme = useTheme();

    return (
        <Grid
            ref={innerRef}
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                backgroundColor: theme.palette.secondary[100],
                color: theme.palette.secondary[300]
            }}
            spacing={0}
            paddingX={{xs: 5, sm: 4, lg: 24}}
            paddingTop={{xs: 5, sm: 8, md: 13}}
            paddingBottom={{xs: 6}}>

            <Typography
                variant="h4"
                sx={{
                    color: theme.palette.secondary[900]
                }}>
                NOSSOS SERVIÇOS
            </Typography>

            <Grid
                container
                spacing={3}
                marginTop={5}
                direction={"row"}>

                <Grid item xs={12} sm={4}>
                    <ServiceRow
                        title={"SUPERVISÃO"}
                        icon={"AssignmentInd"}
                        values={["Radiografia Industrial", "Medidores Nucleares Industriais", "Medicina nuclear"]}/>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <ServiceRow
                        title={"CONSULTORIA"}
                        icon={"Description"}
                        values={["Licenciamento CNEN", "Treinamentos", "Auditoria"]}/>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <ServiceRow
                        title={"OUTROS"}
                        icon={"Engineering"}
                        values={["Levantamento Radiométrico", "Laudos Técnicos", "Teste de Fuga"]}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

Services.propTypes = {};

export default Services;