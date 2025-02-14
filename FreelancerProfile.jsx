import React from "react";
import { Container, Grid, Card, CardContent, Avatar, Box, Typography, Button, Chip, Stack } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WorkIcon from "@mui/icons-material/Work";

const freelancersExample = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Jean Dupont",
    location: "Paris, France",
    reviews: 25,
    punctuality: "98%",
    earnings: "10,000€",
    totalEarnings: "50,000€",
    rating: "4.8/5",
    level: "Amateur",
    skills: ["Ménage", "Baby-sitting", "Jardinage"],
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophie Martin",
    location: "Lyon, France",
    reviews: 30,
    punctuality: "95%",
    earnings: "12,500€",
    totalEarnings: "60,000€",
    rating: "4.9/5",
    level: "Ambassadeur",
    skills: ["Cours particuliers", "Cuisine", "Assistance administrative"],
  },
];

// Styles harmonisés avec MissionList et avec hauteur fixe
const styles = {
  card: {
    p: 2,
    borderRadius: 3,
    boxShadow: 3,
    backgroundColor: "#f9f9f9",
    transition: "all 0.3s ease",
    "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 300, // Hauteur minimale pour aligner toutes les cartes
  },
  cardContent: {
    flexGrow: 1, // Assure que le contenu prend toute la place disponible
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  avatar: {
    width: 60,
    height: 60,
    border: "3px solid #1976d2",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  },
  skillChip: {
    fontSize: 12,
    fontWeight: "bold",
    borderRadius: "20px",
    px: 2,
    py: 1,
    backgroundColor: "#1976d2",
    color: "white",
    textTransform: "uppercase",
  },
};

const FreelancerProfile = ({ freelancersData = freelancersExample }) => {
  if (!Array.isArray(freelancersData)) {
    return <Typography variant="h6" color="error">Erreur: Données invalides</Typography>;
  }

  if (freelancersData.length === 0) {
    return <Typography variant="h6" textAlign="center" mt={4}>Aucun freelancer trouvé</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {freelancersData.map((freelancer) => (
          <Grid item xs={12} sm={6} md={4} key={freelancer.id} sx={{ display: "flex" }}>
            <Card sx={styles.card}>
              <CardContent sx={styles.cardContent}>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar src={freelancer.photo} sx={styles.avatar} />
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {freelancer.name}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      📍 {freelancer.location}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" color="purple">
                      🏅 Niveau: {freelancer.level}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2">⭐ {freelancer.reviews} Avis</Typography>
                <Typography variant="body2">⏳ Ponctualité: {freelancer.punctuality}</Typography>
                <Typography variant="body2">🌟 Note: {freelancer.rating}</Typography>
                <Typography fontWeight="bold" color="green" display="flex" alignItems="center">
                  💰 {freelancer.earnings} gagnés via la plateforme <ArrowUpwardIcon fontSize="small" sx={{ ml: 1, color: "green" }} />
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="blue" display="flex" alignItems="center">
                  💶 Total gagné: {freelancer.totalEarnings} <ArrowUpwardIcon fontSize="small" sx={{ ml: 1, color: "blue" }} />
                </Typography>

                {/* Afficher les compétences uniquement si disponibles */}
                {freelancer.skills.length > 0 && (
                  <Stack mt={2} direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                    {freelancer.skills.map((skill, index) => (
                      <Chip key={index} icon={<WorkIcon fontSize="small" />} label={skill} sx={styles.skillChip} />
                    ))}
                  </Stack>
                )}
              </CardContent>

              <Box p={2} display="flex" gap={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                  onClick={() => console.log("Voir Profil")}
                >
                  Voir Profil
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                  onClick={() => console.log("Engager")}
                >
                  🏆 Engager
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FreelancerProfile;
