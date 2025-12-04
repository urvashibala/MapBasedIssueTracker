import { useState } from 'react';
import { Box, Tabs, Tab, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import MapInterface from '../../components/Dashboard/MapInterface';
import DashboardView from '../../components/Dashboard/DashboardView';
import IssueReportForm from '../../components/Dashboard/IssueReportForm';
import IssueDetailPage from '../../components/Dashboard/IssueDetailPage';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [reportFormOpen, setReportFormOpen] = useState(false);
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handlePinClick = () => {
    setDetailDrawerOpen(true);
  };

  return (
    <DashboardLayout>
      <Box sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 2,
            p: 0.5,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            '& .MuiTabs-indicator': {
              height: '100%',
              borderRadius: 1.5,
              zIndex: 0,
            },
            '& .MuiTab-root': {
              zIndex: 1,
              minHeight: 48,
              textTransform: 'none',
              fontWeight: 600,
              '&.Mui-selected': {
                color: 'primary.contrastText',
              },
            },
          }}
        >
          <Tab
            icon={<MapIcon sx={{ mr: 1 }} />}
            iconPosition="start"
            label="Map"
          />
          <Tab
            icon={<BarChartIcon sx={{ mr: 1 }} />}
            iconPosition="start"
            label="Analytics"
          />
        </Tabs>
      </Box>

      {activeTab === 0 && <MapInterface onPinClick={handlePinClick} />}
      {activeTab === 1 && <DashboardView />}

      <Fab
        color="primary"
        aria-label="add issue"
        onClick={() => setReportFormOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 64,
          height: 64,
          boxShadow: '0 4px 20px rgba(25, 118, 210, 0.4)',
          '&:hover': {
            boxShadow: '0 6px 24px rgba(25, 118, 210, 0.5)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.2s ease',
        }}
      >
        <AddIcon sx={{ fontSize: 32 }} />
      </Fab>

      <IssueReportForm
        open={reportFormOpen}
        onClose={() => setReportFormOpen(false)}
      />

      <IssueDetailPage
        open={detailDrawerOpen}
        onClose={() => setDetailDrawerOpen(false)}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
