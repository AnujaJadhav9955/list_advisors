import React, { useState } from "react";
import "./App.css";
import AdvisorList from "./components/Home/AdvisorList";
import AppBar from "@mui/material/AppBar";
import { AdvisorContext } from "./context/AdvisorContext";
import LeftDrawer from "./components/common/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

function App() {
  const [sortBy, setSortBy] = useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [status, setStateStatus] = React.useState({
    online: false,
    offline: false,
  });
  const [languages, setStateLanguages] = React.useState({
    german: false,
    english: false,
    french: false,
    spanish: false,
  });

  const handleChange = (event: any) => {
    setStateStatus({
      ...status,
      [event.target.name]: event.target.checked,
    });
  };

  const handleLanguageChange = (event: any) => {
    setStateLanguages({
      ...languages,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AdvisorContext.Provider
      value={{
        sortBy,
        setSortBy,
        status,
        handleChange,
        languages,
        handleLanguageChange,
      }}
    >
      <Box sx={{ display: "flex", backgroundColor: "#f5f5f5" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ height: "50px" }}
            >
              Advisors
            </Typography>
          </Toolbar>
        </AppBar>
        <LeftDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <AdvisorList />
        </Box>
      </Box>
    </AdvisorContext.Provider>
  );
}

export default App;
