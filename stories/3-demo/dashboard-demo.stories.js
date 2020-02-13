import '../../components/demo/dashboard/simple-grid';
import '../../components/demo/dashboard/placed-tiles-grid';
import '../../components/demo/dashboard/named-areas-grid';

export default {
  title: '5. Demo| Re-create dashboard',
};

export const simpleGrid = () => `<cc-dashboard-simple-grid></cc-dashboard-simple-grid>`;
export const dashboardWithGrid = () => `<cc-dashboard-placed-grid></cc-dashboard-placed-grid>`;
export const dashboardWithNamedAreasGrid = () => `<cc-dashboard-named-grid></cc-dashboard-named-grid>`;
