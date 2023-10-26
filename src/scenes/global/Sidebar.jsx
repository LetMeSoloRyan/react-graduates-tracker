import { useState } from 'react';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Programs')
  return (
    <Box
    sx={{
      '& .pro-sidebar-inner': {
        background: `${colors.primary[400]} !important`
      },
      '& .pro-icon-wrapper': {
        backgroundColor: 'transparent !important'
      },
      '& .pro-inner-item': {
        padding: '5px 35px 5px 20px !important'
      },
      '& .pro-inner-item:hover': {
        color: '#868dfb !important'
      },
      '& .pro-menu-item.active': {
        color: '#6870fa !important'
      },
    }}>

<ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Strapi Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            <Item
            title='Home'
            to="/home"
            selected={selected}
            setSelected={setSelected}
            />
            <Item
              title="Programs"
              to="/programs"
              icon={<SchoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Students"
              to="/students"
              icon={<GroupsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Salaries"
              to="/salaries"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sign Up"
              to="/signup"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Login"
              to="/login"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reset Password"
              to="/resetpassword"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Job
            </Typography>

            <Item
              title="Job Opportunities"
              to="/jobOpportunities"
              icon={<WorkOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Job Offers"
              to="/jobOffers"
              icon={<WorkOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="First Job"
              to="/firstJob"
              icon={<WorkOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            

            
          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  )
};

export default SideBar;
