import '../../components/tiles/cc-header';
import '../../components/tiles/cc-tile-instances';
import '../../components/tiles/cc-tile-scalability';
import '../../components/tiles/cc-tile-deployments';
import '../../components/tiles/cc-tile-consumption';
import '../../components/tiles/cc-tile-requests';
import '../../components/tiles/cc-tile-status-code';
import '../../components/maps/cc-map';
import { LitElement, html, css } from 'lit-element';

class PlacedTilesGrid extends LitElement {
  render () {
    return html`
      <section class="grid">
        <cc-header class="head"></cc-header>
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
        height: auto;
        width: auto;
        min-height: 25rem;
        /*
        grid-column: 1 / span 2;
        grid-row: 3 / -1;
        */
      }
    `;
  }
}

window.customElements.define('cc-placed-grid', PlacedTilesGrid);
