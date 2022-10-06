import Vue from 'vue';
import svgIcon from '@/components/SvgIcon';
Vue.component('svg-icon', svgIcon);

const req = require.context('../icons', true, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(name => requireContext(name));
requireAll(req);