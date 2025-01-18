import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import CustomTooltipComponent from "../../components/Tooltip";
import { TOOLTIP_FORMATTER, CHART_COLORS } from "../constants";

import { USER_CHART_CONFIG, USER_CHART_HEIGHT } from "./constants";

const UserGrowthChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={USER_CHART_HEIGHT}>
      <LineChart data={data} margin={USER_CHART_CONFIG.Y_AXIS}>
        <XAxis
          dataKey="month"
          padding={USER_CHART_CONFIG.X_AXIS}
          className="text-sm"
        />
        <YAxis className="text-sm" />
        <Tooltip
          content={
            <CustomTooltipComponent
              labelFormatter={TOOLTIP_FORMATTER.LABEL_FORMATTER}
              valueFormatter={TOOLTIP_FORMATTER.VALUE_FORMATTER}
            />
          }
        />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke={CHART_COLORS.PURPLE}
          activeDot={{ r: USER_CHART_CONFIG.RADIUS }}
          name={USER_CHART_CONFIG.NAMES.TOTAL_USERS}
        />
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke={CHART_COLORS.ORANGE}
          activeDot={{ r: USER_CHART_CONFIG.RADIUS }}
          name={USER_CHART_CONFIG.NAMES.ACTIVE_USERS}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
