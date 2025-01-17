import {
  CardLayout,
  CardHeading,
  CardDescription,
} from "../../components/Card";
import SkeletonLoader from "../../components/Loader";

import useFetchData from "../../hooks/useFetchData";
import TopStreamedSongsChart from "./topStreamedSongsChart";

const TopStreamedSongs = () => {
  const { isLoading, data, error } = useFetchData(
    "http://localhost:5000/topStreamedSongs"
  );

  return (
    <CardLayout>
      <CardHeading className="text-lg">Top Streamed Songs</CardHeading>
      <CardDescription>
        Chart-Toppers with the Most Streams in the Last 30 Days
      </CardDescription>
      <SkeletonLoader />
      {isLoading && "Loading Data"}
      {error && "It is an error"}
      <TopStreamedSongsChart data={data} />
    </CardLayout>
  );
};

export default TopStreamedSongs;
