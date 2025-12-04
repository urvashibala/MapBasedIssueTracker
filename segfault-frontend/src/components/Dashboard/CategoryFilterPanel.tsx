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
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

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
}

const ISSUE_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'pothole', label: 'Pothole' },
  { value: 'streetlight', label: 'Streetlight' },
  { value: 'graffiti', label: 'Graffiti' },
  { value: 'trash', label: 'Trash/Litter' },
  { value: 'sidewalk', label: 'Sidewalk Damage' },
  { value: 'drainage', label: 'Drainage Issue' },
  { value: 'other', label: 'Other' },
];

const URGENCY_LEVELS = [
  { value: '', label: 'All Urgencies' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];

const CategoryFilterPanel = ({
  filters,
  onFilterChange,
  onToggleResolved,
}: CategoryFilterPanelProps) => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <FilterListIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight={600}>
          Filters
        </Typography>
      </Box>

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
    </Box>
  );
};

export default CategoryFilterPanel;
