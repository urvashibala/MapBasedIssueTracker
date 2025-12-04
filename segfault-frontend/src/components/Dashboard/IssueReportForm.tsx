import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface IssueReportFormProps {
  open: boolean;
  onClose: () => void;
}

const ISSUE_TYPES = [
  { value: 'pothole', label: 'Pothole' },
  { value: 'streetlight', label: 'Streetlight' },
  { value: 'graffiti', label: 'Graffiti' },
  { value: 'trash', label: 'Trash/Litter' },
  { value: 'sidewalk', label: 'Sidewalk Damage' },
  { value: 'drainage', label: 'Drainage Issue' },
  { value: 'other', label: 'Other' },
];

const IssueReportForm = ({ open, onClose }: IssueReportFormProps) => {
  const [issueType, setIssueType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = () => {
    const formData = {
      type: issueType,
      location,
      description,
      anonymous: isAnonymous,
    };
    console.log('Issue Report:', formData);
    onClose();
  };

  const handleClose = () => {
    setIssueType('');
    setLocation('');
    setDescription('');
    setIsAnonymous(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Report an Issue
        </Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="issue-type-select-label">Issue Type</InputLabel>
            <Select
              labelId="issue-type-select-label"
              value={issueType}
              label="Issue Type"
              onChange={(e) => setIssueType(e.target.value)}
            >
              {ISSUE_TYPES.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Location"
            placeholder="Enter address or describe location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            helperText="You can also click on the map to set location"
          />

          <TextField
            label="Description"
            placeholder="Describe the issue in detail"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />

          <Box
            sx={{
              border: '2px dashed',
              borderColor: 'grey.300',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'action.hover',
              },
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 40, color: 'grey.400', mb: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Click to upload photos or drag and drop
            </Typography>
          </Box>

          <FormControlLabel
            control={
              <Switch
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Box>
                <Typography variant="body1" fontWeight={500}>
                  Submit Anonymously
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Your identity will not be associated with this report
                </Typography>
              </Box>
            }
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2.5 }}>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ px: 4 }}
        >
          Submit Report
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IssueReportForm;
