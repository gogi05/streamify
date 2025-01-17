import {
  CardLayout,
  CardHeading,
  CardDescription,
} from "../../components/Card";
import useFetchData from "../../hooks/useFetchData";
import RevenueDistributionChart from "./revenueDistributionChart";

const RevenueDistribution = () => {
  const {
    isLoading,
    data = [],
    error,
  } = useFetchData("http://localhost:5000/revenueDistribution");

  return (
    <CardLayout>
      <CardHeading className="text-lg">Revenue Distribution</CardHeading>
      <CardDescription>
        Exploring the Impact of Each Revenue Stream on Growth
      </CardDescription>
      {isLoading && <p>Loading data...</p>}
      {error && <p>There was an error fetching the data.</p>}
      <RevenueDistributionChart data={data} />
    </CardLayout>
  );
};

export default RevenueDistribution;
