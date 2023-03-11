import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { fontWeight } from '@mui/system';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#4A00A9', // main
        secondary: '#FFE70C', // yellow
      },
      border: 'linear-gradient(to Right, #D2FF7C, #FFEE48)',
      common: {
        white: '#FFFFFF',
        black: '#000000',
        grey: '#808080',
        custom: 'linear-gradient(to Right, #D2FF7C, #FFEE48)',
        grey: '#292929',
        blue: '#3362FF',
        darkBlack: '#010101',
      },
      action: {
        hover: 'linear-gradient(to Right, #D2FF7C, #c1b435)',
        hoverButton: '#9748FE',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#999CA0',
        title: '#4A00A9', // purple
        subText: '#808080',
        content: '#8B20BA',
      },
      divider: '#292929',
      link: {
        blue: '#0C66FF',
      },
      background: {
        topic: '#F3F3F3',
        property: '#CEBAE8',
      },
      borderBox: {
        box: '#C1C1C1',
      },
    },
    // Config: TYPOGRAPHY
    typography: {
      fontFamily: 'Inter',
      h1: {
        fontFamily: 'Inter Light',
        fontWeight: 300,
        fontSize: '96px',
        lineHeight: 1,
        fontStyle: 'normal',
      },
      h2: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '52px',
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '42px',
        lineHeight: 1.5,
        fontStyle: 'normal',
      },
      h4: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: 1.5,
        fontStyle: 'normal',
      },
      h5: {
        fontFamily: 'Inter Light',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: 1,
        fontStyle: 'normal',
      },
      h6: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: 1.75,
        fontStyle: 'normal',
      },
      h7: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: 1.3,
        fontStyle: 'normal',
      },
      caption: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: 1.55,
      },
      body1: {
        fontFamily: 'Inter Light',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.7,
        letterSpacing: '0.02em',
      },
      body2: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.42,
      },
      subtitle1: {
        fontFamily: 'Inter Light',
        fontSize: '8px',
        fontWeight: 300,
        lineHeight: 2,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
      },
      subtitle2: {
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 600,
        lineHeight: 1.33,
        fontStyle: 'normal',
      },
    },

    components: {},
    transitions: {
      duration: {
        shortest: 180,
        shorter: 230,
        short: 280,
        standard: 330,
        complex: 395,
        enteringScreen: 255,
        // recommended when something is leaving screen
        leavingScreen: 225,
      },
    },
  })
);
