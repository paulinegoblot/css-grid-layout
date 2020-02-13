import '../../dashboard/tiles/cc-header';
import '../../dashboard/tiles/cc-tile-instances';
import '../../dashboard/tiles/cc-tile-scalability';
import '../../dashboard/tiles/cc-tile-deployments';
import '../../dashboard/tiles/cc-tile-consumption';
import '../../dashboard/tiles/cc-tile-requests';
import '../../dashboard/tiles/cc-tile-status-code';
import '../../../components/maps/cc-map';
import { LitElement, html, css } from 'lit-element';

class PlacedTilesGrid extends LitElement {
  render () {
    return html`
      <section class="grid">
        <cc-dashboard-header class="head"></cc-dashboard-header>
        <cc-tile-instances></cc-tile-instances>
        <cc-tile-scalability></cc-tile-scalability>
        <cc-tile-deployments></cc-tile-deployments>
        <cc-tile-consumption></cc-tile-consumption>
        <cc-tile-status-code></cc-tile-status-code>
        <cc-tile-requests></cc-tile-requests>
        <cc-tile-map class="map"></cc-tile-map>
      </section>
    `;
  }

  static get styles () {
    return css`
      .grid {
          max-width: 950px;
          width: 100%;
      }
      .map {
        height: auto;
        width: auto;
        min-height: 25rem;
      }

      .grid {
        display: grid;
        grid-gap: 1rem;
        /*
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, min-content);
        */
      }

      .head {
        /*
        grid-column: 1 / -1;
        */
      }

      .map {
        /*
        grid-column: 1 / span 2;
        grid-row: 3 / -1;
        */
      }
    `;
  }
}

window.customElements.define('cc-dashboard-placed-grid', PlacedTilesGrid);
