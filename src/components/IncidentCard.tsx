// src/components/IncidentCard.tsx
import {
    Card, CardContent, Typography, CardActions, IconButton, Collapse, Stack, Chip,
    TextField, Select, MenuItem, Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { motion } from 'framer-motion';
import severityColors from '../utils/severityColors';
import { Incident } from '../types/Incident';

interface Props {
    incident: Incident;
    deleteIncident: (id: number) => void;
    editIncident: (i: Incident) => void;
}

export default function IncidentCard({ incident, deleteIncident, editIncident }: Props) {
    const [expanded, setExpanded] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editedIncident, setEditedIncident] = useState<Incident>({ ...incident });

    const handleSave = () => {
        editIncident(editedIncident);
        setEditing(false);
    };

    const handleCancel = () => {
        setEditedIncident({ ...incident });
        setEditing(false);
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card
                variant="outlined"
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    boxShadow: 1,
                    transition: '0.3s',
                    '&:hover': { boxShadow: 4, transform: editing ? 'none' : 'scale(1.02)' },
                }}
            >
                <CardContent>
                    <Stack spacing={1}>
                        {editing ? (
                            <>
                                <TextField
                                    fullWidth
                                    value={editedIncident.title}
                                    onChange={(e) => setEditedIncident({ ...editedIncident, title: e.target.value })}
                                    sx={{ mb: 2 }}
                                />
                                <Select
                                    value={editedIncident.severity}
                                    onChange={(e) => setEditedIncident({ ...editedIncident, severity: e.target.value as Incident['severity'] })}
                                    fullWidth
                                    sx={{ mb: 2 }}
                                >
                                    <MenuItem value="Low">Low</MenuItem>
                                    <MenuItem value="Medium">Medium</MenuItem>
                                    <MenuItem value="High">High</MenuItem>
                                </Select>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value={editedIncident.description}
                                    onChange={(e) => setEditedIncident({ ...editedIncident, description: e.target.value })}
                                />
                            </>
                        ) : (
                            <>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">{incident.title}</Typography>
                                    <Chip
                                        label={incident.severity}
                                        size="small"
                                        sx={{
                                            bgcolor: severityColors[incident.severity],
                                            color: '#fff',
                                            fontWeight: 700,
                                        }}
                                    />
                                </Stack>

                                <Typography variant="body2" color="text.secondary">
                                    {new Date(incident.reported_at).toLocaleDateString()}
                                </Typography>

                                <Collapse in={expanded}>
                                    <Typography mt={2}>{incident.description}</Typography>
                                </Collapse>
                            </>
                        )}
                    </Stack>
                </CardContent>

                <CardActions>
                    {editing ? (
                        <Box width="100%" display="flex" justifyContent="flex-end" gap={1}>
                            <IconButton color="error" onClick={handleCancel}>
                                <CloseIcon />
                            </IconButton>
                            <IconButton color="primary" onClick={handleSave}>
                                <SaveIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <>
                            <IconButton onClick={() => setExpanded(!expanded)}>
                                <ExpandMoreIcon />
                            </IconButton>
                            <IconButton color="primary" onClick={() => setEditing(true)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error" onClick={() => deleteIncident(incident.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                </CardActions>
            </Card>
        </motion.div>
    );
}