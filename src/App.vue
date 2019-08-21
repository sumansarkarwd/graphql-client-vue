<template>
  <div id="app" class="container">
    <books></books>
    <add-book></add-book>
  </div>
</template>

<script>
import Books from "./components/Books"
import AddBook from "./components/AddBook"

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    books: Books,
    addBook: AddBook,
  }
}
</script>

<style>
</style>
