import '../../../components/dashboard/cc-named-areas-dashboard';
import '../../../components/dashboard/tiles/cc-header';
import '../../../components/dashboard/tiles/cc-tile-instances';
import '../../../components/dashboard/tiles/cc-tile-scalability';
import '../../../components/dashboard/tiles/cc-tile-deployments';
import '../../../components/dashboard/tiles/cc-tile-consumption';
import '../../../components/dashboard/tiles/cc-tile-requests';
import '../../../components/dashboard/tiles/cc-tile-status-code';
import '../../../components/maps/cc-map';

function createDashboard (width, className) {
  const component = document.createElement('cc-named-areas-dashboard');
  component.className = className;
  component.style.maxWidth = width + 'px';
  component.style.width = '100%';
  return component;
}

export default {
  title: '1. Dashboard| Named Areas Grid',
};

export const on2Columns = () => {
  const dashboard = createDashboard(850, 'col-2');
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

export const on3Columns = () => {
  const dashboard = createDashboard(950, 'col-3');
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
