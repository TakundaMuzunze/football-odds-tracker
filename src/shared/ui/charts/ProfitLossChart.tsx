import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  data: Array<{ date?: string; cumulativePnl: number }>;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

export function ProfitLossChart({ data }: ChartProps) {
  const options = {
    plugins: {
      title: {
        display: false,
        text: 'Area Chart',
      },
    },
    scales: {
      x: {
        ticks: { display: false },
      },
    },
  };

  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [{ fill: true, data: data.map((d) => d.cumulativePnl), borderColor: '#1368c3', backgroundColor: '#1368c3' }],
  };

  return (
    <div className="bg-surface flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg p-8">
      <h2 className="text-primary-text">Profit/Loss (last 30 days)</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

