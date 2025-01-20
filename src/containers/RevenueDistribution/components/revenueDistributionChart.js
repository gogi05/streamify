import React, { useState, useCallback, useMemo } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import TooltipContent from "./tooltipContent";
import ChartCenterText from "./chartCenterText";
import RenderActiveShape from "./renderActiveShape";
import { calculateTotalRevenue, assignColorsToData } from "../helpers";
import { REVENUE_CHART_CONFIG } from "../constants";
import { useRevenueContext } from "../../../context/revenueStreamContext";

const RevenueDistributionChart = ({ data }) => {
  const { selectRevenueStream } = useRevenueContext();
  const [activeIndex, setActiveIndex] = useState(0);

  const totalRevenue = useMemo(() => calculateTotalRevenue(data), [data]);
  const coloredData = useMemo(() => assignColorsToData(data), [data]);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);

  const onPieClick = useCallback(
    (data) => {
      selectRevenueStream(data.source);
    },
    [selectRevenueStream]
  );

  return (
    <div className="flex justify-center items-center relative">
      <div className="cursor-pointer relative">
        <PieChart
          width={REVENUE_CHART_CONFIG.width}
          height={REVENUE_CHART_CONFIG.height}
        >
          <Pie
            activeIndex={activeIndex}
            activeShape={RenderActiveShape}
            data={coloredData}
            cx={REVENUE_CHART_CONFIG.centerX}
            cy={REVENUE_CHART_CONFIG.centerY}
            innerRadius={REVENUE_CHART_CONFIG.innerRadius}
            outerRadius={REVENUE_CHART_CONFIG.outerRadius}
            dataKey="revenue"
            nameKey="source"
            onMouseEnter={onPieEnter}
            onClick={onPieClick}
            labelLine={false}
            label={null}
          />
          <Tooltip
            wrapperStyle={{
              zIndex: 20, // to make tooltip above the center text
            }}
            content={({ active, payload }) => (
              <TooltipContent
                active={active}
                payload={payload}
                totalRevenue={totalRevenue}
              />
            )}
          />
        </PieChart>
        <ChartCenterText totalRevenue={totalRevenue} />
      </div>
    </div>
  );
};

export default RevenueDistributionChart;
