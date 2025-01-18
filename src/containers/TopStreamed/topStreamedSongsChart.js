import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { TOP_STREAM_CHART_CONFIG } from "./constants";
import { CHART_COLORS } from "../constants";
import TooltipWrapper from "./customTooltipWrapper";

const TopStreamedSongsChart = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={TOP_STREAM_CHART_CONFIG.CONTAINER_HEIGHT}
    >
      <BarChart
        data={data}
        layout="vertical"
        margin={TOP_STREAM_CHART_CONFIG.Y_AXIS}
        style={TOP_STREAM_CHART_CONFIG.BAR_STYLES}
      >
        <XAxis type="number" className="text-sm" />
        <YAxis
          dataKey="songName"
          type="category"
          width={TOP_STREAM_CHART_CONFIG.HEADING_WIDTH}
          tick={TOP_STREAM_CHART_CONFIG.HEADING_FONT_SIZE}
          className="text-sm font-medium"
        />
        <Tooltip content={TooltipWrapper} />
        <Bar
          dataKey="streamCount"
          fill={CHART_COLORS.ORANGE}
          name="Stream Count"
          barSize={TOP_STREAM_CHART_CONFIG.BAR_SIZE}
          radius={TOP_STREAM_CHART_CONFIG.RADIUS}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongsChart;
