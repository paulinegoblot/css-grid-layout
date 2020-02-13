import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../../styles/skeleton';
import '../../../components/atoms/cc-chip';

class CcFilters extends LitElement {
  render () {
    return html`
      <div class="filters">
        <button class="clear-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <span>Clear all </spanclass>
        </button>
        <div class="filter-list">
          <div class="filter-group">
            <span class="filter-title skeleton">Price: </span>
            <cc-chip>Min 10€</cc-chip>
            <cc-chip>Max 100€</cc-chip>
          </div>
          <div class="filter-group">
            <span class="filter-title skeleton">Color: </span>
            <cc-chip>Blue</cc-chip>
            <cc-chip>Navy</cc-chip>
            <cc-chip>Azure</cc-chip>
          </div>
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
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .filters {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
      
      .clear-all {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 0;
        background : 0;
        cursor: pointer;
        margin: .5rem 1rem .5rem 0;
        padding: 0;
        height: 1.25rem;
      }
      .clear-all > svg {
        width: 1rem;
      }
      
      .filter-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
      }
      .filter-group {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-right: 1.5rem;
      }
      
      .filter-title {
        margin-right: .25rem
      }
      
      .chip {
        margin: .5rem;
      }
       
      /* SKELETON */
        .skeleton {
          background-color: #bbb;
        }
      `,
    ];
  }
}

window.customElements.define('cc-filters', CcFilters);
