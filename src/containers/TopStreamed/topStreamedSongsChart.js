import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopStreamedSongsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
      >
        <XAxis type="number" />
        <YAxis
          dataKey="songName"
          type="category"
          tick={{ fontSize: 12, fontWeight: "bold" }}
        />
        <Tooltip
          formatter={(value, name, props) => {
            const { payload } = props;
            return [
              `Stream Count: ${value.toLocaleString()}`,
              `${payload.songName} - ${payload.artist}`,
            ];
          }}
        />
        <Bar dataKey="streamCount" fill="#8884d8" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongsChart;
