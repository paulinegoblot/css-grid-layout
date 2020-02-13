import '../../components/demo/store/simple-grid';
import '../../components/demo/store/placed-tiles-grid';
import '../../components/demo/store/named-areas-grid';
import '../../components/demo/store/products-grid';

export default {
  title: '5. Demo| Re-create web store',
};

export const simpleGrid = () => `<cc-store-simple-grid></cc-store-simple-grid>`;
export const storeWithGrid = () => `<cc-store-placed-grid></cc-store-placed-grid>`;
export const storeWithNamedAreasGrid = () => `<cc-store-named-grid></cc-store-named-grid>`;
export const productsGrid = () => `<cc-products-grid></cc-products-grid>`;
