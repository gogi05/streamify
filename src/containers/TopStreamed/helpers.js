// Helper function to format the tooltip data:
// - labelFormatter formats the label as a string
// - valueFormatter formats the value as a localized string (e.g., with commas for thousands)
export const tooltipFormatters = {
  labelFormatter: (label) => `${label}`,
  valueFormatter: (value) => value.toLocaleString(),
};

// Helper function to modify the tooltip data
export const formatTooltipData = (props) => {
  if (!props.active || !props.payload || !props.payload.length) {
    return null;
  }

  const modifiedPayload = [
    {
      name: "Artist",
      value: props.payload[0].payload.artist,
      color: "#666",
    },
    {
      ...props.payload[0],
      name: "Streams",
      value: props.payload[0].value,
    },
  ];

  return modifiedPayload;
};
