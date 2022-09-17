import React, { useState } from 'react'
import { Box, AppBar, Toolbar, styled, Typography, Badge, InputBase, Avatar, MenuItem, Menu, Tooltip, Fab } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const StyleToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  });
  const Search = styled('div')(({ theme }) => ({
    background: '#fff',
    color : 'text.primary',
    borderRadius: theme.shape.borderRadius,
    padding: '0 10px',
    width: '40%',
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }))
  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variand='h6'>LAM VAL</Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder="Search..." /></Search>
        <Icons>
          {/* <Badge badgeContent={4} color="error">
            <MailIcon color="#fff" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge> */}
          <Tooltip title="Email">
              <Badge badgeContent={4} color="error">
                <MailIcon/>
              </Badge>
          </Tooltip>
          <Tooltip title="Notification">
              <Badge badgeContent={2} color="error">
              <NotificationsIcon />
              </Badge>
          </Tooltip>
          <Tooltip title="Profile">
            <Avatar onClick={e=>setOpen(true)} src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?cs=srgb&dl=pexels-jack-winbow-1559486.jpg&fm=jpg' />
          </Tooltip>
          {/* <Avatar onClick={e=>setOpen(true)} src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?cs=srgb&dl=pexels-jack-winbow-1559486.jpg&fm=jpg' /> */}
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar src='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?cs=srgb&dl=pexels-jack-winbow-1559486.jpg&fm=jpg' />
          <Typography variant='span'>Nauman</Typography>
        </UserBox>
      </StyleToolBar>
      <Menu
      id='demo-positioned-menu'
      aria-labelledby='demo-positioned-button'
      open={open}
      onClose={e=>setOpen(false)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
        <MenuItem>Notification</MenuItem>
        <MenuItem>Email</MenuItem>
      </Menu>
    </AppBar>
  )
}
