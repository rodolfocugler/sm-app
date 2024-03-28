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
      paddingX={{xs: 5, sm: 8, lg: 24}}
      paddingTop={{xs: 5, sm: 8, md: 13}}
      paddingBottom={{xs: 6}}>

      <Typography variant="h4">SERVIÇOS</Typography>

      <ServiceRow
        title={"SUPERVISÃO"}
        values={[ {title: "Medicina nuclear", icon: "Person"},
          {title: "Radiografia Industrial", icon: "SportsHandball"},
          {title: "Medidores Nucleares", icon: "AddCircle"} ]}/>

      <ServiceRow
        title={"CONSULTORIA"}
        values={[ {title: "Auditoria", icon: "Person"},
          {title: "Licenciamento CNEN", icon: "Person"},
          {title: "Treinamentos", icon: "Person"} ]}/>

      <ServiceRow
        title={"OUTROS"}
        values={[ {title: "Teste de Fuga", icon: "Person"},
          {title: "Levantamento Radiométrico", icon: "Person"},
          {title: "Laudos Técnicos", icon: "Person"} ]}/>
    </Grid>
  );
}

Services.propTypes = {};

export default Services;