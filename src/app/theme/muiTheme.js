import color from '@material-ui/core/colors/amber';
import { colors, fonts } from 'theme';

export default 
{
    palette: {
        primary: {
            light: colors.primaryLight,
            main: colors.primary,
            dark: colors.primaryDark,
            contrastText: colors.white
        },
        secondary: {
            main: colors.purple,
            contrastText: colors.white
        },
        red: {
            main: colors.red,
            contrastText: colors.white
        },
        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary
        },
        divider: colors.grey
    },
    typography: {
        fontFamily: fonts.fontFamily,
        h1: {...fonts.h1 },
        h2: {...fonts.h2 },
        h3: {...fonts.h3 },
        h4: {...fonts.h4 },
        h5: {...fonts.h5 },
        h6: {...fonts.h6 },
    },
    overrides: {
        MuiInputLabel: { // Name of the component /style sheet
            root: { // Name of the ru;e
                '&$focused&:not(.Mui-error)': { //increase the specificity for the pseudo class
                    color: colors.primaryBlue
                }
            }
        },
        MuiInput: {
            underline: {
                '&:after': { // increase the specificity for the pseudo class
                    borderBottomColor: colors.primaryBlue
                }
            }
        }
    }
};