import '../../components/tiles/cc-tile-status-code';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-status-code>', module)
  .add('Default', () => {
    return `<cc-tile-status-code style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-status-code>`;
  });
