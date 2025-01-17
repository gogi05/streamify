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
import { tooltipFormatters } from "./helpers";
import {
  USER_CHART_COLORS,
  USER_CHART_PADDING,
  USER_CHART_HEIGHT,
} from "./constants";

const UserGrowthChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={USER_CHART_HEIGHT}>
      <LineChart data={data} margin={USER_CHART_PADDING.yAxis}>
        <XAxis
          dataKey="month"
          padding={USER_CHART_PADDING.xAxis}
          className="text-sm"
        />
        <YAxis className="text-sm" />
        <Tooltip content={<CustomTooltip {...tooltipFormatters} />} />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke={USER_CHART_COLORS.totalUsersLine}
          activeDot={{ r: 6 }}
          name="Total Users"
        />
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke={USER_CHART_COLORS.activeUsersLine}
          activeDot={{ r: 6 }}
          name="Active Users"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
