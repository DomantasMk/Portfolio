// import React, { useEffect, useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import refContext from "../context/refContext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   AppBar: { background: "transparent", boxShadow: "none" },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function Navbar() {
//   const classes = useStyles();
//   const { refMap } = useContext(refContext);

//   const scrollTo = (elementKeyInRefMap) => {
//     window.scrollTo(0, refMap.get(elementKeyInRefMap).current.offsetTop);
//   };
//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.AppBar} position="fixed">
//         <Toolbar>
//           {/* <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="h6" className={classes.title}>
//             Domantas Mikelionis
//           </Typography>
//           <Button color="inherit" onClick={() => scrollTo("AboutSection")}>
//             About
//           </Button>
//           <Button color="inherit" onClick={() => scrollTo("ProjectsSection")}>
//             Portfolio
//           </Button>
//           <Button color="inherit" onClick={() => scrollTo("SkillsSection")}>
//             Skills
//           </Button>
//           <Button color="inherit" onClick={() => scrollTo("ContactSection")}>
//             Contact
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
import React, { useContext } from "react";
import refContext from "../context/refContext";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  appBar: {},
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  navButtons: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const { refMap } = useContext(refContext);

  const scrollTo = (elementKeyInRefMap) => {
    let elementRef = refMap.get(elementKeyInRefMap);
    if (elementRef) {
      window.scrollTo(0, elementRef.current.offsetTop);
      if (mobileOpen) handleDrawerToggle();
    }
  };
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <Divider />
        <ListItem button key={"About"} onClick={() => scrollTo("AboutSection")}>
          <ListItemText primary={"About"} />
        </ListItem>
        <Divider />
        <ListItem
          button
          key={"Portfolio"}
          onClick={() => scrollTo("ProjectsSection")}
        >
          <ListItemText primary={"Portfolio"} />
        </ListItem>
        <Divider />
        <ListItem
          button
          key={"Skills"}
          onClick={() => scrollTo("SkillsSection")}
        >
          <ListItemText primary={"Skills"} />
        </ListItem>
        <Divider />
        <ListItem
          button
          key={"Contact"}
          onClick={() => scrollTo("ContactSection")}
        >
          <ListItemText primary={"Contact"} />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Domantas Mikelionis
          </Typography>
          <Button
            className={classes.navButtons}
            color="inherit"
            onClick={() => scrollTo("AboutSection")}
          >
            About
          </Button>
          <Button
            className={classes.navButtons}
            color="inherit"
            onClick={() => scrollTo("ProjectsSection")}
          >
            Portfolio
          </Button>
          <Button
            className={classes.navButtons}
            color="inherit"
            onClick={() => scrollTo("SkillsSection")}
          >
            Skills
          </Button>
          <Button
            className={classes.navButtons}
            color="inherit"
            onClick={() => scrollTo("ContactSection")}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Navbar;
