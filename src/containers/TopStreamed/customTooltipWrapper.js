import { CustomTooltip } from "../../components/Chart";
import { formatTooltipData, tooltipFormatters } from "./helpers";

const CustomTooltipWrapper = (props) => {
  const modifiedPayload = formatTooltipData(props);
  if (!modifiedPayload) return null;

  return (
    <CustomTooltip
      {...props}
      payload={modifiedPayload}
      {...tooltipFormatters}
    />
  );
};

export default CustomTooltipWrapper;
