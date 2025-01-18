import { CHART_COLORS } from "../constants";

// Calculate total revenue from the data
export const calculateTotalRevenue = (data) => {
  return data?.reduce((sum, item) => sum + item.revenue, 0) || 0;
};

// Assign colors from CHART_COLORS to data items
export const assignColorsToData = (data) => {
  const colorValues = Object.values(CHART_COLORS);
  return data.map((item, index) => ({
    ...item,
    fill: colorValues[index % colorValues.length],
  }));
};

//Formatted tooltip payload
export const formatTooltipPayload = (payload, totalRevenue) => {
  if (!payload || !payload.length) return [];

  const { revenue, fill } = payload[0].payload;
  const percentage = ((revenue / totalRevenue) * 100).toFixed(2);

  return [
    {
      name: "Revenue",
      value: revenue,
      color: fill,
      formattedValue: `$${revenue.toLocaleString()}`,
    },
    {
      name: "Percentage",
      value: percentage,
      color: "#666",
      formattedValue: `${percentage}%`,
    },
  ];
};
