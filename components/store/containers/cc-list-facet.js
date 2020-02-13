import { LitElement, html, css } from 'lit-element';
import '../tiles/cc-tile-price';
import '../tiles/cc-tile-color';
import '../tiles/cc-tile-brand';

class CcListfacet extends LitElement {
  render () {
    return html`
      <cc-tile-price></cc-tile-price>
      <cc-tile-color></cc-tile-color>
      <cc-tile-brand></cc-tile-brand>
    `;
  }

  static get styles () {
    return css`
      :host {
        background-color: #fff;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      
      :host * {
      margin-bottom: 1rem;
    `;
  }
}

window.customElements.define('cc-list-facet', CcListfacet);
