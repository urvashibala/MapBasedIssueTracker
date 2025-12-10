import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    Switch,
    Divider,
    Button,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DirectionsIcon from '@mui/icons-material/Directions';

interface FilterState {
    issueType: string;
    statusOpen: boolean;
    statusInProgress: boolean;
    urgency: string;
    showResolved: boolean;
}

interface CategoryFilterPanelProps {
    filters: FilterState;
    onFilterChange: (filters: Partial<FilterState>) => void;
    onToggleResolved: () => void;
    showRouting?: boolean;
    onToggleRouting?: () => void;
}

const ISSUE_TYPES = [
    { value: '', label: 'All Types' },
    { value: 'POTHOLE', label: 'Pothole' },
    { value: 'ROAD_DAMAGE', label: 'Road Damage' },
    { value: 'STREETLIGHT_FAULT', label: 'Streetlight Fault' },
    { value: 'GARBAGE_UNCOLLECTED', label: 'Garbage Uncollected' },
    { value: 'ILLEGAL_DUMPING', label: 'Illegal Dumping' },
    { value: 'DRAINAGE_BLOCKED', label: 'Drainage Blocked' },
    { value: 'SEWAGE_OVERFLOW', label: 'Sewage Overflow' },
    { value: 'WATER_SUPPLY_ISSUE', label: 'Water Supply' },
    { value: 'LOW_WATER_PRESSURE', label: 'Low Water Pressure' },
    { value: 'OPEN_MANHOLE', label: 'Open Manhole' },
    { value: 'BROKEN_FOOTPATH', label: 'Broken Footpath' },
    { value: 'ILLEGAL_ENCROACHMENT', label: 'Illegal Encroachment' },
    { value: 'STRAY_CATTLE', label: 'Stray Cattle' },
    { value: 'TREE_FALL', label: 'Tree Fall' },
    { value: 'TRAFFIC_LIGHT_FAULT', label: 'Traffic Light Fault' },
    { value: 'MOSQUITO_BREEDING', label: 'Mosquito Breeding' },
    { value: 'NOISE_COMPLAINT', label: 'Noise Complaint' },
    { value: 'BUILDING_SAFETY', label: 'Building Safety' },
];

const URGENCY_LEVELS = [
    { value: '', label: 'All Urgencies' },
    { value: 'LOW', label: 'Low' },
    { value: 'MEDIUM', label: 'Medium' },
    { value: 'HIGH', label: 'High' },
    { value: 'CRITICAL', label: 'Critical' },
];

const CategoryFilterPanel = ({
    filters,
    onFilterChange,
    onToggleResolved,
    showRouting,
    onToggleRouting,
}: CategoryFilterPanelProps) => {
    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <FilterListIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" fontWeight={600}>
                    Filters
                </Typography>
            </Box>

            {onToggleRouting && (
                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<DirectionsIcon />}
                    onClick={onToggleRouting}
                    sx={{ mb: 3, justifyContent: 'flex-start', textTransform: 'none', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                >
                    Find Route
                </Button>
            )}

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="issue-type-label">Issue Type</InputLabel>
                <Select
                    labelId="issue-type-label"
                    value={filters.issueType}
                    label="Issue Type"
                    onChange={(e) => onFilterChange({ issueType: e.target.value })}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'divider',
                        },
                    }}
                >
                    {ISSUE_TYPES.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                            {type.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                Status
            </Typography>
            <Box sx={{ mb: 2 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={filters.statusOpen}
                            onChange={(e) => onFilterChange({ statusOpen: e.target.checked })}
                            color="primary"
                        />
                    }
                    label="Open"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={filters.statusInProgress}
                            onChange={(e) => onFilterChange({ statusInProgress: e.target.checked })}
                            color="primary"
                        />
                    }
                    label="In Progress"
                />
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="urgency-label">Urgency</InputLabel>
                <Select
                    labelId="urgency-label"
                    value={filters.urgency}
                    label="Urgency"
                    onChange={(e) => onFilterChange({ urgency: e.target.value })}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'divider',
                        },
                    }}
                >
                    {URGENCY_LEVELS.map((level) => (
                        <MenuItem key={level.value} value={level.value}>
                            {level.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Divider sx={{ my: 2 }} />

            <FormControlLabel
                control={
                    <Switch
                        checked={filters.showResolved}
                        onChange={onToggleResolved}
                        color="primary"
                    />
                }
                label={
                    <Typography variant="body2" fontWeight={500}>
                        Show Resolved Issues
                    </Typography>
                }
                sx={{
                    '& .MuiFormControlLabel-label': {
                        ml: 1,
                    },
                }}
            />

            {onToggleRouting && (
                <FormControlLabel
                    control={
                        <Switch
                            checked={!!showRouting}
                            onChange={onToggleRouting}
                            color="secondary"
                        />
                    }
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" fontWeight={500}>
                                Show Routing
                            </Typography>
                        </Box>
                    }
                    sx={{
                        mt: 1,
                        '& .MuiFormControlLabel-label': {
                            ml: 1,
                        },
                    }}
                />
            )}
        </Box>
    );
};

export default CategoryFilterPanel;
