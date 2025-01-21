import useFetchData from "../../hooks/useFetchData";
import SkeletonLoader from "../../components/Loader";
import Error from "../../components/ErrorComponent";
import KeyMetricCard from "./keyMetricCard";
import { KEY_METRICS_ICONS } from "./constants";

const KeyMetrics = () => {
  const { isLoading, data, error } = useFetchData("/api/keyMetrics");

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5">
      {isLoading &&
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-full">
            <SkeletonLoader width="100%" height="100px" />
          </div>
        ))}
      {error && <Error message={error} />}
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
