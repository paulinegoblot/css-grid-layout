import { LitElement, html, css } from 'lit-element';
import '../tiles/cc-tile-product';

class CcListProduct extends LitElement {
  render () {
    return html`
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
      <cc-tile-product></cc-tile-product>
    `;
  }

  static get styles () {
    return css`
      :host {
        background-color: #fff;
        box-sizing: border-box;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
        overflow: hidden;
      }
      .tile_title {
        color: #5D5D5D;
        font-size: 1.25rem;
        text-align: center;
      }
    `;
  }
}

window.customElements.define('cc-list-product', CcListProduct);
