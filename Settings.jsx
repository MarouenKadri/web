import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
} from '@mui/material';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '',
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSaveChanges = () => {
    // Simulez une action de sauvegarde ici (API call par exemple)
    console.log('Données sauvegardées :', formData);
    alert('Vos paramètres ont été mis à jour.');
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: '50px auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Paramètres
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Gérez vos paramètres de compte, vos préférences de notifications et votre sécurité.
      </Typography>
      <Divider sx={{ marginY: 2 }} />

      {/* Section des informations personnelles */}
      <Typography variant="h6" gutterBottom>
        Informations personnelles
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Adresse e-mail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2 }} />

      {/* Section des notifications */}
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <Card>
        <CardContent>
          <FormControlLabel
            control={
              <Switch
                name="notifications"
                checked={formData.notifications}
                onChange={handleSwitchChange}
              />
            }
            label="Activer les notifications"
          />
          <Typography variant="body2" color="text.secondary">
            Activez ou désactivez les notifications par e-mail et push.
          </Typography>
        </CardContent>
      </Card>
      <Divider sx={{ marginY: 2 }} />

      {/* Section de sécurité */}
      <Typography variant="h6" gutterBottom>
        Sécurité
      </Typography>
      <TextField
        label="Changer le mot de passe"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        fullWidth
      />
      <Typography variant="body2" color="text.secondary" sx={{ marginY: 1 }}>
        Laissez ce champ vide si vous ne souhaitez pas changer votre mot de passe.
      </Typography>
      <Divider sx={{ marginY: 2 }} />

      {/* Bouton Sauvegarder */}
      <Button variant="contained" color="primary" fullWidth onClick={handleSaveChanges}>
        Sauvegarder les modifications
      </Button>
    </Box>
  );
};

export default Settings;
