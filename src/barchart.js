import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { useLocation } from 'react-router-dom';

Chart.register(LinearScale, CategoryScale, BarElement);

function BarChart() {

    const componentRef = React.useRef();
  const location = useLocation();

    const query = new URLSearchParams(location.search);
    const retirementCorpus = query.get('retirementCorpus');
    const corpusatRetirement = query.get('corpusatRetirement');
    const valueOfSharesForRetirement = query.get('valueOfSharesForRetirement');
    const balanceOfCorpusAccumulated = query.get('balanceOfCorpusAccumulated');

    const rc = Number(retirementCorpus);
    const second = Number(corpusatRetirement) + Number(valueOfSharesForRetirement);
    const third = Number(balanceOfCorpusAccumulated);


  const data = {
    labels: ['Red', 'Blue', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [rc, second, third],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;