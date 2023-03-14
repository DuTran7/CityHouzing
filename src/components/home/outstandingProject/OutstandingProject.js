import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import { StyledBtnContain } from 'components/ukit/Button';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import styles from 'components/home/outstandingProject/OutstandingProject.module.css';

const useStyles = makeStyles({
  hoverElement: {},
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
        className={styles['box-warp-content']}
      >
        <Box className={styles['box-content']}>
          <Typography className={styles['box-content-name']}>
            {project.name}
          </Typography>
          <Box sx={{ textAlign: 'center', height: '3.875rem' }}>
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
              fontWeight="600"
              className={styles['btn-view-detail']}
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
                    className={styles['box-warp-content']}
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
