import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton';

class CcSelect extends LitElement {
  render () {
    return html`
      <div class="select">
        <select id="select">
          <option>--choose an option--</option>
          <option>higher price</option>
          <option>Most recent</option>
        </select>  
      </div>
    `;
  }

  static get styles () {
    return [
      skeleton,
      css`
      :host {
        box-sizing: border-box;
        display: inline-block;
        margin: 0.2rem;
        vertical-align: top;
      }
      .select {
        position: relative;
        background: transparent;
      }
      .select:hover {
        cursor: pointer;
      }
      
      .select::after {
        content: '';
        position: absolute;
        background: transparent;
        width: 6px;
        height: 6px;
        border-right: 2px solid #777;
        border-bottom: 2px solid #777;
        box-shadow: none;
        top: 7px;
        right: 10px;
        transform: rotate(45deg);
        z-index: 0;
      }
      
      .select > select {
        -webkit-appearance: none;
        appearance: none;
        background: none;
        box-sizing: border-box;
        outline: none;
        cursor: pointer;
        border: 1px solid #bbb;
        border-radius: 0;
        margin: 0;
        padding: .25rem 2rem .25rem .5rem;
        font-size: .75rem;
      }
      
      .select > select:focus {
        box-shadow: #777 0 0 2px 2px;
      }
      `,
    ];
  }
}

window.customElements.define('cc-select', CcSelect);
