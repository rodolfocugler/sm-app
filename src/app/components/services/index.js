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
        marginBottom: 5,
        backgroundColor: theme.palette.primary.main
      }}
      spacing={0}
      paddingX={{xs: 5, sm: 8, lg: 24}}
      paddingTop={{xs: 5, sm: 8, md: 13}}
      paddingBottom={{xs: 6}}>

      <Typography variant="h4">NOSSOS SERVIÇOS</Typography>

      <Grid
        container
        spacing={3}
        marginTop={3}
        direction={"row"}>

        <Grid item xs={4}>
          <ServiceRow
            title={"SUPERVISÃO"}
            icon={"AssignmentInd"}
            values={[ "Medicina nuclear", "Radiografia Industrial", "Medidores Nucleares" ]}/>
        </Grid>

        <Grid item xs={4}>
          <ServiceRow
            title={"CONSULTORIA"}
            icon={"Description"}
            values={[ "Auditoria", "Licenciamento CNEN", "Treinamentos" ]}/>
        </Grid>

        <Grid item xs={4}>
          <ServiceRow
            title={"OUTROS"}
            icon={"Engineering"}
            values={[ "Teste de Fuga", "Levantamento Radiométrico", "Laudos Técnicos" ]}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

Services.propTypes = {};

export default Services;