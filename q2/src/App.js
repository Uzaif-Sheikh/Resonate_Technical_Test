import logo from './logo.svg';
import av from './929493.png';
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './App.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';

function App() {

  const [arrJson,setarrJson] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET'
    })
    .then((resp) => {
      if (resp.status === 200) {
        resp.json()
        .then((data) => {
          setarrJson(data);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);

  return (
    <div className="App">
      <AppBar position="static" style={{'backgroundColor':'rgba(255, 255, 255, 0.12)','marginBottom':'5px'}}>
        <Toolbar>
          <Avatar alt="logo" src={logo}></Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Q2: Real world problem 
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h2" sx={{ flexGrow: 1}} style={{"textDecoration":"underline", "textUnderlineOffset":"8px"}}>
      Contacts
      </Typography>

        <Box style={{"margin":"16px"}} className='contact-div'>
          {
            arrJson.map((data, index) => {
              console.log(data);
              return (
                <Card sx={{ maxWidth: 345 }} style={{"backgroundColor":"rgba(255, 255, 255, 0.12)", "color":"#fff", "padding":"5px","margin":"15px", "cursor":"pointer"}}>
                  <CardMedia
                    component="img"
                    height="140"
                    width="120"
                    image={av}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name} <br />
                      <Typography variant='h6' color="rgba(255, 255, 255, 0.7)">username: {data.username}</Typography>
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" style={{"display":"flex", "flexDirection":"column", "alignContent":"center"}}>
                      <LocalPhoneIcon /> {data.phone} <br />
                      <EmailIcon />{data.email} <br />
                      <LanguageIcon />{data.website} <br />
                      <BusinessIcon />{data.company.name} <br />
                      <LocationOnIcon /> {data.address.suite}<br /> {data.address.street} <br /> {data.address.city}, {data.address.zipcode}. <br />
                    </Typography>
                  </CardContent>
                </Card>
              )
            })
          }


        </Box>
    </div>
  );
}

export default App;
