import React, { useState, useCallback, useMemo } from "react";
import { PieChart, Pie, Tooltip, Sector, Text } from "recharts";
import CustomTooltipComponent from "../../components/Tooltip";
import {
  calculateTotalRevenue,
  assignColorsToData,
  formatTooltipPayload,
} from "./helpers";
import { REVENUE_CHART_CONFIG } from "./constants";

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

const TooltipContent = ({ active, payload, totalRevenue }) => {
  if (!active) return null;

  const formattedPayload = formatTooltipPayload(payload, totalRevenue);
  return (
    <CustomTooltipComponent
      payload={formattedPayload}
      label={payload[0].payload.source}
      active={active}
    />
  );
};

const RevenueDistributionChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalRevenue = useMemo(() => calculateTotalRevenue(data), [data]);
  const coloredData = useMemo(() => assignColorsToData(data), [data]);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <PieChart
        width={REVENUE_CHART_CONFIG.width}
        height={REVENUE_CHART_CONFIG.height}
      >
        <Text
          x={REVENUE_CHART_CONFIG.centerX}
          y={REVENUE_CHART_CONFIG.centerY - 20}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gray-600"
        >
          <tspan x={REVENUE_CHART_CONFIG.centerX} dy="-10" className="text-sm">
            Total Revenue
          </tspan>
          <tspan
            x={REVENUE_CHART_CONFIG.centerX}
            dy="32"
            className="text-xl font-medium"
          >
            ${totalRevenue.toLocaleString()}
          </tspan>
        </Text>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={coloredData}
          cx={REVENUE_CHART_CONFIG.centerX}
          cy={REVENUE_CHART_CONFIG.centerY}
          innerRadius={REVENUE_CHART_CONFIG.innerRadius}
          outerRadius={REVENUE_CHART_CONFIG.outerRadius}
          dataKey="revenue"
          nameKey="source"
          onMouseEnter={onPieEnter}
          labelLine={false}
          label={null}
        />
        <Tooltip
          content={({ active, payload }) => (
            <TooltipContent
              active={active}
              payload={payload}
              totalRevenue={totalRevenue}
            />
          )}
        />
      </PieChart>
    </div>
  );
};

export default RevenueDistributionChart;
