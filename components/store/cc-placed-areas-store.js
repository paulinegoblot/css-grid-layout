import { LitElement, html, css } from 'lit-element';

class CcPlacedAreasStore extends LitElement {
  render () {
    return html`
      <slot></slot>
    `;
  }

  static get styles () {
    return css`
      :host {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 200px 1fr;
        grid-template-rows: repeat(2, min-content) 1fr min-content;
      }

      ::slotted(*.head) {
        grid-column: 1 / -1;
      }
      
      ::slotted(*.filters) {
        grid-column: 1 / -1;
      }
      
      ::slotted(*.facet-list){
        grid-row: 3 / -1;
      }
    `;
  }
}

window.customElements.define('cc-placed-areas-store', CcPlacedAreasStore);
