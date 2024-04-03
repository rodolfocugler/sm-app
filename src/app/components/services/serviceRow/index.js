import * as React from 'react';
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import * as Icons from '@mui/icons-material';
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

function ServiceRow({title, values, icon}) {
  const theme = useTheme();
  const IconComponent = Icons[icon];

  return (
    <Grid
      container
      direction={"column"}
      sx={{backgroundColor: theme.palette.primary[300]}}
      paddingX={{xs: 3}}
      paddingBottom={{xs: 3, sm: 5, md: 8}}
      paddingTop={7}
      position={"relative"}
      spacing={0}
      alignItems={"center"}
      alignContent={"center"}
      justifyContent={"center"}
      textAlign={"center"}>

      <Grid
        xs={12}
        borderRadius={25}
        position={"absolute"}
        top={-40}
        sx={{backgroundColor: theme.palette.primary[700]}}>
        <IconComponent fontSize={"large"}
                       sx={{
                         display: {xs: "none", sm: "block"},
                         margin: 3,
                         padding: 0
                       }}/>
      </Grid>

      <Grid item xs={12}>
        <Typography variant={"h5"} fontWeight={"bold"}>{title}</Typography>
      </Grid>

      <Grid item xs={12}>
        <List>
          {values.map((item) => (
            <ListItem key={item} disablePadding
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: "center",
                        marginTop: 5,
                        fontSize: "1.1rem"
                      }}>
              < Typography variant={"body1"}>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Grid>

    </Grid>
  );
}

ServiceRow.propTypes = {};

export default ServiceRow;