import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Icon } from '../icons/Icon';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PlacedBetsProps {
  data: Array<{ date?: string; totalBets: number }>;
}

export function PlacedBetsChart({ data }: PlacedBetsProps) {
  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { display: false },
      },
      y: {
        ticks: { display: false },
      },
    },
  };

  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [{ data: data.map((d) => d.totalBets), borderColor: '#1368c3', backgroundColor: '#1368c3' }],
  };

  return (
    <article className="bg-surface flex h-full w-full flex-col items-start justify-center gap-4 rounded-lg p-8">
      <div className="flex flex-row items-center gap-4">
        <span className="bg-accent rounded-lg p-2">
          <Icon name="trophy" className="size-6 stroke-2 text-white" />
        </span>
        <h2 className="text-primary-text font-semibold">Total Bets (last 30 days)</h2>
      </div>
      <Line data={chartData} options={options} />
    </article>
  );
}

