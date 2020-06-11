import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';

export const Footer = () => {
  return (
    <Box p={2}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://mywebsite.com/'>
          My Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};
