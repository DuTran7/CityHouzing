import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import { StyledBtnContain } from 'components/ukit/Button';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import styles from 'components/home/outstandingProject/OutstandingProject.module.css';

const useStyles = makeStyles({
  hoverElement: {
    height: '100%',
    width: '100%',
    '&:hover': {
      boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
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

  const BoxContent = ({ project, index }) => {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className={classes.hoverElement}
      >
        <Box
          className={styles['box-content']}
        >
          <Typography
            className={styles['box-content-name']}
          >
            {project.name}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              style={{
                fontSize: '0.813rem',
                fontWeight: 600,
                lineHeight: '1rem',
                marginBottom: '2.813rem',
              }}
            >
              Great deal available
            </Typography>
            <StyledBtnContain
              fontSize="1,25rem"
              fontWeight="600"
              lineheight="1,25rem"
              sx={{
                height: '1.688rem',
                fontSize: '0.875',
                lineheight: '1.5rem',
                width: "100%"
              }}
            >
              View Details
            </StyledBtnContain>
          </Box>
        </Box>
      </Box>
    );
  };

  const ProjectList = () => {
    return (
      <Grid container spacing={5}>
        {projects.map((project, index) => {
          if (index === 0) {
            return (
              <Grid key={project.id} xl={8} lg={8} md={12} sm={12} xs={12} item>
                <Box
                  style={{
                    backgroundImage: "url('/home/project.png')",
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <BoxContent project={project} index={index}></BoxContent>
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
                    height: '100%',
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    className={classes.hoverElement}
                  >
                    <BoxContent project={project} index={index}></BoxContent>
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
    <Box className={styles['container']}>
      <ProjectList></ProjectList>
    </Box>
  );
}

export default OutstandingProject;
