import { createMuiTheme } from "@material-ui/core";

const MuiTheme = () => createMuiTheme({
    overrides: {
        MuiPaper: {
            elevation4: {
                boxShadow: 'none',

            }
        },
    }
});
export default MuiTheme;