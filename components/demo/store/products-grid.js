import { LitElement, html, css } from 'lit-element';

class ProductsGrid extends LitElement {
  render () {
    return html`
      <section class="grid">
        <div class="promoted"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    `;
  }

  static get styles () {
    return css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 0.25rem;
        border: 1px solid #bcc2d1;
        box-sizing: border-box;
        min-height: 3rem;
      }

      .grid {
        max-width: 950px;
        width: 100%;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-gap: 1rem;
      }
      
      .promoted {
        grid-column: span 2 / -1;
        grid-row: 1 / span 2
      }
    `;
  }
}

window.customElements.define('cc-products-grid', ProductsGrid);
