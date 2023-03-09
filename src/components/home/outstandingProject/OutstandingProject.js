import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import Property from 'components/shared/Property';
import { StyledBtnContain } from 'components/ukit/Button';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hoverElement: {
    // backgroundColor: 'red !important',
    '&:hover': {
      width: '100%',
      height: '100%',
      margin: '5rem 0rem !important',
      // padding: "0px !important",
    },
  },
});

function OutstandingProject({ data }) {
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

  useEffect(() => {
    console.log('OutstandingProject', data);
  }, []);

  const classes = useStyles();

  const ProjectList = () => {
    return (
      <Grid container spacing={5}>
        {projects.map((project) => {
          if (project.main) {
            return (
              <Grid  key={project.id} xl={8} lg={8} md={12} sm={12} xs={12} item>
                <Box
                  style={{
                    backgroundImage: "url('/home/project.png')",
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    // padding: '80px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(250, 40, 38)',
                  }}
                >
                  <Box
                    style={{
                      margin: '5rem',
                      padding: '4rem 10rem',
                      textAlign: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className={classes.hoverElement}
                  >
                    <Typography style={{ marginBottom: '1,875' }} variant="h4">
                      {project.name}
                    </Typography>
                    <Typography style={{ marginBottom: '1,875' }} variant="h6">
                      {project.description}
                    </Typography>
                    <StyledBtnContain
                      fontSize="1,25rem"
                      fontWeight="600"
                      lineheight="1,25rem"
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
              <Grid key={project.id} xl={4} md={6} lg={4} sm={12} xs={12} item>
                <Box
                  style={{
                    backgroundImage: "url('/home/project.png')",
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%', //padding: '80px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    style={{
                      margin: '5rem',
                      padding: '2.8125rem',
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
                        marginBottom: '1,875rem',
                        margin: 0,
                        ':hover': {
                          cursor: '#efefef',
                        },
                      }}
                      variant="h4"
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      style={{ marginBottom: '1,875rem'}}
                      variant="h6"
                    >
                      {project.description}
                    </Typography>
                    <StyledBtnContain
                      fontSize="20px"
                      fontWeight="600"
                      lineheight="20px"
                      style={{ height: 'auto', margin: 0 }}
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
