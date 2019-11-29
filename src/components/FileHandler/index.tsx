import React, { FC } from 'react'
import { Typography, Divider } from '@material-ui/core'
import FileInputs from './FileInputs'

const FileHandler: FC = () => {
  return (
    <div>
      <Typography variant='h2' color='primary' style={{ marginLeft: '2vw', marginTop: '1vh' }}>
        Files
      </Typography>
      <Divider variant='middle' />
      <FileInputs />
    </div>
  )
}

export default FileHandler
