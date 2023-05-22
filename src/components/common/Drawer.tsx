import React from "react";
import { Drawer as MaterialDrawer, Toolbar, Divider, Box } from "@mui/material";
import SortInput from "./SortInput";
import Filter from "./Filter";

const drawerWidth = 240;

const Drawer = (props: any) => {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerKit = (
    <>
      <Toolbar />
      <Toolbar />
      <Divider />
      <Filter />
      <Divider />
      <SortInput />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="filters"
    >
      <MaterialDrawer
        data-testid="drawer"
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
        {drawerKit}
      </MaterialDrawer>
    </Box>
  );
};

export default React.memo(Drawer);
