// Helper function to format the tooltip data:
// - labelFormatter formats the label as a string
// - valueFormatter formats the value as a localized string (e.g., with commas for thousands)
import { MONTHS } from "./constants";
export const tooltipFormatters = {
  labelFormatter: (label) => MONTHS[label] || label,
  valueFormatter: (value) => value.toLocaleString(),
};
