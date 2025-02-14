import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Container,
} from '@mui/material';

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCreateAccount = () => {
    if (selectedOption) {
      alert(`Vous avez choisi : ${selectedOption}`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {/* Header */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          VotreLogo
        </Typography>
      </Box>

      {/* Main */}
      <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom>
        Rejoignez-nous en tant qu'agence, client ou freelance
      </Typography>

      {/* Options */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Agence */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              border:
                selectedOption === 'agency'
                  ? '2px solid #1976d2'
                  : '1px solid #ddd',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => handleOptionChange('agency')}
          >
            <CardActionArea>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3">🏢</Typography>
                <Typography variant="body1">
                  Je suis une agence, proposant des services
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Client */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              border:
                selectedOption === 'client'
                  ? '2px solid #1976d2'
                  : '1px solid #ddd',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => handleOptionChange('client')}
          >
            <CardActionArea>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3">💼</Typography>
                <Typography variant="body1">
                  Je suis un client, recrutant pour un projet
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Freelancer */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              border:
                selectedOption === 'freelancer'
                  ? '2px solid #1976d2'
                  : '1px solid #ddd',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => handleOptionChange('freelancer')}
          >
            <CardActionArea>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3">👩‍💻</Typography>
                <Typography variant="body1">
                  Je suis un freelance, à la recherche de travail
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {/* Button */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedOption}
          onClick={handleCreateAccount}
          sx={{
            textTransform: 'none',
            px: 4,
          }}
        >
          Créer un compte
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => setSelectedOption('')}
          sx={{
            textTransform: 'none',
            px: 4,
          }}
        >
          Réinitialiser
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: 4,
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        <Typography variant="body2">
          © 2025 VotrePlateforme. Tous droits réservés.
        </Typography>
        <Typography variant="body2">
          Besoin d'aide ?{' '}
          <a
            href="/contact"
            style={{
              textDecoration: 'none',
              color: '#1976d2',
            }}
          >
            Contactez-nous
          </a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
