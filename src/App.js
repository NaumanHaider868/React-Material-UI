import { Navbar } from "./componets/Navbar";
import { SideBar } from "./componets/SideBar";
import { RightBar } from "./componets/RightBar";
import { Feed } from "./componets/Feed";
import { Add } from "./componets/Add";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color='text.primary'>
        <Navbar/>
        <Stack direction='row' spacing={2} justifyContent='space-between' >
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
