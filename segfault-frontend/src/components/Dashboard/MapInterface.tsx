import { Box, Paper, Button, Typography } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import TouchAppIcon from '@mui/icons-material/TouchApp';

interface MapInterfaceProps {
  onPinClick: (issueId: string) => void;
}

const MapInterface = ({ onPinClick }: MapInterfaceProps) => {
  // Demo issue ID for simulation - in a real implementation,
  // this would come from clicking on an actual map marker
  const handleSimulateClick = () => {
    onPinClick('1'); // Simulate clicking on issue with ID 1
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: 'calc(100vh - 200px)',
        minHeight: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        border: '2px dashed',
        borderColor: 'grey.400',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `
            linear-gradient(#999 1px, transparent 1px),
            linear-gradient(90deg, #999 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <MapIcon
        sx={{
          fontSize: 80,
          color: 'grey.500',
          mb: 2,
        }}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 1, fontWeight: 600 }}
      >
        Map View
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3, textAlign: 'center', maxWidth: 300 }}
      >
        Interactive map will be displayed here. Click the button below to simulate viewing an issue.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<TouchAppIcon />}
        onClick={handleSimulateClick}
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
          },
        }}
      >
        Simulate Pin Click
      </Button>
    </Paper>
  );
};

export default MapInterface;
