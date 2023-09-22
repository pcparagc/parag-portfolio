import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../assets/info/Info';

export default function Portfolio() {
  return (
    <Box style={{ marginTop: '20px' }}>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              description={project.description}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
