import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

export const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { sm: 'block', xs: 'none' } }}>
      <Box position='fixed' width={300} margin='38px 0'>
        <Typography variand='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup style={{margin:'15px 0 15px 0', justifyContent:'center'}} max={7}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/997217/pexels-photo-997217.jpeg?cs=srgb&dl=pexels-sushant-singh-997217.jpg&fm=jpg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?cs=srgb&dl=pexels-jimmy-jimmy-1484794.jpg&fm=jpg" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/12825938/pexels-photo-12825938.jpeg?cs=srgb&dl=pexels-beyza-kaplan-12825938.jpg&fm=jpg" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/4710980/pexels-photo-4710980.jpeg?cs=srgb&dl=pexels-cottonbro-4710980.jpg&fm=jpg" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4100484/pexels-photo-4100484.jpeg?cs=srgb&dl=pexels-cottonbro-4100484.jpg&fm=jpg" />
          <Avatar alt="John Henry" src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myicahel-tamburini-1553783.jpg&fm=jpg" />
          <Avatar alt="Farhan" src="https://images.pexels.com/photos/4841184/pexels-photo-4841184.jpeg?cs=srgb&dl=pexels-cottonbro-4841184.jpg&fm=jpg" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4100484/pexels-photo-4100484.jpeg?cs=srgb&dl=pexels-cottonbro-4100484.jpg&fm=jpg" />
          <Avatar alt="John Henry" src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myicahel-tamburini-1553783.jpg&fm=jpg" />
          <Avatar alt="Farhan" src="https://images.pexels.com/photos/4841184/pexels-photo-4841184.jpeg?cs=srgb&dl=pexels-cottonbro-4841184.jpg&fm=jpg" />
        </AvatarGroup>

        <Typography variand='h6' fontWeight={100}>Latest Photos</Typography>
        <ImageList rowHeight={110} cols={3} gap={5} /*mt={2} mb={2}*/ style={{margin:'12px 0 12px 0'}}>
          <ImageListItem>
            <img src='https://material-ui.com/static/images/image-list/breakfast.jpg' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://material-ui.com/static/images/image-list/burgers.jpg' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://material-ui.com/static/images/image-list/camera.jpg' />
          </ImageListItem>
        </ImageList>

        <Typography variand='h6' fontWeight='200'>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} style={{marginLeft:'5px'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4841184/pexels-photo-4841184.jpeg?cs=srgb&dl=pexels-cottonbro-4841184.jpg&fm=jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Shahzaib Ali"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Kya hova?
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Noman" src="https://images.pexels.com/photos/12825938/pexels-photo-12825938.jpeg?cs=srgb&dl=pexels-beyza-kaplan-12825938.jpg&fm=jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Haider"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Collage jana kal?
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/997217/pexels-photo-997217.jpeg?cs=srgb&dl=pexels-sushant-singh-997217.jpg&fm=jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Raffa"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Yar Math ka km send krda
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
