const ChartCenterText = ({ totalRevenue }) => (
  <div
    className="z-10"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      padding: "8px",
      borderRadius: "4px",
    }}
  >
    <div className="flex flex-col items-center justify-center">
      <span className="text-sm text-gray-600">Total Revenue</span>
      <span className="text-xl font-medium text-gray-800">
        ${totalRevenue.toLocaleString()}
      </span>
    </div>
  </div>
);

export default ChartCenterText;
