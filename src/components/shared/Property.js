import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { theme } from 'theme';

function Property({
  margin,
  chipContent,
  title,
  bodyComponent: BodyComponent,
}) {
  return (
    <Box style={{ margin: margin }}>
      <Box
        className="property-header"
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <Chip
          style={{
            backgroundColor: `${theme.palette.background.property} !important`,
            color: theme.palette.text.title,
            overflow: 'unset',
            marginBottom: '15px',
            fontSize: '22px',
            height: '35px',
          }}
          size="medium"
          label={chipContent}
        />

        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.title,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box className="property-body">
        <BodyComponent></BodyComponent>
      </Box>
    </Box>
  );
}

export default Property;
