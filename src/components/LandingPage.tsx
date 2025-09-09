// src/components/LandingPage.tsx
'use client'; // This component uses client-side features (Link, useRouter)

import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  Stack,
} from '@mui/material';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      {/* A simple App Bar for navigation */}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ color: 'text.primary', flexGrow: 1 }}>
            ADAMAS
          </Typography>
          {/* These will link to the login/signup pages later */}
          <Button color="inherit">
            <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </Link>
          </Button>
          <Button variant="contained" sx={{ ml: 1 }}>
            <Link href="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Hero Section */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Unlock Your Athletic Potential
          </Typography>

          {/* Subheading / Description */}
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            gutterBottom
            sx={{ mt: 2, mb: 3 }}
          >
            ADAMAS is the all-in-one platform for athletes, coaches, and managers to analyze training data, build better plans, and achieve peak performance.
          </Typography>

          {/* Call to Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button variant="contained" size="large">
              <Link href="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get Started
              </Link>
            </Button>
            <Button variant="outlined" size="large">
              <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                Sign In
              </Link>
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}