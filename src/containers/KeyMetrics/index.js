import useFetchData from "../../hooks/useFetchData";
import KeyMetricCard from "./keyMetricCard";
import { KEY_METRICS_ICONS } from "./constants";

const KeyMetrics = () => {
  const { isLoading, data, error } = useFetchData(
    "http://localhost:5000/keyMetrics"
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5">
      {isLoading && "Loading Data"}
      {error && "It is an error"}
      {data.map((item, index) => {
        const { name, value } = item;
        return (
          <KeyMetricCard
            key={index}
            name={name}
            value={value}
            icon={KEY_METRICS_ICONS[index]}
          />
        );
      })}
    </div>
  );
};

export default KeyMetrics;
