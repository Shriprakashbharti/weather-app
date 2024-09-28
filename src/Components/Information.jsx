import { Box,Typography , styled} from "@mui/material";
import {LocationOn,SettingsBrightness,Opacity,Brightness5,Brightness6,Dehaze,Cloud} from '@mui/icons-material';


const Row=styled(Typography)({
    padding:10,
    fontSize:20,
    marginLeft:50,
    marginTop:10,
    letterSpacing:2,
    '&> svg':{
        marginRight:10
    }
})
 const  Error=styled(Typography)({
    color:'red',
    margin:50,
   
})

const Information=({result})=>{
    return(
       result && Object.keys(result).length>0 ?
        <Box Style={{margin:'60px 60px' ,background: (238,174,202) }}>
            <Row><LocationOn/> Location:{result.name},{result.sys.country} </Row>
            <Row><SettingsBrightness/>Temprature: {result.main.temp} </Row>
            <Row><Opacity/>Humidiy: {result.main.humidity} </Row>
            <Row><Brightness5/>Sun rise: {new Date(result.sys.sunrise*1000).toLocaleTimeString()} </Row>
            <Row><Brightness6/>Sun set: {new Date(result.sys.sunset*1000).toLocaleTimeString()} </Row>
            <Row><Dehaze/>Humidity: {result.weather[0].main} </Row>
            <Row><Cloud/>Clouds: {result.clouds.all} %</Row>

        </Box>
        :<Error className="appLogo">Please enter the value to check the weather.</Error>
    )
}

export default Information;