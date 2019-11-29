import React, { FC } from 'react'
import { Grid, Typography, Input, Button } from '@material-ui/core'

const FileInputs: FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={4}>
        <input
          accept='image/*'
          style={{ display: 'none' }}
          id='raised-button-file'
          multiple
          type='file'
        />
        <label htmlFor='raised-button-file'>
          <Button variant='contained' component='span'>
            Upload
          </Button>
        </label>
      </Grid>
    </Grid>
  )
}

export default FileInputs
