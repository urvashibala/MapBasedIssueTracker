import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Map as MapIcon,
  VisibilityOff as AnonymityIcon,
  HowToVote as VoteIcon,
  ReportProblem as ReportIcon,
} from '@mui/icons-material';

const Landing = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <MapIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Transparency',
      description: 'Real-time map tracking of all reported issues. See exactly where problems are and their current status.',
    },
    {
      icon: <AnonymityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Anonymity',
      description: 'Guest reporting features allow you to report issues without creating an account. Your privacy matters.',
    },
    {
      icon: <VoteIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Resolution',
      description: 'Voting-based verification ensures community-driven accountability and prioritization of issues.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <ReportIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Public Issues Tracker
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Report Issues. Track Progress.{' '}
            <Box component="span" sx={{ color: 'secondary.light' }}>
              Drive Accountability.
            </Box>
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            A platform for residents, commuters, and authorities to identify,
            track, and resolve infrastructure problems in your community.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/login')}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(211, 47, 47, 0.4)',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(211, 47, 47, 0.5)',
              },
            }}
          >
            Report an Issue Now
          </Button>
        </Container>
      </Box>

      
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, flexGrow: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Why Use Public Issues Tracker?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h4" component="h3" gutterBottom fontWeight={600}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'grey.100',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Public Issues Tracker. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
              >
                Terms of Service
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
              >
                Contact
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;
