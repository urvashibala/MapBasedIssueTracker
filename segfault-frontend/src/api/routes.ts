import api from './axios';

export interface IssueFilters {
    issueType?: string;
    statusOpen?: boolean;
    statusInProgress?: boolean;
    urgency?: string;
    showResolved?: boolean;
}

export interface IssueReportData {
    type: string;
    location: string;
    description: string;
    anonymous: boolean;
    photos?: File[];
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export interface Issue {
    id: string;
    title: string;
    type: string;
    status: string;
    urgency: string;
    location: string;
    description: string;
    voteCount: number;
    reportedAt: string;
    reporterId?: string;
}

export interface IssueType {
    id: string;
    name: string;
    description: string;
}

export interface Analytics {
    totalIssues: number;
    resolvedIssues: number;
    averageResolutionTime: number;
    issuesByType: Record<string, number>;
    issuesByStatus: Record<string, number>;
    trendData: Array<{ date: string; count: number }>;
}

export interface Notification {
    id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
    issueId?: string;
}

export const authRoutes = {
    logout: async (): Promise<{ success: boolean }> => {
        const response = await api.post('/auth/logout');
        return response.data;
    },
};

export const issueRoutes = {
    getIssues: async (filters?: IssueFilters): Promise<Issue[]> => {
        const response = await api.get('/issues', { params: filters });
        return response.data;
    },

    reportIssue: async (data: IssueReportData): Promise<Issue> => {
        const formData = new FormData();
        formData.append('type', data.type);
        formData.append('location', data.location);
        formData.append('description', data.description);
        formData.append('anonymous', String(data.anonymous));
        if (data.coordinates) {
            formData.append('lat', String(data.coordinates.lat));
            formData.append('lng', String(data.coordinates.lng));
        }
        if (data.photos) {
            data.photos.forEach((photo) => {
                formData.append('photos', photo);
            });
        }
        const response = await api.post('/issues/report', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    },

    getIssueTypes: async (): Promise<IssueType[]> => {
        const response = await api.get('/issues/types');
        return response.data;
    },
};

export const interactionRoutes = {
    getIssueById: async (id: string): Promise<Issue> => {
        const response = await api.get(`/issues/${id}`);
        return response.data;
    },

    voteOnIssue: async (id: string): Promise<{ voteCount: number; hasVoted: boolean }> => {
        const response = await api.post(`/issues/${id}/vote`);
        return response.data;
    },
};

export const analyticsRoutes = {
    getAnalytics: async (params?: { userId?: string; filters?: IssueFilters }): Promise<Analytics> => {
        const response = await api.get('/analytics', { params });
        return response.data;
    },
};

export const notificationRoutes = {
    getNotifications: async (): Promise<Notification[]> => {
        const response = await api.get('/notifications');
        return response.data;
    },

    markAsRead: async (id: string): Promise<{ success: boolean }> => {
        const response = await api.patch(`/notifications/${id}/read`);
        return response.data;
    },
};

export default {
    auth: authRoutes,
    issues: issueRoutes,
    interactions: interactionRoutes,
    analytics: analyticsRoutes,
    notifications: notificationRoutes,
};
