// Helper function to format the tooltip data:
// - labelFormatter formats the label as a string
// - valueFormatter formats the value as a localized string (e.g., with commas for thousands)
export const TOOLTIP_FORMATTER = {
  LABEL_FORMATTER: (label) => `${label}`,
  VALUE_FORMATTER: (value) => value.toLocaleString(),
};

export const CHART_COLORS = {
  ORANGE: "#c73e17",
  TEAL: "#147D78",
  BLUE: "#2c699a",
  PURPLE: "#744c9e",
  GREEN: "#2e854b",
};
