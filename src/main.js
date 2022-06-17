import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI/index'
import router from "@/router/router";
// createApp(App).use(store).use(router).mount('#app')
// console.log(components)

const app = createApp(App);
components.forEach(component => app.component(component.name, component));
app.use(router).mount('#app');