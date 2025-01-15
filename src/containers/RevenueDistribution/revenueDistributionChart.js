import { useState, useCallback } from "react";
import { PieChart, Pie, Tooltip, Sector } from "recharts";

// Helper to calculate total revenue
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

// Custom Tooltip
const CustomTooltip = ({ active, payload, totalRevenue }) => {
  if (active && payload && payload.length) {
    const { name, revenue: value } = payload[0].payload;
    const percentage = value
      ? ((value / totalRevenue) * 100).toFixed(2)
      : "0.00";

    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ margin: 0, color: "#333" }}>{name}</h4>
        <div style={{ marginTop: "5px", color: "#666" }}>
          <p style={{ margin: "5px 0" }}>
            <strong>Percentage:</strong> {percentage}%
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Revenue:</strong> ${value ? value.toLocaleString() : "0"}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const RevenueDistributionChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const totalRevenue = calculateTotalRevenue(data);

  return (
    <PieChart width={800} height={800}>
      <text
        x={400}
        y={400}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={20}
        fill="#333"
      >
        ${totalRevenue.toLocaleString()}
      </text>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={400}
        cy={400}
        innerRadius={120}
        outerRadius={200}
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
              style={{ fontSize: 14, fontWeight: "bold" }}
            >
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        }}
      />
      <Tooltip content={<CustomTooltip totalRevenue={totalRevenue} />} />
    </PieChart>
  );
};

export default RevenueDistributionChart;
