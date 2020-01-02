import { LitElement, html, css } from 'lit-element';
import '../atoms/cc-loader.js';

class CcTileInstances extends LitElement {
  render () {
    return html`
      <div class="tile_title">Instances</div>
      <div class="tile_body">
        <cc-loader></cc-loader>
      </div>
    `;
  }

  static get styles () {
    return css`
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
    `;
  }
}

window.customElements.define('cc-tile-instances', CcTileInstances);
