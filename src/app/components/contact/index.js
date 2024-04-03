import * as React from 'react';
import {Button, Divider, FormControl, Grid, TextField, Typography} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function Contact({innerRef}) {
  return (
    <Grid
      ref={innerRef}
      container
      direction={"row"}
      justifyContent={"center"}
      alignContent={"center"}
      sx={{marginBottom: 5}}
      paddingX={{xs: 3, sm: 5, md: 10, lg: 24}}
      paddingTop={{xs: 5, sm: 8, md: 13}}
      paddingBottom={{xs: 6}}>

      <Grid item xs={12} sm={6}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          spacing={2}>

          <Grid item xs={12}>
            <Typography variant="h4" mb={5}>Contato</Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
              <CallIcon/>
              <Typography variant={"body1"}>+55 (15) 99707-7238</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
              <EmailIcon/>
              <Typography variant={"body1"}>atendimento@smradioprotecao.com.br</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Divider orientation="vertical" flexItem sx={{mr: "-1px"}}/>

      <Grid item xs={12} sm={6} px={3}>
        <FormControl
          fullWidth={true}
          margin={"normal"}
          sx={{mt: 0}}>

          <TextField
            fullWidth={true}
            margin={"normal"}
            type="text"
            color='primary'
            label="Nome"
            variant="outlined"
            required={true}/>

          <TextField
            fullWidth={true}
            type="email"
            margin={"normal"}
            color='primary'
            label="E-mail"
            variant="outlined"
            required={true}/>

          <TextField
            fullWidth={true}
            margin={"normal"}
            type="text"
            color='primary'
            label="Telefone"
            variant="outlined"
            required={false}/>
          <Button>Submit</Button>
        </FormControl>
      </Grid>

    </Grid>
  );
}

Contact.propTypes = {};

export default Contact;