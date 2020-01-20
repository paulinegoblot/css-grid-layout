import { configure } from '@storybook/web-components';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

configure(req, module);

// Force full reload instead of HMR for Web Components
// https://github.com/storybookjs/storybook/tree/next/app/web-components
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
