import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Jan',  USA: 2400, UK: 2400 , IDN :3000, GER:3500 },
  { month: 'Feb',  USA: 1398, UK: 2210, IDN :2250, GER:3100 },
  // Add more data...
];

const SalesChart = () => (
  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="GER" stroke="#8884d8" />
    <Line type="monotone" dataKey="USA" stroke="#82ca9d" />
    <Line type="monotone" dataKey="UK" stroke="#ffc658" />
    <Line type="monotone" dataKey="IDN" stroke="#FFBB28" />
  </LineChart>
);

export default SalesChart;
