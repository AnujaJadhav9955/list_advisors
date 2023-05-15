import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import SortInput from "./SortInput";
import Filter from "./Filter";

const drawerWidth = 240;

const LeftDrawer = (props: any) => {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Filter />
      <Divider />
      <SortInput />
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="filters"
    >
      <Drawer
        container={container}
        variant={mobileOpen ? "temporary" : "permanent"}
        {...(mobileOpen && { open: true })}
        {...(mobileOpen && { onClose: handleDrawerToggle })}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: mobileOpen ? "block" : "none",
            sm: mobileOpen ? "none" : "block",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default LeftDrawer;
