import Vue from 'vue'
import MySvg from '@/components/micon'

// register globally
Vue.component('my-svg', MySvg)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
