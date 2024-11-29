import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Search Engines', value: 400 },
  { name: 'Direct Click', value: 300 },
  { name: 'Referral', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const TrafficSourcesChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default TrafficSourcesChart;
