import React, { PropsWithChildren } from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <AppBar
      sx={{
        height: "80px",
        fontSize: "24px",
        fontWeight: "bold",
        justifyContent: "center",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <Toolbar>
        Advisors
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
