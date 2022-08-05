import { Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode: string): Theme => {
  let theme = createTheme();

  const base = {
    palette: mode === 'light' ? light : dark,
    shadows: shadows(mode),
    zIndex: {
      appBar: 1200,
      drawer: 1300
    }
  };

  const font = {
    typography: {
      allVariants: {
        fontFamily: 'Encode Sans Condensed'
      },
      button: {
        fontFamily: 'Encode Sans Condensed',
        textTransform: 'none',
        fontWeight: 'medium'
      },
      h1: {
        fontFamily: 'Titillium Web Regular',
        fontSize: '2.8rem',
        letterSpacing: '2px',
        lineHeight: '4rem',
        fontWeight: '600',
        [theme.breakpoints.down('md')]: {
          fontSize: '3.2rem'
        }
      },
      h2: {
        fontFamily: 'Titillium Web Regular',
        fontSize: '3rem'
      },
      h3: {
        fontFamily: 'Titillium Web Regular',
        fontSize: '1.8rem'
      },
      h4: {
        fontFamily: 'Titillium Web Bold',
        fontSize: '3rem',
        fontWeight: 800
      },
      h5: {
        fontFamily: 'Titillium Web Bold',
        fontSize: '1.5rem',
        fontWeight: 800
      },
      body1: {
        fontFamily: 'Encode Sans Condensed',
        fontSize: '1.2rem'
      },
      subtitle1: {
        fontSize: '1.3rem',
        color: theme.palette.grey[500],
        fontWeight: '200'
      },
      subtitle2: {
        fontSize: '1.1rem',
        fontWeight: '200',
        fontFamily: 'Encode Sans Condensed'
      }
    }
  };

  const overrides = {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 400,
            fontSize: '1.2rem',
            borderRadius: 0,
            paddingTop: 10,
            paddingBottom: 10
          },
          containedSecondary: mode === 'light' ? { color: 'white' } : {}
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: theme.palette.grey[300],
            marginLeft: '0.5rem'
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          root: {
            padding: '0.5rem',
            color: 'white',
            '&::before': {
              borderBottom: `${theme.palette.grey[300]} solid 1px`
            },
            '&:hover': {
              '&:not(.Mui-disabled):before': {
                borderBottom: `${theme.palette.grey[300]} solid 1px`
              }
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        }
      }
    }
  };

  theme = createTheme(theme, { ...base, ...font, ...overrides });

  return theme;
};

export default getTheme;
