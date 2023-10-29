import GlobalComp from './components/GlobalComp.vue'
import Comp from './components/Comp.vue'

import type { Plugin } from 'vue'

const plugin: Plugin = (app) => {
  app.component('GlobalComp', GlobalComp)
}

export { Comp }
export default plugin
