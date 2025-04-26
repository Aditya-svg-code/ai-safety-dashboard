import { TextField, Button, Stack, Select, MenuItem, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { Incident } from '../types/Incident';

function IncidentForm({ addIncident }: { addIncident: (incident: Incident) => void }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [severity, setSeverity] = useState<Incident['severity']>('Low');

    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) return alert('Please fill all fields!');
        const newIncident: Incident = {
            id: Date.now(),
            title,
            description,
            severity,
            reported_at: new Date().toISOString(),
        };
        addIncident(newIncident);
        setTitle('');
        setDescription('');
        setSeverity('Low');
    };

    return (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Stack spacing={3}>
                <Typography variant="h5" fontWeight={600}>Report New Incident</Typography>
                <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
                <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline />
                <Select value={severity} onChange={(e) => setSeverity(e.target.value as Incident['severity'])} fullWidth>
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleSubmit} size="large">
                    Submit
                </Button>
            </Stack>
        </Paper>
    );
}

export default IncidentForm;
