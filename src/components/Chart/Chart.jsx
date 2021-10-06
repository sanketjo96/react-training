import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  const maxValue = Math.max(...dataPoints.map((point) => point.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        ></ChartBar>;
      })}
    </div>
  );
};

export default Chart;
