// src/components/StatsCards.tsx
import { Card, CardContent, Typography, Grid } from '@mui/material';
import severityColors from '../utils/severityColors';
import { Incident } from '../types/Incident';

function StatsCards({ incidents }: { incidents: Incident[] }) {
    const total = incidents.length;
    const low = incidents.filter(i => i.severity === 'Low').length;
    const medium = incidents.filter(i => i.severity === 'Medium').length;
    const high = incidents.filter(i => i.severity === 'High').length;

    const stats = [
        { label: 'Total Incidents', value: total, color: '#1976d2' },
        { label: 'Low Severity', value: low, color: severityColors.Low },
        { label: 'Medium Severity', value: medium, color: severityColors.Medium },
        { label: 'High Severity', value: high, color: severityColors.High },
    ];

    return (
        <Grid container spacing={3} justifyContent="center" textAlign="center">
            {stats.map((stat, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx} display="flex" justifyContent="center">
                    <Card
                        variant="outlined"
                        sx={{
                            bgcolor: 'background.paper',
                            borderRadius: 3,
                            boxShadow: 2,
                            textAlign: 'center',
                            transition: '0.3s',
                            '&:hover': { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                {stat.label}
                            </Typography>
                            <Typography variant="h4" fontWeight={700} color={stat.color}>
                                {stat.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default StatsCards;
