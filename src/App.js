import React, { Suspense } from "react";
import LayoutSkeletonLoader from "./rootLoader";

const Header = React.lazy(() => import("./containers/Header"));
const UserGrowth = React.lazy(() => import("./containers/UserGrowth"));
const RevenueDistribution = React.lazy(() =>
  import("./containers/RevenueDistribution")
);
const TopStreamed = React.lazy(() => import("./containers/TopStreamed"));
const KeyMetrics = React.lazy(() => import("./containers/KeyMetrics"));
const RecentStreams = React.lazy(() => import("./containers/RecentStreams"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LayoutSkeletonLoader />}>
        <Header />
        <div className="mx-auto bg-slate-100 flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <KeyMetrics />
          <UserGrowth />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            <div className="md:col-span-3">
              <TopStreamed />
            </div>
            <div className="md:col-span-2">
              <RevenueDistribution />
            </div>
          </div>
          <RecentStreams />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
