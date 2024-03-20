import { LineChart as LC, Line } from 'recharts';
const LineChart = () => {
    const gymMembers = [
        { id: 1, name: "John Doe", monthlyAttendDays: 20, dailyTotalOpenTime: 2 },
        { id: 2, name: "Jane Smith", monthlyAttendDays: 15, dailyTotalOpenTime: 1 },
        { id: 3, name: "Michael Johnson", monthlyAttendDays: 25, dailyTotalOpenTime: 3 },
        { id: 4, name: "Emily Wilson", monthlyAttendDays: 12, dailyTotalOpenTime: 1 },
        { id: 5, name: "David Brown", monthlyAttendDays: 18, dailyTotalOpenTime: 2 },
        { id: 6, name: "Emma Davis", monthlyAttendDays: 16, dailyTotalOpenTime: 2 },
        { id: 7, name: "William Martinez", monthlyAttendDays: 22, dailyTotalOpenTime: 2 },
        { id: 8, name: "Olivia Taylor", monthlyAttendDays: 10, dailyTotalOpenTime: 1 },
        { id: 9, name: "Daniel Anderson", monthlyAttendDays: 19, dailyTotalOpenTime: 2 },
        { id: 10, name: "Sophia Thomas", monthlyAttendDays: 17, dailyTotalOpenTime: 2 }
      ];
      
      
    return (
        <div>
            <LC width={500} height={400} data ={gymMembers}>
                <Line dataKey="monthlyAttendDays"></Line>
                <Line dataKey="dailyTotalOpenTime"></Line>
            </LC>
        </div>
    );
};

export default LineChart;