import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useFetch } from "../Api/useFetch";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);

const BarChart = () => {
  const [dataUsa] = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  console.log(dataUsa);

  const data = {
    labels: dataUsa?.data.map((x) => x.Year),
    datasets: [
      {
        label: `Population over the years in ${dataUsa?.Nation}`,
        data: dataUsa?.data.map((x) => x.Population),
        backgroundColor: [" #8F00FF", "#8F00FF", " #8F00FF", " #8F00FF"],
        borderColor: [" #8F00FF", "#8F00FF", " #8F00FF", " #8F00FF"],
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="border-2 border-violet-900 p-10 border-opacity-50 rounded-2xl">
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export { BarChart };
