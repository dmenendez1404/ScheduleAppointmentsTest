import { createMuiTheme } from '@material-ui/core/styles';
import './index.css';

const font = "'Open Sans'";

const globalTheme = createMuiTheme({
    typography: {
        fontFamily: font,
    },
    overrides: {
        MuiDialog: {
            paper: {
                background: 'transparent',
                overflowY: 'unset'
            }
        },
        MuiPaper: {
            elevation24: {
                boxShadow: 'none',

            }
        },
        MuiSnackbar: {
            anchorOriginBottomRight: {
                top: 70,
                marginLeft: 250
            }
        },     

    }
});

export default globalTheme