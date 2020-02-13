import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../../styles/skeleton.js';

class CcTileScalability extends LitElement {
  render () {
    return html`
      <div class="tile_title">Scalability</div>
      <div class="tile_body">
        <div class="label">Size</div>
        <div class="info">
          <div class="size-label skeleton">??</div>
          <div class="separator"></div>
          <div class="size-label skeleton">?</div>
        </div>
        <div class="label">Number</div>
        <div class="info">
          <div class="count-bubble skeleton">0</div>
          <div class="separator"></div>
          <div class="count-bubble skeleton">0</div>
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
          grid-template-columns: auto 1fr;
          grid-row-gap: 1rem;
          grid-column-gap: 2rem;
          align-items: center;
        }

        .info {
          align-items: center;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .separator {
          border-top: 1px dashed #8C8C8C;
          flex: 1 1 0;
          width: 1.5rem;
        }
        .size-label {
          background-color: #EAEAEA;
          border-radius: 0.25rem;
          border: 1px solid #484848;
          box-sizing: border-box;
          display: block;
          font-weight: bold;
          height: 1.65rem;
          line-height: 1.65rem;
          padding: 0 var(--bubble-r);
          text-align: center;
        }
        .count-bubble {
          background-color: #8C8C8C;
          border-radius: 50%;
          /*color: #fff;*/
          display: block;
          font-weight: bold;
          height: var(--bubble-d);
          line-height: var(--bubble-d);
          text-align: center;
          width: var(--bubble-d);
        }
      `,
    ];
  }
}

window.customElements.define('cc-tile-scalability', CcTileScalability);
