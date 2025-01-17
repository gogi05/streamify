import React from "react";

const CustomTooltip = ({
  active,
  payload,
  label,
  labelFormatter,
  valueFormatter,
}) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  // Default formatters if none provided
  const formatLabel = labelFormatter || ((lbl) => lbl);
  const formatValue = valueFormatter || ((val) => val.toLocaleString());

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm min-w-[150px]">
      <p className="font-medium text-gray-600 mb-2">{formatLabel(label)}</p>
      {payload.map((entry, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm mb-1 last:mb-0"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-gray-600">{entry.name}:</span>
          <span className="font-medium">{formatValue(entry.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomTooltip;
