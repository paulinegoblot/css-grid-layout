import { LitElement, html, css } from 'lit-element';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { skeleton } from '../styles/skeleton.js';
import '../atoms/cc-loader.js';

class CcTileInstances extends LitElement {
  constructor () {
    super();
    this._barCount = 6;
    this._data = null;
  }

  render () {
    return html`
      <div class="tile_title">HTTP requests</div>
      <div class="tile_body">
        <div class="chart-container skeleton">
          <canvas id="chart" style="display: block; height: 140px; width: 241px;" width="482" height="280"></canvas>
        </div>
      </div>
    `;
  }

  firstUpdated () {
    this._ctx = this.renderRoot.getElementById('chart');
    this._chart = new Chart(this._ctx, {
      plugins: [ChartDataLabels],
      type: 'bar',
      data: {
        labels: ['??', '??', '??', '??', '??', '??'],
        datasets: [{
          backgroundColor: '#bbb',
          data: [4, 4, 4, 4, 4, 4],
        }],
      },
      options: {
        // We don't need the responsive mode because we already observe resize to compute bar count
        responsive: false,
        maintainAspectRatio: false,
        title: {
          text: '...',
          display: true,
          position: 'bottom',
          padding: 0,
          fontStyle: 'italic',
        },
        legend: {
          display: false,
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            offset: 0,
            align: 'end',
            formatter: (value, context) => '?',
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false,
              },
              ticks: {
                padding: 10,
                fontSize: 12,
              },
            },
          ],
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
              suggestedMax: 6,
            },
          }],
        },
        tooltips: {
          enabled: false,
        },
        animation: {
          duration: 0,
        },
      },
    });

    this._chart.resize();
  }

  static get styles () {
    return [
      skeleton,
      css`
        :host {
          background-color: #fff;
          border-radius: 0.25rem;
          border: 1px solid #bcc2d1;
          box-sizing: border-box;
          display: grid;
          grid-gap: 1rem;
          grid-template-rows: auto 1fr;
          min-height: 9rem;
          overflow: hidden;
          padding: 1rem;
          --bubble-d: 1.5rem;
          --bubble-r: calc(var(--bubble-d) / 2);
        }
        .tile_title {
          color: #5D5D5D;
          font-size: 1.25rem;
          text-align: center;
        }

        .tile_body {
          position: relative;
          min-height: 140px;
          grid-area: 2 / 1 / 2 / 1;
        }

        .chart-container {
          /* We need this because: https://github.com/chartjs/Chart.js/issues/4156 */
          height: 100%;
          min-width: 0;
          position: absolute;
          width: 100%;
        }
      `,
    ];
  }
}

window.customElements.define('cc-tile-requests', CcTileInstances);
