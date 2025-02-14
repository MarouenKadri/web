import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserInfoForm = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null); // Rôle sélectionné
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    country: "",
    city: "",
    gender: "",
  });

  // Gérer la saisie dans les champs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gérer la sélection de rôle
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Veuillez sélectionner un rôle !");
      return;
    }
    console.log("Formulaire soumis :", { ...formData, selectedRole });
    navigate("/dashboard"); // Rediriger vers le tableau de bord
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "50px auto",
        padding: 4,
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Complétez vos Informations
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Remplissez les informations nécessaires et choisissez un rôle pour continuer.
      </Typography>

      {/* Options de rôles */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Prestataire */}
        <Grid item xs={12} sm={4}>
          <Paper
            onClick={() => handleRoleSelection("prestataire")}
            elevation={selectedRole === "prestataire" ? 10 : 3}
            sx={{
              padding: 3,
              textAlign: "center",
              cursor: "pointer",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: selectedRole === "prestataire" ? "2px solid #1976d2" : "2px solid transparent",
              borderRadius: 2,
              "&:hover": {
                border: "2px solid #1976d2",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Prestataire
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Offrez vos services en tant que freelance.
            </Typography>
          </Paper>
        </Grid>

        {/* Client */}
        <Grid item xs={12} sm={4}>
          <Paper
            onClick={() => handleRoleSelection("client")}
            elevation={selectedRole === "client" ? 10 : 3}
            sx={{
              padding: 3,
              textAlign: "center",
              cursor: "pointer",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: selectedRole === "client" ? "2px solid #1976d2" : "2px solid transparent",
              borderRadius: 2,
              "&:hover": {
                border: "2px solid #1976d2",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Client
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Recrutez des talents pour vos projets.
            </Typography>
          </Paper>
        </Grid>

        {/* Les Deux */}
        <Grid item xs={12} sm={4}>
          <Paper
            onClick={() => handleRoleSelection("both")}
            elevation={selectedRole === "both" ? 10 : 3}
            sx={{
              padding: 3,
              textAlign: "center",
              cursor: "pointer",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: selectedRole === "both" ? "2px solid #1976d2" : "2px solid transparent",
              borderRadius: 2,
              "&:hover": {
                border: "2px solid #1976d2",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Les Deux
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Combinez les deux rôles selon vos besoins.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Formulaire d'informations personnelles */}
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Prénom"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nom"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Numéro de Téléphone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date d'Anniversaire"
              name="birthDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.birthDate}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Pays</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="France">France</MenuItem>
                <MenuItem value="USA">États-Unis</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Allemagne">Allemagne</MenuItem>
                <MenuItem value="Autre">Autre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ville"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Homme"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Femme"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Autre"
              />
            </RadioGroup>
          </Grid>
        </Grid>

        {/* Bouton de soumission */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 4, py: 1.5, fontWeight: "bold", textTransform: "none" }}
        >
          Continuer
        </Button>
      </Box>
    </Box>
  );
};

export default UserInfoForm;

