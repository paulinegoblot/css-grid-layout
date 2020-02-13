import { LitElement, html, css } from 'lit-element';
import Chart from 'chart.js';
import { skeleton } from '../../styles/skeleton.js';
import '../../atoms/cc-loader.js';

class CcTileInstances extends LitElement {
  constructor () {
    super();
    this._barCount = 6;
    this._data = null;
  }

  render () {
    return html`
      <div class="tile_title">HTTP response codes</div>
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
      type: 'doughnut',
      data: {
        labels: ['???'],
        datasets: [{
          data: [1],
          backgroundColor: ['#bbb'],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {},
        legend: {
          position: 'right',
          labels: {
            fontFamily: 'monospace',
            usePointStyle: true,
          },
        },
        plugins: {
          datalabels: {
            display: false,
          },
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

window.customElements.define('cc-tile-status-code', CcTileInstances);
