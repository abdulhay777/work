const App = {}

const app = Vue.createApp(App)

app.component('content', content)
app.component('modal', modal)

app.mount('#app')