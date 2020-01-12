import '../../components/atoms/cc-button';
import { storiesOf } from '@storybook/html';

storiesOf('0. Atoms| <cc-button>', module)
  .add('Default', () => {
    return `<cc-button>Restart</cc-button>`;
  });
