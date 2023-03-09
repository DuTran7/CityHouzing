import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import Property from 'components/shared/Property';
import { StyledBtnContain } from 'components/ukit/Button';
import React, { useState } from 'react';
import { theme } from 'theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hoverElement: {
    // backgroundColor: 'red !important',
    '&:hover': {
      width: '100% !important',
      height: '100% !important',
      margin: '0 !important',

    },
  },
});

function OutstandingProject() {
  const [projects, setProjects] = useState([
    {
      main: true,
      id: Math.ceil(Math.random() * 99999),
      name: 'Apartment mini q9',
      description: 'Great deal available',
    },
    {
      main: false,
      id: Math.ceil(Math.random() * 99999),
      name: 'Apartment mini q9',
      description: 'Great deal available',
    },
    {
      main: false,
      id: Math.ceil(Math.random() * 99999),
      name: 'Apartment mini q9',
      description: 'Great deal available',
    },
    {
      main: false,
      id: Math.ceil(Math.random() * 99999),
      name: 'Apartment mini q9',
      description: 'Great deal available',
    },
    {
      main: false,
      id: Math.ceil(Math.random() * 99999),
      name: 'Apartment mini q9',
      description: 'Great deal available',
    },
  ]);

  const classes = useStyles();

  const ProjectList = () => {
    return (
      <Grid container spacing={5}>
        {projects.map((project) => {
          if (project.main) {
            return (
              <Grid key={project.id} xl={8} md={12} sm={12} xs={12} item>
                <Box
                  style={{
                    backgroundImage: "url('/home/project.png')",
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "rgb(250, 40, 38)"
                  }}
                  
                >
                  <Box
                    style={{
                      display: 'inline-block',
                      boxSizing: 'border-box',
                      margin: '80px',
                      padding: '45px 120px',
                      textAlign: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className={classes.hoverElement}
                  >
                    <Typography style={{ marginBottom: '30px' }} variant="h3">
                      {project.name}
                    </Typography>
                    <Typography style={{ marginBottom: '30px' }} variant="h6">
                      {project.description}
                    </Typography>
                    <StyledBtnContain
                      fontSize="20px"
                      fontWeight="600"
                      lineheight="20px"
                      style={{ height: 'auto' }}
                    >
                      View Details
                    </StyledBtnContain>
                  </Box>
                </Box>
              </Grid>
            );
          } else {
            return (
              <Grid key={project.id} xl={4} md={6} sm={12} xs={12} item>
                <Box
                  style={{
                    backgroundImage: "url('/home/project.png')",
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    style={{
                      display: 'inline-block',
                      boxSizing: 'border-box',
                      margin: '80px',
                      padding: '45px',
                      textAlign: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className={classes.hoverElement}
                  >
                    <Typography
                      style={{
                        marginBottom: '30px',
                        ':hover': {
                          cursor: '#efefef',
                        },
                      }}
                      variant="h3"
                    >
                      {project.name}
                    </Typography>
                    <Typography style={{ marginBottom: '30px' }} variant="h6">
                      {project.description}
                    </Typography>
                    <StyledBtnContain
                      fontSize="20px"
                      fontWeight="600"
                      lineheight="20px"
                      style={{ height: 'auto' }}
                    >
                      View Details
                    </StyledBtnContain>
                  </Box>
                </Box>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  };

  return (
    <Box style={{ margin: '35px' }}>
      <ProjectList></ProjectList>
    </Box>
  );
}

export default OutstandingProject;
