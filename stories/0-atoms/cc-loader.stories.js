import '../../components/atoms/cc-loader.js';

export default {
  title: '0. Atoms|<cc-loader>',
  component: 'cc-loader',
};

export const defaultStory = () => ` <div>
      <cc-loader style="display: inline-flex; margin-right: 1rem;"></cc-loader>
      <!--
      <cc-loader style="display: inline-flex; margin-right: 1rem;--cc-loader-color: green;" ></cc-loader>
      <cc-loader style="display: inline-flex; margin-right: 1rem;--cc-loader-color: red;" ></cc-loader>
      -->
    </div>`;
