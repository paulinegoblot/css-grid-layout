import '../../components/tiles/cc-tile-requests';
import { storiesOf } from '@storybook/html';

storiesOf('1. Tiles| <cc-tile-requests>', module)
  .add('Default', () => {
    return `<cc-tile-requests style="display: inline-grid;margin-bottom: 1rem;margin-right: 1rem;width: 275px;"></cc-tile-requests>`;
  });
