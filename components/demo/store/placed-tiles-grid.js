import { LitElement, html, css } from 'lit-element';

class PlacedTilesGrid extends LitElement {
  render () {
    return html`
      <section class="grid">
        <div class="head">Header</div>
        <div class="filters">Filters</div>
        <div class="facet-list">
          <div>Price</div>
          <div>Color</div>
          <div>Brand</div>
          <div>Reviews</div>  
        </div>
        <div class="product-list">Products</div>
        <div class="load-more">Load More</div>
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
      
      .facet-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: .5rem;
        text-align: center;
      }
      
      .facet-list > div {
        margin: .25rem 0;
      }
      
      .product-list {
        height: 20rem;
      }

      .grid {
        max-width: 950px;
        width: 100%;
      }

      .grid {
        display: grid;
        grid-gap: 1rem;
        /*
        grid-template-columns: 200px 1fr;
        grid-template-rows: repeat(2, min-content) 1fr min-content;
        */
      }

      .head {
        /*
        grid-column: 1 / -1;
        */
      }
      
      .filters {
        /*
        grid-column: 1 / -1;
        */
      }
      
      .facet-list{
        /*
        grid-row: 3 / -1;
        */
      }
    `;
  }
}

window.customElements.define('cc-store-placed-grid', PlacedTilesGrid);
