import Tooltip from "../../components/Tooltip";
import { formatTooltipData } from "./helpers";
import { TOOLTIP_FORMATTER } from "../constants"; // Import from constants

const TooltipWrapper = (props) => {
  const modifiedPayload = formatTooltipData(props);
  if (!modifiedPayload) return null;

  return (
    <Tooltip
      {...props}
      payload={modifiedPayload}
      labelFormatter={TOOLTIP_FORMATTER.LABEL_FORMATTER}
      valueFormatter={TOOLTIP_FORMATTER.VALUE_FORMATTER}
    />
  );
};

export default TooltipWrapper;
