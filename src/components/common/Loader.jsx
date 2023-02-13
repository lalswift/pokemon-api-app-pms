import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = ({ showLoader }) => {

  if(!showLoader) return null;
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:138}}>
      <CircularProgress/>
    </div>
  )
}

export default Loader