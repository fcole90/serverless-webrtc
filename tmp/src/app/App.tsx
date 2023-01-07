import { ThemeProvider, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Link from "../routing/Link"
import { routes } from "../routing/routes"
import { useRoute } from "../routing/useRoute"
import theme from "../theming/theme"
import CreateJoinDialog from "./CreateJoinDialog/CreateJoinDialog"

const App = () => {
  const route = useRoute()
  
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
        <Link to={routes.root}>
          <Typography variant='h1' gutterBottom>
          Serverless WebRTC React
          </Typography>
        </Link>
        <Typography variant='subtitle2' gutterBottom>
          {route}
        </Typography>
        <Stack marginY='2rem' height='100%' direction='column' flexGrow={1} alignItems='center'>
          <CreateJoinDialog />
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
