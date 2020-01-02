import { LitElement, html, css } from 'lit-element';
import { skeleton } from '../styles/skeleton';
import '../atoms/cc-button.js';

class CcHeader extends LitElement {
  render () {
    return html`
      <div class="main">
        <div class="flavor-logo skeleton">
          <img class="flavor-logo_img" src="" alt="">
        </div>

        <div class="details">
          <div class="name">
            <span class="skeleton">??????????????????????????</span>
          </div>
          <div class="commits">
          <span class="commit-item" data-type="git">
            <!-- image has a presentation role => alt="" -->
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 256 256"
               preserveAspectRatio="xMidYMid"
               class="commit_img"
               id="git">
              <path
                 d="M251.172245,116.593517 L139.398753,4.82845302 C132.966433,-1.60948434 122.525852,-1.60948434 116.085106,4.82845302 L92.8753863,28.0381721 L122.317995,57.4807809 C129.16041,55.1690784 137.005593,56.7195763 142.460425,62.1744081 C147.940536,67.6629464 149.479799,75.5755422 147.111919,82.4404282 L175.487156,110.815665 C182.352042,108.450594 190.273064,109.98143 195.755985,115.472777 C203.418591,123.132574 203.418591,135.547794 195.755985,143.213209 C188.09057,150.878624 175.67535,150.878624 168.007126,143.213209 C162.243319,137.443783 160.81922,128.977839 163.737639,121.877008 L137.275245,95.4146135 L137.272436,165.052198 C139.140337,165.979126 140.904309,167.212221 142.460425,168.762719 C150.123031,176.422516 150.123031,188.837736 142.460425,196.508768 C134.79501,204.171375 122.374173,204.171375 114.719993,196.508768 C107.057387,188.837736 107.057387,176.422516 114.719993,168.762719 C116.613174,166.872347 118.804095,165.442631 121.141077,164.481996 L121.141077,94.1955625 C118.804095,93.2405457 116.615983,91.8192558 114.719993,89.9148396 C108.914052,84.1173254 107.518042,75.5980132 110.492639,68.4690928 L81.4713611,39.4421974 L4.83125614,116.076685 C-1.60949009,122.52024 -1.60949009,132.960821 4.83125614,139.398759 L116.604747,251.166631 C123.039876,257.604569 133.477648,257.604569 139.921203,251.166631 L251.172245,139.9184 C257.61018,133.477654 257.61018,123.031455 251.172245,116.593517"
                 style="fill:#555555;fill-opacity:1" />
            </svg>
            <!-- Keep this on one line to ease copy/paste -->
            <span class="skeleton">
              ????????
              <span class="commit_rest"></span>
            </span>
          </span>
          </div>
        </div>

        <div class="buttons">
          <cc-button>Restart</cc-button>
          <cc-button> Re-build and restart</cc-button>
          <cc-button> Restart last pushed commit</cc-button>
          <cc-button>Stop App</cc-button>
        </div>
      </div>
      <div class="messages">

          <!-- image has a presentation role => alt="" -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            preserveAspectRatio="xMidYMid"
            class="status-icon"
            id="unknown">
            <circle cx="16" cy="16" r="2.289" fill="#ddd" stroke="#ddd" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="23.711" cy="16" r="2.289" fill="#ddd" stroke="#ddd" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="8.289" cy="16" r="2.289" fill="#ddd" stroke="#ddd" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="skeleton">
            Unknown state, try to restart the application or contact our support if you have additional questions.
          </span>



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
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
        .error {
          padding: 1rem;
          text-align: center;
        }
        .main {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .flavor-logo {
          border-radius: 0.25rem;
          align-self: flex-start;
          height: 3.25rem;
          margin: 1rem;
          overflow: hidden;
          width: 3.25rem;
        }
        .flavor-logo_img {
          display: block;
          height: 100%;
          width: 100%;
        }
        .skeleton .flavor-logo_img {
          opacity: 0;
        }
        .details {
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
          min-height: 3rem;
          margin: 1rem 1rem 1rem 0;
          justify-content: space-between;
        }
        .name {
          font-weight: bold;
          font-size: 1.1rem;
          min-width: 12rem;
        }
        .commits {
          display: flex;
          flex-wrap: wrap;
        }
        .commit-item {
          align-items: flex-start;
          display: flex;
          margin-right: 0.75rem;
          margin-top: 0.5rem;
        }
        .commit-item[data-type="git"] {
          color: #5D5D5D;
        }
        .commit-item[data-type="running"] {
          color: #2faa60;
        }
        .commit-item[data-type="starting"] {
          color: #2b96fd;
        }
        .commit_img {
          height: 1.1rem;
          margin-right: 0.2rem;
          overflow: hidden;
          width: 1.1rem;
        }
        /* We hide the right part of the commit this way so this can be part of a copy/paste */
        .commit_rest {
          font-size: 0;
        }
        .buttons {
          display: flex;
          flex-wrap: wrap;
          padding: 0.5rem 1rem 0.5rem 0;
        }
        cc-button {
          flex: 1 1 auto;
          margin: 0.5rem 0 0.5rem 1rem;
          min-width: 0;
        }
        :host([disable-buttons]) cc-button {
          cursor: not-allowed;
        }
        /* TODO FACTOR */
        @keyframes deploying {
          from {
            opacity: 0.85;
          }
          to {
            opacity: 1;
          }
        }
        .messages {
          background-color: #f1f5ff;
          box-shadow: inset 0 6px 6px -6px #a4b1c9;
          box-sizing: border-box;
          color: #2e2e2e;
          font-size: 0.9rem;
          font-style: italic;
          padding: 0.4rem 1rem;
        }
        /* used on commits and messages */
        .is-deploying {
          animation-direction: alternate;
          animation-duration: 500ms;
          animation-iteration-count: infinite;
          animation-name: deploying;
        }
        .status-icon {
          height: 1.25rem;
          vertical-align: middle;
          min-width: 1.25rem;
        }
        .logs-link {
          color: #2b96fd;
          text-decoration: underline;
        }
        [title] {
          cursor: help;
        }
        /* SKELETON */
        .skeleton {
          background-color: #bbb;
        }
      `,
    ];
  }
}

window.customElements.define('cc-header', CcHeader);
