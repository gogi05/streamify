import {
  CardLayout,
  CardHeading,
  CardDescription,
} from "../../components/Card";
import SkeletonLoader from "../../components/Loader";
import Error from "../../components/ErrorComponent";
import UserGrowthChart from "./userGrowthChart";
import useFetchData from "../../hooks/useFetchData";
import { USER_CHART_HEIGHT } from "./constants";

const UserGrowth = () => {
  const { isLoading, data, error } = useFetchData(
    "http://localhost:5000/userGrowth"
  );

  return (
    <CardLayout>
      <CardHeading className="text-lg">User Growth</CardHeading>
      <CardDescription className="pb-5">
        Showing the growth in the number of total users and active users over
        the past 12 months
      </CardDescription>
      {isLoading ? (
        <SkeletonLoader height={USER_CHART_HEIGHT} />
      ) : error ? (
        <Error message={error} />
      ) : (
        <UserGrowthChart data={data} />
      )}
    </CardLayout>
  );
};

export default UserGrowth;
