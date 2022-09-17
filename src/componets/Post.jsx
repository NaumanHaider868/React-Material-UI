import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';

export const Post = () => {
  return (
    <Box>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'lightgreen' }} aria-label="recipe">
              N
            </Avatar>
          }
          style={{padding:'12px 10px 12px 15px'}}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Nauman Haider"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="198"
          image="https://images.pexels.com/photos/178996/pexels-photo-178996.jpeg?cs=srgb&dl=pexels-rangga-aditya-armien-178996.jpg&fm=jpg"
          alt="Nauman"
        />
        <CardContent>
          <Typography variant="body2"  color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{padding:'0px'}}>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

      </Card>
    </Box>
  )
}
