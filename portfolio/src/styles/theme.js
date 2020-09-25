import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ff5722",
    },
  },
  status: {
    danger: "orange",
  },
});
export default theme;
