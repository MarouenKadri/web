import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

const PasswordReset = () => {
  const handlePasswordReset = (event) => {
    event.preventDefault();
    alert('Un lien de réinitialisation a été envoyé à votre adresse e-mail.');
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
        Réinitialiser le mot de passe
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Entrez l'adresse e-mail associée à votre compte pour recevoir un lien de réinitialisation.
      </Typography>

      {/* Formulaire de réinitialisation */}
      <form onSubmit={handlePasswordReset}>
        <TextField
          label="Adresse e-mail"
          type="email"
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
          Envoyer le lien
        </Button>
      </form>

      {/* Liens secondaires */}
      <Box sx={{ mt: 2 }}>
        <Link href="/login" underline="hover">
          Retour à la connexion
        </Link>
      </Box>
    </Box>
  );
};

export default PasswordReset;
