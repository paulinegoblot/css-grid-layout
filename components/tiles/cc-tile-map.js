import { LitElement, html, css } from 'lit-element';
import '../maps/cc-map.js';

class CcTileMap extends LitElement {
  render () {
    return html`
      <cc-map></cc-map>
    `;
  }

  static get styles () {
    return css`
      :host {
        border-radius: 0.25rem;
        border: 1px solid #ccc;
        display: block;
        overflow: hidden;
        position: relative;
        height: 15rem;
        width: 20rem;
      }
      cc-map {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    `;
  }
}

window.customElements.define('cc-tile-map', CcTileMap);
