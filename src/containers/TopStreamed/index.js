import {
  CardLayout,
  CardHeading,
  CardDescription,
} from "../../components/Card";
import SkeletonLoader from "../../components/Loader";
import Error from "../../components/ErrorComponent";
import TopStreamedSongsChart from "./topStreamedSongsChart";
import useFetchData from "../../hooks/useFetchData";

const TopStreamedSongs = () => {
  const { isLoading, data, error } = useFetchData("/api/topStreamedSongs");

  return (
    <CardLayout>
      <CardHeading className="text-lg">Top Streamed Songs</CardHeading>
      <CardDescription className="pb-5">
        Chart-Toppers with the Most Streams in the Last 30 Days
      </CardDescription>

      {isLoading ? (
        <SkeletonLoader height={300} />
      ) : error ? (
        <Error message={error} />
      ) : (
        <TopStreamedSongsChart data={data} />
      )}
    </CardLayout>
  );
};

export default TopStreamedSongs;
