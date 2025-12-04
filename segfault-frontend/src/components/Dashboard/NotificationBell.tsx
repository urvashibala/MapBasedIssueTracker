import { useState, useEffect } from 'react';
import { IconButton, Badge, Menu, MenuItem, Typography, Box, Divider, Button, CircularProgress } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CircleIcon from '@mui/icons-material/Circle';
import { notificationRoutes, type Notification } from '../../api/routes';
import { useAuth } from '../../state/authContext';

const NotificationBell = () => {
  const { isGuest } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {
    if (isGuest) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    try {
      setLoading(true);
      const data = await notificationRoutes.getNotifications();
      setNotifications(data);
      setUnreadCount(data.filter((n) => !n.read).length);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [isGuest]);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = async (notification: Notification) => {
    if (!notification.read) {
      try {
        await notificationRoutes.markAsRead(notification.id);
        setNotifications((prev) =>
          prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
        );
        setUnreadCount((prev) => Math.max(0, prev - 1));
      } catch (error) {
        console.error('Failed to mark notification as read:', error);
      }
    }
    handleClose();
  };

  const handleMarkAllAsRead = async () => {
    try {
      await notificationRoutes.markAllAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Failed to mark all as read:', error);
    }
  };

  const formatNotificationTitle = (type: string): string => {
    switch (type) {
      case 'ISSUE_STATUS_UPDATE':
        return 'Issue Updated';
      case 'NEW_COMMENT':
        return 'New Comment';
      case 'UPVOTE_RECEIVED':
        return 'New Upvote';
      case 'BAN_NOTICE':
        return 'Account Notice';
      default:
        return 'Notification';
    }
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        sx={{
          mr: 1,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        }}
      >
        <Badge
          badgeContent={unreadCount}
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '0.7rem',
              fontWeight: 700,
            },
          }}
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 320,
            maxHeight: 400,
            mt: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            borderRadius: 2,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight={600}>
            Notifications
          </Typography>
          {unreadCount > 0 && (
            <Button size="small" onClick={handleMarkAllAsRead}>
              Mark all read
            </Button>
          )}
        </Box>
        <Divider />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
            <CircularProgress size={24} />
          </Box>
        ) : notifications.length === 0 ? (
          <MenuItem disabled>
            <Typography variant="body2" color="text.secondary">
              {isGuest ? 'Sign in to view notifications' : 'No notifications'}
            </Typography>
          </MenuItem>
        ) : (
          notifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              sx={{
                py: 1.5,
                px: 2,
                backgroundColor: notification.read ? 'transparent' : 'action.hover',
                '&:hover': {
                  backgroundColor: 'action.selected',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                {!notification.read && (
                  <CircleIcon
                    sx={{
                      fontSize: 8,
                      color: 'primary.main',
                      mr: 1,
                      mt: 0.8,
                    }}
                  />
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight={notification.read ? 400 : 600}>
                    {formatNotificationTitle(notification.type)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {notification.message}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
};

export default NotificationBell;
