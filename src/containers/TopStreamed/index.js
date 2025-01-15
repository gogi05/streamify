import {
  CardLayout,
  CardHeading,
  CardDescription,
} from "../../components/Card";
import useFetchData from "../../hooks/useFetchData";
import TopStreamedSongsChart from "./topStreamedSongsChart";

const TopStreamedSongs = () => {
  const { isLoading, data, error } = useFetchData(
    "http://localhost:5000/topStreamedSongs"
  );

  return (
    <CardLayout>
      <CardHeading>Top Streamed Songs</CardHeading>
      <CardDescription>Streams over the past 30 days</CardDescription>
      {isLoading && "Loading Data"}
      {error && "It is an error"}
      <TopStreamedSongsChart data={data} />
    </CardLayout>
  );
};

export default TopStreamedSongs;
