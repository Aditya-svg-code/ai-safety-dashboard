// src/App.tsx

import { useState, useContext } from 'react';
import { Incident } from './types/Incident';
import { Container, Typography, Stack, Box, IconButton } from '@mui/material';
import IncidentList from './components/IncidentList';
import StatsCards from './components/StatsCards';
import IncidentForm from './components/IncidentForm';
import { ColorModeContext } from './theme/ColorModeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';

const initialData: Incident[] = [
  {
    id: 1,
    title: 'Biased Recommendation Algorithm',
    description: 'Algorithm consistently favored certain demographics...',
    severity: 'Medium',
    reported_at: '2025-03-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'LLM Hallucination in Critical Info',
    description: 'LLM provided incorrect safety procedure information...',
    severity: 'High',
    reported_at: '2025-04-01T14:30:00Z',
  },
  {
    id: 3,
    title: 'Minor Data Leak via Chatbot',
    description: 'Chatbot inadvertently exposed non-sensitive user metadata...',
    severity: 'Low',
    reported_at: '2025-03-20T09:15:00Z',
  },
];

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialData);

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const addIncident = (incident: Incident) => {
    setIncidents(prev => [...prev, incident]);
  };

  const deleteIncident = (id: number) => {
    setIncidents(prev => prev.filter(inc => inc.id !== id));
  };

  const editIncident = (updatedIncident: Incident) => {
    setIncidents(prev => prev.map(inc => inc.id === updatedIncident.id ? updatedIncident : inc));
  };

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', py: 5 }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="flex-end" mb={2}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Stack>

        <Typography variant="h3" fontWeight={700} textAlign="center" gutterBottom>
          AI Safety Incident Dashboard
        </Typography>

        <Stack spacing={5} mt={4}>
          <StatsCards incidents={incidents} />
          <IncidentForm addIncident={addIncident} />
          <IncidentList incidents={incidents} deleteIncident={deleteIncident} editIncident={editIncident} />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
