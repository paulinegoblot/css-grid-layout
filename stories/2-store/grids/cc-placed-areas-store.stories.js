import '../../../components/store/cc-placed-areas-store';
import '../../../components/store/tiles/cc-header';
import '../../../components/store/tiles/cc-filters';
import '../../../components/store/containers/cc-list-facet';
import '../../../components/store/containers/cc-list-product';

function createStore (width, className) {
  const component = document.createElement('cc-placed-areas-store');
  component.className = className;
  component.style.maxWidth = width + 'px';
  component.style.width = '100%';
  return component;
}

export default {
  title: '2. Store|Placed Areas Grid',
};

/*
export const on2Columns = () => {
  const dashboard = createStore(850, 'col-2');
  dashboard.innerHTML = `
      <cc-dashboard-header class="head"></cc-dashboard-header>
      <cc-tile-instances></cc-tile-instances>
      <cc-tile-scalability></cc-tile-scalability>
      <cc-tile-deployments></cc-tile-deployments>
      <cc-tile-consumption></cc-tile-consumption>
      <cc-tile-status-code></cc-tile-status-code>
      <cc-tile-requests></cc-tile-requests>
      <cc-tile-map class="map"></cc-tile-map>
    `;
  return dashboard;
};
*/

export const on3Columns = () => {
  const store = createStore(950, 'col-3');
  store.innerHTML = `
    <cc-store-header class="head" ></cc-store-header>
    <cc-filters class="filters" ></cc-filters>
    <cc-list-facet class="facet-list" ></cc-list-facet>
    <cc-list-product class="product-list" ></cc-list-product>
    <div class="load-more">Load More</div>
    `;
  return store;
};

/*
export const on4Columns = () => {
  const dashboard = createDashboard(1150, 'col-4');
  dashboard.innerHTML = `
      <cc-dashboard-header class="head"></cc-dashboard-header>
      <cc-tile-instances></cc-tile-instances>
      <cc-tile-scalability></cc-tile-scalability>
      <cc-tile-deployments></cc-tile-deployments>
      <cc-tile-consumption></cc-tile-consumption>
      <cc-tile-status-code></cc-tile-status-code>
      <cc-tile-requests></cc-tile-requests>
      <cc-tile-map class="map"></cc-tile-map>
    `;
  return dashboard;
};
*/
