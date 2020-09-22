import {
  Grid,
  Typography,
  Hidden,
  Card,
  CardContent,
  CardActions
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import forrest from '../../../content/projects/Forrest.json';

interface Props {
  title: string;
  description: string;
}

const InfoCard: React.FC<Props> = ({ title, description }) => {
  const iconType = <LanguageIcon />;

  return (
    <div>
      <Hidden smDown>
        <Box height={200} width={420} m={1}>
          <Card style={{ backgroundColor: '#DDDDDD', height: 175 }}>
            <CardContent>
              <Grid
                container
                direction='column'
                justify='space-around'
                alignItems='center'
              >
                <Box paddingBottom={1}>{iconType}</Box>
                <Typography color='textSecondary' gutterBottom>
                  {title}
                </Typography>
                <Typography variant='body2' component='p'>
                  {description}
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              ></Grid>
            </CardActions>
          </Card>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box height={285} width={240} m={1}>
          <Card variant='outlined'>
            <CardContent>
              <Grid
                container
                direction='column'
                justify='space-around'
                alignItems='center'
              >
                <Box paddingBottom={1}>{iconType}</Box>
                <Typography color='textSecondary' gutterBottom>
                  {title}
                </Typography>
                <Typography variant='body2' component='p'>
                  {description}
                </Typography>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              ></Grid>
            </CardActions>
          </Card>
        </Box>
      </Hidden>
    </div>
  );
};

const ResourcesBox = () => {
  return (
    <Box boxShadow={4} bgcolor='background.paper' m={5} p={3} borderRadius={8}>
      <Typography
        color='textPrimary'
        style={{
          fontSize: 40,
          marginTop: 10,
          marginBottom: 20,
          fontWeight: 600
        }}
      >
        ABOUT
      </Typography>
      <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='flex-start'
      >
        {forrest.resources.map((element: any, index: number) => (
          <Grid item>
            <InfoCard title={element.title} description={element.body} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResourcesBox;
