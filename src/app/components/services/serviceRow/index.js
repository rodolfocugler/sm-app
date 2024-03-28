import * as React from 'react';
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import * as Icons from '@mui/icons-material';

function ServiceRow({title, values}) {
  const theme = useTheme();

  return (
    <Grid
      container
      direction={"row"}
      borderRadius={"25px"}
      border={0}
      sx={{
        backgroundColor: theme.palette.primary[300]
      }}
      padding={{xs: 3, sm: 6}}
      margin={2}
      spacing={1}
      alignItems={"center"}
      alignContent={"center"}
      justifyContent={"center"}
      textAlign={"center"}>

      <Grid item xs={12} sm={3}>
        <Typography variant={"h6"}>{title}</Typography>
      </Grid>

      {values.map(item => {
        const IconComponent = Icons[item.icon];

        return (
          <Grid item xs={12} sm={3} key={item}>
            <Grid
              container
              direction={"column"}
              alignItems={"center"}>
              <IconComponent fontSize={"large"} sx={{display: {xs: "none", sm: "block"}}}/>
              <Typography variant={"subtitle1"}>{item.title}</Typography>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  );
}

ServiceRow.propTypes = {};

export default ServiceRow;