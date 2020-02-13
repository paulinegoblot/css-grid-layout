import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../../styles/skeleton.js';

class CcTileProduct extends LitElement {
  render () {
    return html`
      <img src="" alt="" class="product_image skeleton">
      <p class="product_name skeleton">??????? ??? ???????</p>
      <p class="product_price">
        <span class="currency">€</span>
        <span class="price skeleton">100</span>
      </p>
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
        grid-template-columns: 1fr min-content;
        grid-template-rows: 1fr auto;
        overflow: hidden;
        padding: 1rem;
      }
      .product_image {
        grid-column: 1 / -1;
        width: 100%;
        min-height: 150px;
      }
      .product_name {
        margin: 0;
      }
      
      .product_price {
        display: flex;
        align-items: flex-start;
        margin: 0;
      }
      
      .product_price > .currency {
        margin-right: .25rem;
      }
      
      .skeleton {
        background: #bbb;
      }
    `,
    ];
  }
}

window.customElements.define('cc-tile-product', CcTileProduct);
