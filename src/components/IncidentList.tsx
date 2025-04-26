import { useState } from 'react';
import { Incident } from '../types/Incident';
import { Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import IncidentCard from '../components/IncidentCard';

interface Props {
    incidents: Incident[];
    deleteIncident: (id: number) => void;
    editIncident: (incident: Incident) => void;
}

function IncidentList({ incidents, deleteIncident, editIncident }: Props) {
    const [severityFilter, setSeverityFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('Newest');

    const filtered = incidents.filter(incident =>
        severityFilter === 'All' ? true : incident.severity === severityFilter
    );

    const sorted = [...filtered].sort((a, b) => {
        const dateA = new Date(a.reported_at).getTime();
        const dateB = new Date(b.reported_at).getTime();
        return sortOrder === 'Newest' ? dateB - dateA : dateA - dateB;
    });

    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel>Severity</InputLabel>
                    <Select
                        value={severityFilter}
                        onChange={(e) => setSeverityFilter(e.target.value)}
                        label="Severity"
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        label="Sort By"
                    >
                        <MenuItem value="Newest">Newest First</MenuItem>
                        <MenuItem value="Oldest">Oldest First</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            {sorted.map(incident => (
                <IncidentCard
                    key={incident.id}
                    incident={incident}
                    deleteIncident={deleteIncident}
                    editIncident={editIncident}
                />
            ))}
        </Stack>
    );
}

export default IncidentList;
