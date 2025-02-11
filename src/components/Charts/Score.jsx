import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import MoreInfo from '../icons/more-info.svg';

ChartJS.register(ArcElement, Tooltip);

const Score = () => {
  const data = {
    labels: ['Authentic(0-5%)', 'Low Suspicion(0-5%)', 'Deepfake(0-5%)', 'Authentic(0-5%)', 'Low Suspicion(0-5%)', 'Deepfake(0-5%)'],
    datasets: [
      {
        data: [0, 20, 0, 20, 10, 92],
        backgroundColor: [
          '#165BAA',
          '#F765A3',
          '#FFE194',
          '#A155B9',
          '#5ED1A7',
          '#6381C4'
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <article className=" bg-white rounded-[16px] border border-[#ECECEC] shadow-sm">
      <header className="flex items-center justify-between px-4 pt-4">
        <h1 className="text-[12px] font-semibold text-[#828282] font-roboto">SCORE</h1>
        <img src={MoreInfo} alt="More Info" className="w-4 h-4 cursor-pointer" />
      </header>

      <section className="text-[34px] font-medium text-[#0B1354] font-roboto px-4">
        92%
      </section>

      <hr className="w-full border-b border-[#ECECEC] mb-2" />

      <section className="flex flex-col xl:flex-row items-center xl:items-end gap-4 px-4 pb-4">
        <figure className="relative w-32 h-32 mx-auto md:mx-0">
          <Pie data={data} options={options} />
        </figure>

        <ul className="w-full space-y-1">
          {data.labels.map((label, index) => (
            <li key={`${label}-${index}`} className="flex items-center justify-start">
              <div
                className="mr-2 w-[14.75px] h-[5.62px]"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></div>
              <span className="text-[10px] text-[#828282] font-inter">{label}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Score;