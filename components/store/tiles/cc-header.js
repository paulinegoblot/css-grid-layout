import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../../styles/skeleton';
import '../../atoms/cc-select';

class CcHeader extends LitElement {
  render () {
    return html`
      <div class="head">
        <div class="department">
          <span class="title skeleton">??????????????????????????????</span>
          <span class="stats skeleton">(??????)</span>
        </div>
        <div class="sort-by">
          <span>Order by : </span>
          <cc-select>??????????</cc-select>
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
        .head {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
        }
        .sort-by {
          display: flex;
          align-items: center;
          justify-self: flex-end;
          margin: 0 0 0 auto;
        }
        
        .sort-by > span {
          font-size: .85rem;
        }
        
        /* SKELETON */
        .skeleton {
          background-color: #bbb;
        }
      `,
    ];
  }
}

window.customElements.define('cc-store-header', CcHeader);
