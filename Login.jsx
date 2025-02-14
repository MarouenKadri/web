import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook pour la navigation
import { Box, TextField, Button, Typography, Link, Divider } from '@mui/material';

const Login = () => {
  const navigate = useNavigate(); // Initialisation de la navigation

  const handleLogin = (event) => {
    event.preventDefault();
    alert('Connexion réussie !');
    navigate('/dashboard'); // Redirige vers le tableau de bord après connexion
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '50px auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      {/* Titre */}
      <Typography variant="h5" gutterBottom>
        Connexion à votre compte
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Connectez-vous pour continuer à utiliser Upwork
      </Typography>

      {/* Connexions sociales */}
      <Box sx={{ mt: 2, mb: 2 }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #ccc',
            textTransform: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#f9f9f9',
            },
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Logo"
            style={{
              width: '20px',
              height: '20px',
              marginRight: '10px',
            }}
          />
          Continuer avec Google
        </Button>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #ccc',
            textTransform: 'none',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#f9f9f9',
            },
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook Logo"
            style={{
              width: '20px',
              height: '20px',
              marginRight: '10px',
            }}
          />
          Continuer avec Facebook
        </Button>
      </Box>

      <Divider sx={{ my: 2 }}>OU</Divider>

      {/* Formulaire de connexion */}
      <form onSubmit={handleLogin}>
        <TextField
          label="Adresse e-mail ou nom d'utilisateur"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, textTransform: 'none' }}
        >
          Connexion
        </Button>
      </form>

      {/* Liens secondaires */}
      <Box sx={{ mt: 2 }}>
        <Link href="/PasswordReset" underline="hover">
          Mot de passe oublié ?
        </Link>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Nouveau sur Upwork ?{' '}
        <Link href="/Register" underline="hover">
          Créez un compte
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
