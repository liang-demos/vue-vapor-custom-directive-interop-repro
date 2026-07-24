import {
  createVaporApp,
  vaporInteropPlugin,
  type VaporComponent,
} from 'vue'
import { reports } from './customDirective'
import VaporToVapor from './VaporToVapor.vue'
import VaporToVdom from './VaporToVdom.vue'
import './style.css'

function mountCase(
  id: string,
  component: VaporComponent,
  resultElement: HTMLElement,
): void {
  const app = createVaporApp(component)
  app.use(vaporInteropPlugin)
  app.config.errorHandler = (error, _instance, info) => {
    resultElement.textContent = `${info}: ${String(error)}\n${JSON.stringify(reports.at(-1), null, 2)}`
    console.error(`[${id}]`, error)
  }
  app.mount(`#${id}`)

  if (resultElement.textContent === 'waiting') {
    resultElement.textContent = JSON.stringify(reports.at(-1), null, 2)
  }
}

mountCase(
  'vapor-vapor',
  VaporToVapor,
  document.querySelector('#vapor-vapor-result')!,
)
mountCase(
  'vapor-vdom',
  VaporToVdom,
  document.querySelector('#vapor-vdom-result')!,
)
