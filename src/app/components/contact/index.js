import * as React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

function Contact({innerRef}) {
  return (
    <Grid
      ref={innerRef}
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      alignContent={"center"}
      sx={{marginBottom: 5}}
      paddingX={{xs: 3, sm: 5, md: 10, lg: 24}}
      paddingTop={{xs: 5, sm: 8, md: 13}}
      paddingBottom={{xs: 6}}>

      <Typography variant="h4" mb={5}>CONTATO</Typography>

      blablabla
    </Grid>
  );
}

Contact.propTypes = {};

export default Contact;