import * as React from 'react';
import {useState} from 'react';
import {Button, Divider, FormControl, Grid, TextField, Typography} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import {styled, useTheme} from "@mui/material/styles";

const SendButton = styled(Button)(({theme}) => ({
    variant: "contained",
    background: theme.palette.primary[800],
    color: theme.palette.secondary[200],
    '&:hover': {
        color: theme.palette.secondary[100],
        background: theme.palette.primary[700],
        fontWeight: 700,
        transition: "0.3s"
    }
}));

function Contact({innerRef}) {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "phone": phone,
                    "text": text
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Grid
            ref={innerRef}
            container
            direction={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            sx={{marginBottom: 5}}
            paddingX={{xs: 3, sm: 5, md: 10, lg: 24}}
            paddingTop={{xs: 5, sm: 8, md: 13}}
            paddingBottom={{xs: 6}}>

            <Typography
                variant="h4"
                mb={5}
                sx={{color: theme.palette.secondary[800]}}
            >
                CONTATO
            </Typography>

            <Grid
                container
                direction={"row"}>
                <Grid item xs={12} sm={6}>
                    <Grid
                        container
                        direction={"column"}
                        alignItems={"center"}
                        spacing={2}>

                        <Grid item xs={12}>
                            <Typography variant="body1" mb={5}>Olá, vamos conversar?!</Typography>
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

                <Divider
                    orientation={"vertical"}
                    flexItem
                    sx={{
                        mr: "-1px",
                        display: {xs: "none", sm: "block"}
                    }}/>

                <Grid item xs={12} sm={6} px={3}>
                    <FormControl
                        fullWidth={true}
                        margin={"normal"}
                        sx={{mt: {xs: 3, sm: 0}}}>

                        <TextField
                            fullWidth={true}
                            margin={"normal"}
                            type="text"
                            color='primary'
                            label="Nome"
                            name="name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={true}/>

                        <TextField
                            fullWidth={true}
                            type="email"
                            margin={"normal"}
                            color='primary'
                            name="from"
                            label="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            required={true}/>

                        <TextField
                            fullWidth={true}
                            margin={"normal"}
                            type="text"
                            color='primary'
                            label="Telefone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            variant="outlined"
                            required={false}/>

                        <TextField
                            fullWidth={true}
                            margin={"normal"}
                            name="text"
                            type="text"
                            color='primary'
                            multiline={true}
                            rows={6}
                            label="Mensagem"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            variant="outlined"
                            required={false}/>
                        <SendButton disabled={isLoading}
                                    onClick={onSubmit}>{isLoading ? 'Enviando...' : 'Enviar   '}</SendButton>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    );
}

Contact.propTypes = {};

export default Contact;