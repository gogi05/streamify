import React, { useState, useCallback } from "react";
import { PieChart, Pie, Tooltip, Sector } from "recharts";
import { CustomTooltip } from "../../components/Chart";

const calculateTotalRevenue = (data) => {
  return data?.reduce((sum, item) => sum + item.revenue, 0) || 0;
};

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const RevenueDistributionChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalRevenue = calculateTotalRevenue(data);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);

  // Custom wrapper for the tooltip to handle revenue-specific formatting
  const CustomTooltipWrapper = (props) => {
    if (!props.active || !props.payload || !props.payload.length) {
      return null;
    }

    const { name, revenue } = props.payload[0].payload;
    const percentage = ((revenue / totalRevenue) * 100).toFixed(2);

    // Transform the data to match our CustomTooltip format
    const modifiedPayload = [
      {
        name: "Revenue",
        value: revenue,
        color: props.payload[0].color,
        formattedValue: `$${revenue.toLocaleString()}`,
      },
      {
        name: "Percentage",
        value: percentage,
        color: "#666",
        formattedValue: `${percentage}%`,
      },
    ];

    return (
      <CustomTooltip
        {...props}
        payload={modifiedPayload}
        label={name}
        labelFormatter={(label) => `Source: ${label}`}
      />
    );
  };

  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
        <text
          x={200}
          y={200}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gray-600"
        >
          <tspan x={200} dy="-10" className="text-sm">
            Total Revenue
          </tspan>
          <tspan x={200} dy="32" className="text-xl font-medium">
            ${totalRevenue.toLocaleString()}
          </tspan>
        </text>

        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          dataKey="revenue"
          nameKey="source"
          onMouseEnter={onPieEnter}
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                className="text-xs font-bold"
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
        />
        <Tooltip content={<CustomTooltipWrapper />} />
      </PieChart>
    </div>
  );
};

export default RevenueDistributionChart;
