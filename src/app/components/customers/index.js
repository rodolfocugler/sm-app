import * as React from 'react';
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import CustomerList from "../../../../public/CustomerList.json";
import Carousel from 'react-elastic-carousel';
import "./style.css"
import Image from "next/image";
import {useTheme} from "@mui/material/styles";

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 3, itemsToScroll: 3},
    {width: 768, itemsToShow: 4, itemsToScroll: 4},
    {width: 1200, itemsToShow: 4, itemsToScroll: 4}
];

function Customers({innerRef}) {
    const theme = useTheme();
    const {elastic} = CustomerList.CustomerList;

    return (
        <Grid
            ref={innerRef}
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            sx={{
                marginBottom: 5,
                backgroundColor: theme.palette.secondary[300],
            }}
            paddingX={{xs: 3, sm: 5, md: 10, lg: 24}}
            paddingTop={{xs: 10, sm: 8, md: 13}}
            paddingBottom={{xs: 6}}>

            <Typography
                variant="h4"
                mb={5}
                sx={{color: theme.palette.secondary[800]}}
            >
                CLIENTES
            </Typography>

            <Carousel breakPoints={breakPoints} isRTL={false}>
                {elastic.map((item) => (
                    <Image
                        key={item.id}
                        src={item.imageUrl}
                        loading={"lazy"}
                        width={150}
                        height={150}
                        alt={item.title}
                    />
                ))}
            </Carousel>
        </Grid>
    );
}

Customers.propTypes = {};

export default Customers;