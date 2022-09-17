import { Switch, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'

export const SideBar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }} >
      <Box position='fixed' style={{marginTop: '22px'}}>
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#Home'>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* Theme */}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon componet='a' href='#simple-list'>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>

    </Box>
  )
}
