import * as React from 'react';
import Box from '@mui/material/Box';
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import {Grid} from "@mui/material";

function Footer() {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.primary.main,
        justifySelf: "center",
        justifyContent: "center",
        alignItems: "center"
      }}
      paddingX={{xs: 2, sm: 5, md: 15, lg: 25}}
      paddingY={{xs: 5}}
      direction={"row"}
      spacing={3}
      justifyContent={"space-between"}>

      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifySelf: "center",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Typography variant={"h6"}>SM Assessoria em Radioproteção</Typography>
          <Typography variant={"body1"}>www.smradioprotecao.com.br</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifySelf: "center",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Typography variant={"h6"}>Fale Conosco</Typography>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <CallIcon/>
            <Typography variant={"body1"}>+55 (15) 99707-7238</Typography>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <EmailIcon/>
            <Typography variant={"body1"}>atendimento@smradioprotecao.com.br</Typography>
          </div>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Typography variant={"caption"}>© 2017 | www.smradioprotecao.com.br | Todos Direitos Reservados</Typography>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {};

export default Footer;