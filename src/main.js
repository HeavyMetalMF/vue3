import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI/index'
import router from "@/router/router";
import directives from "@/directives";
import store from "@/components/store/store";

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);
components.forEach(component => app.component(component.name, component));
directives.forEach(directive => app.directive(directive.name, directive));
app.use(router).use(store).mount('#app');