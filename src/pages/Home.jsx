import {Box, styled} from '@mui/material';
import { useState } from 'react';
import Sunset from '../assests/images/bg.jpg';
import Form from '../Components/Form';
import Information from '../Components/Information';
const Component =styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    margin:'0 auto',
    width:'65%'
})

const Image = styled(Box)({
    backgroundImage:`url(${Sunset})`,
    height:'80%',
    width:'28%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px ',
    font:'20px',
    display:'flex'

})

const Home=()=>{
    const [result,setResult]=useState({})
    return(
        <Component >
         
            <Image>
                <Box style={{margin:'15px 20px' , color:'black',   }}>
                    SEARCH WEATHER
                </Box>
             
            </Image>
               
            <Box style={{width:'72%',height:'80%'}}>
                <Form setResult={setResult}></Form>
                <Information result={result}></Information>
            </Box>
        </Component>
    )
};

export default Home;