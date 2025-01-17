import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { CustomTooltip } from "../../components/Chart";

const UserGrowthChart = ({ data }) => {
  const tooltipFormatters = {
    labelFormatter: (label) => `Month: ${label}`,
    valueFormatter: (value) => value.toLocaleString(),
  };

  return (
    <ResponsiveContainer width="100%" height={360}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="month"
          padding={{ left: 30, right: 30 }}
          className="text-sm"
        />
        <YAxis className="text-sm" />
        <Tooltip content={<CustomTooltip {...tooltipFormatters} />} />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
          name="Total Users"
        />
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke="#82ca9d"
          activeDot={{ r: 6 }}
          name="Active Users"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
