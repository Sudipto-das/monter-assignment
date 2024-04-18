

export interface ReportData {
    date: string;
    time:string;
    reportName: string;
}

const dummyData: ReportData[] = [
    { date: '2024-04-15', time: '10:00 AM', reportName: 'Sales_Report.csv' },
    { date: '2024-04-16', time: '11:30 AM', reportName: 'Marketing_Report.csv' },
    { date: '2024-04-17', time: '02:45 PM', reportName: 'Financial_Report.csv' },
    { date: '2024-04-18', time: '09:15 AM', reportName: 'Inventory_Report.csv' },
    { date: '2024-04-19', time: '04:00 PM', reportName: 'Customer_Feedback_Report_abcdefgthbcbsdcbb.csv' },
];

export default dummyData;
