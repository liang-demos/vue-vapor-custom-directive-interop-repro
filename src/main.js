import { createVaporApp, vaporInteropPlugin } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'


const mode = "<component>" // or "interop"

if (mode === "<component>"){
createVaporApp(Bar).mount('#bar')}else if(mode === "interop"){
  createVaporApp(Foo).use(vaporInteropPlugin).mount('#foo')
}
