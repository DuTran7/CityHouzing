import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { theme } from 'theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  chipBox: {
    padding: '0 1.625rem',
    height: 'auto',
    '& span': {
      padding: '0.625rem 0',
      fontSize: '1.375 rem',
      lineHeight: '1.438rem',
      height: 'auto',
      fontWeight: 400,
    },
  },
});
function Property({
  padding,
  chipContent,
  title,
  bodyComponent: BodyComponent,
  backgroundColor,
  data,
}) {
  const classes = useStyles();
  return (
    <Box
      style={{
        padding: padding,
        backgroundColor: backgroundColor || theme.palette.common.white,
      }}
    >
      {title && (
        <Box
          className="property-header"
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <Chip
            sx={{
              backgroundColor: `${theme.palette.background.property}`,
              color: theme.palette.text.title,
              overflow: 'unset',
              marginBottom: '15px',
              fontSize: '22px',
              // height: '35px',
            }}
            className={classes.chipBox}
            size="medium"
            label={chipContent}
          />

          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.title,
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: '3.313rem',
            }}
          >
            {title}
          </Typography>
        </Box>
      )}
      <Box className="property-body">
        <BodyComponent data={data}></BodyComponent>
      </Box>
    </Box>
  );
}

export default Property;
