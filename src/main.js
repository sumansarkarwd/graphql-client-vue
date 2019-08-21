import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo";

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "http://127.0.0.1:4000/graphql"
  })
})

Vue.use(VueApollo)

new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App)
})
