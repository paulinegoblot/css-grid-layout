import '../../components/demo/simple-grid';
import '../../components/demo/placed-tiles-grid';
import '../../components/demo/named-areas-grid';

export default {
  title: '3. Demo| Re-create dashboard',
};

export const simpleGrid = () => `<cc-simple-grid></cc-simple-grid>`;
export const dashboardWithGrid = () => `<cc-placed-grid></cc-placed-grid>`;
export const dashboardWithNamedAreasGrid = () => `<cc-named-grid></cc-named-grid>`;
