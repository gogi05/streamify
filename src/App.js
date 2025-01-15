import UserGrowth from "./containers/UserGrowth";
import RevenueDistribution from "./containers/RevenueDistribution";
import TopStreamed from "./containers/TopStreamed";
import KeyMetrics from "./containers/KeyMetrics";
import RecentStreams from "./containers/RecentStreams";

function App() {
  return (
    <div className="App">
      <KeyMetrics />
      <UserGrowth />
      <RevenueDistribution />
      <TopStreamed />
      <RecentStreams />
    </div>
  );
}

export default App;
