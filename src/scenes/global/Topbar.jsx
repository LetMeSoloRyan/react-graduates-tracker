import * as React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import Login from "../login/index";
import Signup from "../signup/index";
import FirstJobForm from "../../form/firstjobform";
import JobOfferForm from "../../form/jobofferform";
import JobOpportunities from "../../form/jobopportunitiesform";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
const menu = [
  'Login',
  'Signup',
  'First Job Form',
  'Job Offer Form',
  'Job Opportunities Form',
];
function SimpleDialog({ open, onClose, selectedValue }) {
  const handleListItemClick = (value) => {
    onClose(value);
  };
  const renderComponent = (value) => {
    switch (value) {
      case 'Login':
        return <Login />;
      case 'Signup':
        return <Signup />;
      case 'First Job Form':
        return <FirstJobForm />;
      case 'Job Offer Form':
        return <JobOfferForm />;
      case 'Job Opportunities Form':
        return <JobOpportunities />;
      default:
        return null;
    }
  };
  return (
    <Dialog onClose={() => onClose(null)} open={open}>
      <DialogTitle></DialogTitle>
      <List>
        {menu.map((item) => (
          <ListItem disableGutters key={item}>
            <ListItemButton onClick={() => handleListItemClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {renderComponent(selectedValue)}
    </Dialog>
  );
}
const Topbar = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState(null);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleComponentSelect = (value) => {
    setSelectedComponent(value);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
       <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleOpenDialog}>
          <PersonOutlinedIcon />
          <Button onClick={handleOpenDialog}>Menu</Button>
        </IconButton>
      </Box>
    </Box>
      {/* Your topbar content */}
      {/* ... */}
      {/* The dialog component */}
      <SimpleDialog
        open={openDialog}
        onClose={handleComponentSelect}
        selectedValue={selectedComponent}
      />
    </>
  );
};
export default Topbar;