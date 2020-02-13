import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../../styles/skeleton.js';

class CcTileBrand extends LitElement {
  render () {
    return html`
      <div class="tile_title">Brand</div>
      <div class="tile_body">
        <cc-checkbox label="Adidas"></cc-checkbox>
        <cc-checkbox label="Pumas"></cc-checkbox>
        <cc-checkbox label="Reebook"></cc-checkbox>
        <cc-checkbox label="Nike"></cc-checkbox>
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
          overflow: hidden;
          padding: .5rem;
        }
        .tile_title {
          color: #5D5D5D;
          font-size: 1.25rem;
          text-align: center;
        }
        .tile_body {
          display: flex;
          flex-direction: column;
        }
      `,
    ];
  }
}

window.customElements.define('cc-tile-brand', CcTileBrand);
