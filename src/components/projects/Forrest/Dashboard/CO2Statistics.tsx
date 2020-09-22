import React from 'react';
import { Grid } from '@material-ui/core';
import SmallDataCard from './SubComponents/SmallDataCard';
import { CARBON_SAVINGS, COLORS } from './constants';
import { ForrestUser } from '../../../../types';

interface Props {
  user: ForrestUser;
}

const CO2Statistics: React.FC<Props> = ({ user }) => {
  return (
    <Grid container direction='row' justify='space-evenly' alignItems='center'>
      <Grid item sm>
        <SmallDataCard
          data={
            (user.carbonSaved -
              (user.carbonSaved % CARBON_SAVINGS.CARBON_PER_TREE)) /
            CARBON_SAVINGS.CARBON_PER_TREE
          }
          max={100}
          title={'Trees Planted'}
          icon={'nature'}
          iconBackground={COLORS.SECONDARY}
          unit={'Trees'}
          barUnit={'Trees'}
        />
      </Grid>
      <Grid item sm>
        <SmallDataCard
          data={user.carbonSaved % 500}
          max={CARBON_SAVINGS.CARBON_PER_TREE}
          title={'CO2 Saved Until Next Tree'}
          icon={'cloud'}
          iconBackground={COLORS.PRIMARY}
          unit={'lbs'}
          barUnit={'%'}
        />
      </Grid>
    </Grid>
  );
};

export default CO2Statistics;
