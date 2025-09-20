export type Todo = {
    title: string;
    description: string;
    status: 'To Do' | 'In Progress' | 'Complete';
    startDate: string;
    endDate: string;
    assignees: string[];
    priority: 'Medium' | 'Important' | 'Urgent';
};

export type Assignee = {
    id: string,
    avatar: string,
    fullName: string
}
