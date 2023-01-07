import { Box, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'


const CreateJoinDialog = () => (

  <Box sx={(theme) => ({ width: '50%', border: `solid 2px ${theme.palette.primary.main}`, borderRadius: '15px', padding: '2rem' })}>
    <Typography variant='h4'>
      Create or join a room?
    </Typography>
    <Stack direction='row' justifyContent='flex-end' spacing='1rem'>
      <Button variant='outlined'>
        Join
      </Button>
      <Button variant='outlined'>
        Create
      </Button>
    </Stack>
  </Box>
)

export default CreateJoinDialog