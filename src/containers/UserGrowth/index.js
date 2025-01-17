import {
  CardLayout,
  CardHeading,
  CardDescription,
} from "../../components/Card";
import useFetchData from "../../hooks/useFetchData";
import UserGrowthChart from "./userGrowthChart";

const UserGrowth = () => {
  const { isLoading, data, error } = useFetchData(
    "http://localhost:5000/userGrowth"
  );

  return (
    <CardLayout>
      <CardHeading className="text-lg">User Growth</CardHeading>
      <CardDescription>
        Showing the growth in the number of total users and active users over
        the past 12 months
      </CardDescription>
      {isLoading && "Loading Data"}
      {error && "It is an error"}

      <UserGrowthChart data={data} />
    </CardLayout>
  );
};

export default UserGrowth;
