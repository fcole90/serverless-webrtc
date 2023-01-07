import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import { routes } from '../../routing/routes'


const CreateJoinDialog = () => {
  const router = useRouter()

  return (
    <Box sx={(theme) => ({ width: '50%', border: `solid 2px ${theme.palette.primary.main}`, borderRadius: '15px', padding: '2rem' })}>
      <Typography variant='h4'>
      Create or join a room?
      </Typography>
      <Stack direction='row' justifyContent='flex-end' spacing='1rem'>
        <Button variant='outlined' onClick={() => router.push(routes.join)}>
        Join
        </Button>
        <Button variant='outlined' onClick={() => router.push(routes.create)}>
        Create
        </Button>
      </Stack>
    </Box>
  )
}
export default CreateJoinDialog