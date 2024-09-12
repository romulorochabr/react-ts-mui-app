import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Container>
        <Toolbar>
          <Typography variant="body2" color="inherit" align="center" sx={{ flexGrow: 1 }}>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
