import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserGrowthChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={360}>
      <LineChart data={data} margin={{ top: 10 }}>
        <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
          name="Total users"
        ></Line>
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke="#82ca9d"
          activeDot={{ r: 6 }}
          name="Active users"
        ></Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
