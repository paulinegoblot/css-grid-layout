import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton.js';

class CcTileDeployments extends LitElement {
  render () {
    return html`
      <div class="tile_title">Last deployments</div>
      <div class="tile_body">
        <div class="state" data-state="???????">
          <span class="skeleton">???????</span>
        </div>
        <div class="date">
          <span class="skeleton">??????????</span>
        </div>
        <a class="link">
          <span class="skeleton">logs</span>
        </a>
        <div class="state" data-state="??????">
          <span class="skeleton">??????</span>
        </div>
        <div class="date">
          <span class="skeleton">???????????</span>
        </div>
        <a class="link">
          <span class="skeleton">logs</span>
        </a>
      </div>
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
          grid-template-rows: auto 1fr;
          min-height: 9rem;
          overflow: hidden;
          padding: 1rem;
          --bubble-d: 1.5rem;
          --bubble-r: calc(var(--bubble-d) / 2);
        }
        .tile_title {
          color: #5D5D5D;
          font-size: 1.25rem;
          text-align: center;
        }
        .tile_body {
          display: grid;
          align-content: center;
          align-items: start;
          grid-gap: 1rem;
          grid-template-columns: auto auto auto;
          justify-content: space-between;
        }

        .state {
          color: #fff;
          font-weight: bold;
        }
        .state[data-state="CANCELLED"] {
          color: #b06d0f;
        }
        .state[data-state="FAIL"] {
          color: #cc0028;
        }
        .state[data-state="OK"] {
          color: #2faa60;
        }
        .link {
          color: #2b96fd;
          text-decoration: underline;
        }
        [title] {
          cursor: help;
        }
        .skeleton {
          background-color: #bbb;
        }
        .link .skeleton {
          background-color: #2b96fd;
        }
      `,
    ];
  }
}

window.customElements.define('cc-tile-deployments', CcTileDeployments);
