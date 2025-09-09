// src/app/signup/page.tsx
'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link as MuiLink,
  Alert,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // This is where we'll add registration logic later
    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      terms: data.get('terms') === 'on',
    };
    
    console.log('Signup data:', userData);

    // For now, just simulate a successful registration
    // TODO: Replace with actual registration logic
    router.push('/dashboard');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Create Account
        </Typography>
        <Typography component="p" variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Join ADAMAS and start optimizing your performance
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
            />
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <FormControlLabel
            control={<Checkbox required name="terms" color="primary" />}
            label="I agree to the Terms and Conditions"
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{ textAlign: 'center' }}>
              <MuiLink component={Link} href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </MuiLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}