import React,{useState} from 'react'
import {styled, Box, Tooltip, Fab, Modal, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
// import {Add as AddIcon} from '@mui/icon-material'
import { Add as AddIcon, PersonAdd } from '@mui/icons-material';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const Add = () => {

    const [open,setOpen] = useState(false);

    const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    });

    const UserBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        gap : '10px',
        marginBottom : '20px'
        })
    
    return (
        <Box>
            <Tooltip onClick={e=>setOpen(true)} title="Post" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px )', md: 30 } }}>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyleModal
                open={open}
                onClose={e=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} /*bgcolor='white'*/ p={3} borderRadius={5} bgcolor={'background.default'} color='text.primary'>
                    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?cs=srgb&dl=pexels-jack-winbow-1559486.jpg&fm=jpg"
                        sx={{width:30, height:30}}
                        />
                    <Typography fontWeight={500} variant='span'>Nauman</Typography>
                    </UserBox>
                    <TextField 
                     id="standard-basic"
                     multiline
                     placeholder="What's on your mind?" 
                     variant="standard"
                     sx={{width:'100%'}} />
                     <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <CameraAltIcon color='secondary' />
                        <VideocamIcon color='success' />
                        <PersonAddIcon color='error' />
                     </Stack>
                     <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </Box>
    )
}
