import React, { useState, useMemo } from "react";
import {
  Box,AppBar,Toolbar,Typography, Button,Container,TextField,InputAdornment,Switch,useMediaQuery,useTheme,Paper
} from "@mui/material";
import { Search as SearchIcon, LocationOn as LocationOnIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MissionList from "../components/MissionList";   
import FreelancerProfile from "../components/FreelancerProfile";
import CategorySlider from "../components/CategorySlider";

const COLORS = {
  primary: "#FF6B6B",
  hover: "#E55A5A",
  background: "#F9FAFB",
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isFreelancer, setIsFreelancer] = useState(true);
  const navigate = useNavigate(); // ✅ Déclarer navigate avant de l'utiliser

  // Styles optimisés pour le formulaire
  const formStyles = useMemo(() => ({
    p: 2,
    borderRadius: 6,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 2 : 1.5,
    boxShadow: 4,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "space-between",
  }), [isMobile]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: theme.palette.background.default }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: COLORS.background, py: 2, boxShadow: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: COLORS.primary, fontWeight: "bold" }}>
            LAFORMI
          </Typography>
          
          {/* Toggle Mode Freelancer / Particulier */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: isFreelancer ? "primary.main" : "success.main" }}>
              {isFreelancer ? "Mode Freelancer" : "Mode Particulier"}
            </Typography>
            <Switch
              checked={isFreelancer}
              onChange={() => setIsFreelancer(!isFreelancer)}
              color="primary"
            />
          </Box>

          {/* Boutons Connexion & Sign Up */}
          <Button variant="outlined" sx={{ borderRadius: 10, mr: 2 }} onClick={() => navigate("/login")}>
            Connexion
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: 10, bgcolor: COLORS.primary, "&:hover": { bgcolor: COLORS.hover } }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Section de Recherche */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {isFreelancer ? "Trouvez des missions" : "Trouvez un prestataire"}
        </Typography>

        <Paper component="form" sx={formStyles}>
          {/* Champ de recherche */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder={isFreelancer ? "Ex: Développement Web, Graphisme..." : "Ex: Cours de Maths, Musique..."}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                transition: "0.3s",
                "&:hover fieldset": { borderColor: COLORS.primary },
                "&.Mui-focused fieldset": { borderColor: COLORS.primary },
              },
            }}
          />

          {/* Localisation */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Saisissez une ville ou 'Autour de moi'"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                transition: "0.3s",
                "&:hover fieldset": { borderColor: COLORS.primary },
                "&.Mui-focused fieldset": { borderColor: COLORS.primary },
              },
            }}
          />

          {/* Bouton Rechercher */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: 20,
              fontWeight: "bold",
              textTransform: "none",
              bgcolor: COLORS.primary,
              color: "white",
              minWidth: 150,
              height: "100%",
              transition: "0.3s",
              "&:hover": { bgcolor: COLORS.hover, transform: "scale(1.05)" },
            }}
          >
            🔍 Rechercher
          </Button>
        </Paper>
      </Container>

      {/* Section Catégories */}
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", py: 2, boxShadow: 0 }}>
        <Box sx={{ maxWidth: isMobile ? "100%" : "80%", width: "100%" }}>
          <CategorySlider />
        </Box>
      </Container>

      {/* ✅ Afficher MissionList uniquement si Mode Freelancer est activé */}
 
      {isFreelancer ? (
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <MissionList />
        </Container>
      ) :   
      <Container maxWidth="lg" sx={{ py: 4 }}>
          <FreelancerProfile />
        </Container>
      
      }  


    </Box>
  );
};

export default Home;
