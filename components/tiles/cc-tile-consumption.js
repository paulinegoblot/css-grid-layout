import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton.js';

class CcTileConsumption extends LitElement {
  render () {
    return html`
      <div class="tile_title">Credits consumption</div>
      <div class="tile_body">
        <div class="line">
          <span>Yesterday</span>
          <span class="separator"></span>
          <span class="value skeleton">€0.70</span>
        </div>
        <div class="line">
          <span>Last 30 days</span>
          <span class="separator"></span>
          <span class="value skeleton">€14.60</span>
        </div>
      </div>
    `;
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
          display: grid;
          align-content: center;
        }

        .line {
          align-items: center;
          display: flex;
          padding: 0.5rem 0;
          width: 100%;
        }
        .separator {
          flex: 1 1 0;
          border-top: 1px dotted #8C8C8C;
          margin: 0 10px;
        }
        .value {
          font-weight: bold;
        }
        .skeleton {
          background-color: #bbb;
        }
      `,
    ];
  }
}

window.customElements.define('cc-tile-consumption', CcTileConsumption);
