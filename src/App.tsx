import React, { useState } from "react";
import "./App.css";
import AdvisorList from "./components/advisorList/AdvisorList";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { AdvisorContext } from "./context/AdvisorContext";
import LeftDrawer from "./components/common/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

const errorLink = onError(({ graphqlErrors, NetworkErrors }: any) => {
  if (graphqlErrors) {
    graphqlErrors.forEach(({ message }: any) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

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
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  const handleStatusChange = (event: any) => {
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
    <ApolloProvider client={client}>
      <AdvisorContext.Provider
        value={{
          sortBy,
          setSortBy,
          status,
          handleStatusChange,
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
                variant="h4"
                noWrap
                component="div"
                sx={{ height: "60px", margin: "20px 0 20px 0" }}
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
            <Toolbar />
            <AdvisorList />
          </Box>
        </Box>
      </AdvisorContext.Provider>
    </ApolloProvider>
  );
}

export default App;
