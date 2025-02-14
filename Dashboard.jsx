import React, { useState, useCallback, useMemo } from "react";
import {
  Box, AppBar, Toolbar, Typography, Container, Switch, useMediaQuery, useTheme, IconButton, Menu,
  Tabs, Tab, MenuItem, Button
} from "@mui/material";
import { AccountCircle, Add as AddIcon, Home, Assignment, Chat, Payment, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MissionList from "../components/MissionList";
import FreelancerProfile from "../components/FreelancerProfile";
import CategorySlider from "../components/CategorySlider";
import CreateMission from "./CreateMission";
import ReferralPage from "../ReferralPage"; // Import du composant ReferralPage

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isFreelancer, setIsFreelancer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const handleMenuOpen = useCallback((event) => setAnchorEl(event.currentTarget), []);
  const handleMenuClose = useCallback(() => setAnchorEl(null), []);
  const handleTabChange = useCallback((_, newValue) => setTabIndex(newValue), []);
  const handleDialogOpen = useCallback(() => setOpenDialog(true), []);
  const handleDialogClose = useCallback(() => setOpenDialog(false), []);

  const handleSubmitMission = useCallback((mission) => {
    console.log("Nouvelle mission :", mission);
    handleDialogClose();
  }, [handleDialogClose]);

  const tabs = useMemo(() => [
    { label: "Accueil", icon: <Home /> },
    { label: isFreelancer ? "Gérer Missions" : "Gérer Mes Demandes", icon: <Assignment /> },
    { label: "Messagerie", icon: <Chat /> },
    { label: "Gérer mes paiements", icon: <Payment /> },
    { label: "Mon compte", icon: <Star /> },
  ], [isFreelancer]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: theme.palette.background.default }}>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>LAFORMI</Typography>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Tabs value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
              {tabs.map((tab, index) => (
                <Tab key={index} icon={tab.icon} label={isMobile ? null : tab.label} aria-label={tab.label} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: "white" }}>{isFreelancer ? "Mode Freelancer" : "Mode Particulier"}</Typography>
            <Switch checked={isFreelancer} onChange={() => setIsFreelancer(!isFreelancer)} color="secondary" />
            <IconButton onClick={handleMenuOpen}>
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Billing & Payments</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {!isFreelancer && (
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleDialogOpen}>
            Demander un service
          </Button>
        )}
      </Container>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {tabIndex === 0 && <CategorySlider />}
        {tabIndex === 1 && (isFreelancer ? <MissionList /> : <ReferralPage />)} {/* Affiche ReferralPage pour Particulier */}
        {tabIndex === 2 && <FreelancerProfile />}
      </Container>

      {!isFreelancer && (
        <CreateMission open={openDialog} onClose={handleDialogClose} onSubmit={handleSubmitMission} />
      )}
    </Box>
  );
};

export default Dashboard;
