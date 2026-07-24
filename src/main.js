import { createVaporApp, vaporInteropPlugin } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

createVaporApp(Bar).mount('#bar')
createVaporApp(Foo).use(vaporInteropPlugin).mount('#foo')
