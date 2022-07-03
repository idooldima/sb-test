import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          minHeight: '50px',
          '&.Mui-disabled': {
            backgroundColor: '#af47e6',
            color: 'white',
            marginBottom: '15px',
            borderRadius: '8px',
          },
        },
        contained: {
          backgroundColor: '#9200dd',
          color: 'white',
          ':hover': {
            backgroundColor: '#8c38b8',
          },
        },
        outlined: {
          border: '1px solid #dddddd',
          color: 'black',
        },
      },
    },
  },
});

export default theme;
