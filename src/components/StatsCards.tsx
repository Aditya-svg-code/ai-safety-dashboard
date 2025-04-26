import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
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
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={3}
            textAlign="center"
        >
            {stats.map((stat, idx) => (
                <Box
                    key={idx}
                    sx={{
                        flex: '1 1 200px',
                        maxWidth: '250px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            width: '100%',
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
                </Box>
            ))}
        </Stack>
    );
}

export default StatsCards;
