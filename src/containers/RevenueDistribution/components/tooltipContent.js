import CustomTooltipComponent from "../../../components/Tooltip";
import { formatTooltipPayload } from "../helpers";

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

export default TooltipContent;
