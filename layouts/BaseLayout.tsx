import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Link from "next/link"
import { routes } from "../src/routing/routes"

const BaseLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <Stack
    maxWidth='1200px'
    marginX='auto'
    minHeight='100vh'

    direction='column'
    flexGrow={1}

    padding='2rem'
  >
    <Link href={routes.root}>
      <Typography variant='h1' gutterBottom>
          Serverless WebRTC React
      </Typography>
    </Link>
    <Stack marginY='2rem' height='100%' direction='column' flexGrow={1} alignItems='center'>
      {children}
    </Stack>
  </Stack>

)

export default BaseLayout