import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../../styles/skeleton.js';

class CcTileColor extends LitElement {
  render () {
    return html`
      <div class="tile_title">Color</div>
      <div class="tile_body">
        <div class="color skeleton" title="white">white</div>
        <div class="color skeleton" title="yellow">yellow</div>
        <div class="color skeleton" title="orange">orange</div>
        <div class="color skeleton" title="red">red</div>
        <div class="color skeleton" title="pink">pink</div>
        <div class="color skeleton" title="violet">violet</div>
        <div class="color skeleton" title="blue">blue</div>
        <div class="color skeleton" title="green">green</div>
        <div class="color skeleton" title="beige">beige</div>
        <div class="color skeleton" title="maroon">brown</div>
        <div class="color skeleton" title="grey">grey</div>
        <div class="color skeleton" title="black">black</div>
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
          display: grid;
          grid-gap: 2px;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 3rem);
        }
        .skeleton {
          background-color: #bbb;
        }
      `,
    ];
  }
}

window.customElements.define('cc-tile-color', CcTileColor);
