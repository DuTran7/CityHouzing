import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    },
  },
});
