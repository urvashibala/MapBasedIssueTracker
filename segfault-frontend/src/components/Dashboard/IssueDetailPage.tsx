import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Chip,
  Divider,
  Button,
  TextField,
  Avatar,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';

interface IssueDetailPageProps {
  open: boolean;
  onClose: () => void;
}

const IssueDetailPage = ({ open, onClose }: IssueDetailPageProps) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(24);
  const [newComment, setNewComment] = useState('');

  const mockIssue = {
    id: '123',
    title: 'Large Pothole on Main Street',
    status: 'In Progress',
    type: 'Pothole',
    urgency: 'High',
    location: '123 Main Street, Downtown',
    description: 'There is a large pothole approximately 2 feet wide causing traffic issues and potential vehicle damage.',
    reportedAt: '2024-01-15',
    reporter: 'Anonymous',
  };

  const mockComments = [
    { id: '1', author: 'John D.', text: 'This has been here for weeks!', time: '2 days ago' },
    { id: '2', author: 'City Works', text: 'Scheduled for repair next week.', time: '1 day ago' },
  ];

  const handleVote = () => {
    if (hasVoted) {
      setVoteCount((prev) => prev - 1);
    } else {
      setVoteCount((prev) => prev + 1);
    }
    setHasVoted(!hasVoted);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'warning';
      case 'in progress':
        return 'info';
      case 'resolved':
        return 'success';
      default:
        return 'default';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'low':
        return 'success';
      case 'medium':
        return 'warning';
      case 'high':
        return 'error';
      case 'critical':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 420 },
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Issue Details
        </Typography>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ p: 3, overflowY: 'auto', flex: 1 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {mockIssue.title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={mockIssue.status}
            color={getStatusColor(mockIssue.status)}
            size="small"
          />
          <Chip
            label={mockIssue.urgency}
            color={getUrgencyColor(mockIssue.urgency)}
            size="small"
            variant="outlined"
          />
          <Chip label={mockIssue.type} size="small" variant="outlined" />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
          <LocationOnIcon sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">{mockIssue.location}</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, color: 'text.secondary' }}>
          <AccessTimeIcon sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">Reported on {mockIssue.reportedAt}</Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {mockIssue.description}
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'grey.100',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" fontWeight={700} sx={{ mr: 1 }}>
              {voteCount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              people find this important
            </Typography>
          </Box>
          <Button
            variant={hasVoted ? 'contained' : 'outlined'}
            color="primary"
            startIcon={hasVoted ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
            onClick={handleVote}
          >
            {hasVoted ? 'Voted' : 'Vote'}
          </Button>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight={600} gutterBottom>
          Comments ({mockComments.length})
        </Typography>

        {mockComments.map((comment) => (
          <Box key={comment.id} sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>
              {comment.author[0]}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" fontWeight={600}>
                  {comment.author}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {comment.time}
                </Typography>
              </Box>
              <Typography variant="body2">{comment.text}</Typography>
            </Box>
          </Box>
        ))}

        <Box sx={{ mt: 3 }}>
          <TextField
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            fullWidth
            multiline
            rows={2}
            sx={{ mb: 1 }}
          />
          <Button variant="contained" size="small" disabled={!newComment.trim()}>
            Post Comment
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default IssueDetailPage;
