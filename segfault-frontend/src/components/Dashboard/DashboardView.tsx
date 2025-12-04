import { Box, Paper, Typography, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MapIcon from '@mui/icons-material/Map';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';

const DashboardView = () => {
  const placeholderCards = [
    { icon: <MapIcon sx={{ fontSize: 48 }} />, title: 'Heatmap', description: 'Issue density visualization' },
    { icon: <TrendingUpIcon sx={{ fontSize: 48 }} />, title: 'Trends', description: 'Issue trends over time' },
    { icon: <BarChartIcon sx={{ fontSize: 48 }} />, title: 'Categories', description: 'Issues by category' },
    { icon: <PieChartIcon sx={{ fontSize: 48 }} />, title: 'Status', description: 'Resolution statistics' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Analytics Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          View heatmaps and trends for reported issues
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {placeholderCards.map((card, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                transition: 'all 0.2s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                {card.icon}
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center">
                {card.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 4,
          minHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 3,
          border: '2px dashed',
          borderColor: 'grey.300',
          backgroundColor: 'grey.50',
        }}
      >
        <TrendingUpIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
        <Typography variant="h5" color="text.secondary" fontWeight={600}>
          Heatmaps and Trends
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Analytics charts and visualizations will be displayed here
        </Typography>
      </Paper>
    </Box>
  );
};

export default DashboardView;
