import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { CustomTooltip } from "../../components/Chart";

const TopStreamedSongsChart = ({ data }) => {
  const tooltipFormatters = {
    // Format the label (song name)
    labelFormatter: (label) => `${label}`,
    // Format the value (stream count)
    valueFormatter: (value) => value.toLocaleString(),
  };

  // Transform the tooltip data to include artist information
  const CustomTooltipWrapper = (props) => {
    if (!props.active || !props.payload || !props.payload.length) {
      return null;
    }

    // Create modified payload to include both stream count and artist
    const modifiedPayload = [
      {
        name: "Artist",
        value: props.payload[0].payload.artist,
        color: "#666", // Different color for artist info
      },
      {
        ...props.payload[0],
        name: "Streams",
        value: props.payload[0].value,
      },
    ];

    return (
      <CustomTooltip
        {...props}
        payload={modifiedPayload}
        {...tooltipFormatters}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
      >
        <XAxis type="number" className="text-sm" />
        <YAxis
          dataKey="songName"
          type="category"
          width={150}
          tick={{ fontSize: 12 }}
          className="text-sm font-medium"
        />
        <Tooltip content={<CustomTooltipWrapper />} />
        <Bar
          dataKey="streamCount"
          fill="#8884d8"
          barSize={30}
          name="Stream Count"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongsChart;
