import * as React from 'react';
import Box from '@mui/material/Box';

function Home({innerRef}) {
  return (
    <Box id={"home"} ref={innerRef}
      sx={{
        p: 3,
        backgroundImage: "url('./header-bg.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: [ '60vh', '60vh', '60vh', '70vh' ]
      }}>

    </Box>
  );
}

Home.propTypes = {};

export default Home;