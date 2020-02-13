import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton';

class CcChip extends LitElement {
  render () {
    return html`
    <div class="chip">
      <span class="skeleton">
        <slot></slot>
      </span>
      <button>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
</button>
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
        margin: .25rem;
        vertical-align: top;
      }
      .chip {
        border: 1px solid #777;
        border-radius: 1.5rem;
        color: transparent;
        font-size: 14px;
        font-family: inherit;
        font-weight: bold;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0 0.5rem;
        min-height: 1.5rem;
        overflow: hidden;
        position: relative;
        text-transform: uppercase;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .skeleton {
        background: #bbb;
      }
      
      button {
        background: 0;
        border: 0;
        outline: 0;
        padding: 0;
        margin: 0 0 0 .5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      
      svg {
        width: .75rem;
      }
      `,
    ];
  }
}

window.customElements.define('cc-chip', CcChip);
