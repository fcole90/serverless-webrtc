import { ThemeProvider, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import theme from "../theming/theme"
import CreateJoinDialog from "./CreateJoinDialog/CreateJoinDialog"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        maxWidth='1200px'
        marginX='auto'
        minHeight='100vh'

        direction='column'
        flexGrow={1}

        padding='2rem'
      >
        <Typography variant='h1' gutterBottom>
          Serverless WebRTC React
        </Typography>
        <Stack height='100%' direction='column' flexGrow={1} alignItems='center'>
          <CreateJoinDialog />
        </Stack>
      </Stack>
    </ThemeProvider>
    
  )
}

export default App
