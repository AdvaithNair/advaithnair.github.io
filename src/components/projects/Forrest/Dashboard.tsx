import React from 'react';
import { Box, Divider } from '@material-ui/core';
import CO2Statistics from './Dashboard/CO2Statistics';
import DrivingConstants from './Dashboard/DrivingConstants';
import UserComponent from './Dashboard/UserComponent';
import socials from '../../../content/code/socials.json';

const Dashboard: React.FC = () => {
  const randomNumber = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const user = {
    username: 'advaithnair',
    firstName: 'Advaith',
    lastName: 'Nair',
    imageURL:
      'https://www.google.com/search?q=advaith+nair&rlz=1C5CHFA_enUS737US737&sxsrf=ALeKk00GP4aNUXCvTodTKgDm6UltSNU26g:1600749663884&source=lnms&tbm=isch&sa=X&ved=2ahUKEwik9tuY-fvrAhWWq54KHeNuCOEQ_AUoAXoECAsQAw&biw=1920&bih=946#imgrc=N0rPimNLttAsWM',
    facebook: socials.socials[0].link,
    instagram: socials.socials[1].link,
    twitter: socials.socials[5].link,
    snapchat: socials.socials[2].link,
    carType: 'SUV',
    avgHighwayOver: randomNumber(5, 15),
    avgCityOver: randomNumber(3, 15),
    carbonSaved: randomNumber(10000, 100000) / 11,
    routesTaken: randomNumber(5, 40),
    routeLogs: []
  };

  return (
    <Box boxShadow={4} bgcolor='background.paper' m={5} p={3} borderRadius={8}>
      <UserComponent user={user} />
      <Box m={2}>
        <Divider />
      </Box>
      <CO2Statistics user={user} />
      <Box m={2}>
        <Divider />
      </Box>
      <DrivingConstants user={user} />
    </Box>
  );
};

export default Dashboard;
