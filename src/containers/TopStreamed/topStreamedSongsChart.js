import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { CHART_COLORS, CHART_PADDING } from "./constants";
import CustomTooltipWrapper from "./customTooltipWrapper";

const TopStreamedSongsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical" margin={CHART_PADDING.yAxis}>
        <XAxis type="number" className="text-sm" />
        <YAxis
          dataKey="songName"
          type="category"
          width={150}
          tick={{ fontSize: 12 }}
          className="text-sm font-medium"
        />
        <Tooltip content={CustomTooltipWrapper} />
        <Bar
          dataKey="streamCount"
          fill={CHART_COLORS.streamCountBar}
          name="Stream Count"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongsChart;
