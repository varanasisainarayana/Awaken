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
    console.log(corpusatRetirement);
    const valueOfSharesForRetirement = query.get('valueOfShares');
    console.log(valueOfSharesForRetirement);
    const balanceOfCorpusAccumulated = query.get('balanceOfCorpusAccumulated');

    const rc = parseInt(retirementCorpus);
    const second = parseInt(corpusatRetirement) + parseInt(valueOfSharesForRetirement);
    console.log(second);
    const third = parseInt(balanceOfCorpusAccumulated);


  const data = {
  labels: ['Retirement Corpis', 'Existing Investments', 'Corpus Balence'],
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
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked'
    },
    tooltip: {
      mode: 'index',
      intersect: false
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      beginAtZero: true,
      stacked: true
    }
  },
  animation: {
  onComplete: (animation) => {
    var chartInstance = animation.chart,
    ctx = chartInstance.ctx;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.font = 'bold 14px Arial'; // font style and size

    var colors = [ 'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
    ]; // array of colors

    chartInstance.data.datasets.forEach((dataset, i) => {
      var meta = chartInstance.getDatasetMeta(i);
      meta.data.forEach((bar, index) => {
        var data = dataset.data[index];
        ctx.fillStyle = colors[index % colors.length]; // set the fillStyle to the color at the current index
        ctx.fillText(data, bar.x, bar.y - 5);
      });
    });
  }
}
};

return <Bar data={data} options={options} />;
}

export default BarChart;