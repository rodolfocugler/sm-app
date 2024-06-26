import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Grid } from "@mui/material";
import  Image from "next/image";

function Footer() {
    const theme = useTheme();

    return (
        <Grid
            container
            sx={{
                backgroundColor: theme.palette.primary[900],
                color: theme.palette.secondary.main
            }}
            paddingX={{ xs: 2, sm: 5, md: 15, lg: 25 }}
            paddingY={{ xs: 3 }}
            direction={"row"}
            spacing={4}
            justifyContent={"space-between"}>

            <Grid item xs={12} sm={6} md={5} lg={5}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                        <Image
                            src="/logo-white.jpeg"
                            width={400}
                            height={68}
                            alt={"SM Assessoria em Radioproteção"}
                        />
                    <Typography sx={{
                        marginTop: 2,
                        typography: { sm: 'body1', md: 'body2' },
                    }}>www.smradioprotecao.com.br</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={2} lg={3} sx={{ display: { sm: 'none', md: 'block' } }}></Grid>
            <Grid item xs={12} sm={6} md={5} lg={4} sx={{alignContent: "center"}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: { xs: "center", sm: "left" }
                    }}>
                    <Typography variant={"h6"}>Fale Conosco</Typography>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10
                    }}>
                        <CallIcon />
                        <Typography variant={"body2"}>+55 (15) 99707-7238</Typography>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginTop: 5
                    }}>
                        <EmailIcon />
                        <Typography variant={"body2"}>atendimento@smradioprotecao.com.br</Typography>
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
                <Typography variant={"caption"}>© 2017 | www.smradioprotecao.com.br | Todos Direitos
                    Reservados</Typography>
            </Grid>
        </Grid>
    );
}

Footer.propTypes = {};

export default Footer;