import { TextField, Container, Box, Typography, Checkbox, Grid, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import debounce from 'debounce';
import { styles } from './signIn.styles';
import SignInForm from './SignInForm';

export default function SignIn() {
  return (
    <Grid container sx={styles.pageContaier}>
      <Grid item xs={6} sx={styles.signInContainer}>
        <Box sx={styles.signInTitleContainer}>
          <Box sx={styles.signInTitlePoint}></Box>
          <Typography variant="h5">Test-Task</Typography>
        </Box>
        <SignInForm />
      </Grid>

      <Grid item xs={6} sx={styles.signInImage}></Grid>
    </Grid>
  );
}
