import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { pushRoute } from '../../routing/pushRoute'
import { routes } from '../../routing/routes'


const CreateJoinDialog = () => (


  <Box sx={(theme) => ({ width: '50%', border: `solid 2px ${theme.palette.primary.main}`, borderRadius: '15px', padding: '2rem' })}>
    <Typography variant='h4'>
      Create or join a room?
    </Typography>
    <Stack direction='row' justifyContent='flex-end' spacing='1rem'>
      <Button variant='outlined' onClick={() => pushRoute(routes.join)}>
        Join
      </Button>
      <Button variant='outlined' onClick={() => pushRoute(routes.create)}>
        Create
      </Button>
    </Stack>
  </Box>
)

export default CreateJoinDialog