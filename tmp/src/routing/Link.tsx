import { Box } from "@mui/material"
import React from "react"
import { pushRoute } from "./pushRoute"

const Link: React.FC<{children: React.ReactNode, to: string}> = ({ children, to }) => (
  <Box onClick={() => {pushRoute(to)}} sx={{ '&:hover': { cursor: 'pointer' } }}>
    {children}
  </Box>
)

export default Link