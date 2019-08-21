<template>
  <ApolloQuery :query="queryBooks">
    <template slot-scope="{ result: { loading, error, data } }">
      <h3 v-if="loading">Loading</h3>
      <h3 v-if="error">Oops..</h3>
      <div v-if="data">
        <div v-if="data.books.length">
            <h3>Books</h3>
            <div style="cursor: pointer" v-for="book in data.books" class="card d-inline-block mr-3 my-2 p-2 bg-primary text-light" :key="book.id" @click="changeBookId(book.id)">
                {{book.name}}
            </div>
            <book-details :id="bookId"></book-details>
        </div>
        <div v-else>
          <h3>No Books yet!</h3>
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
  import { BOOKS } from "../query/queries";
  import BookDetails from "./BookDetails";

  export default {
    data() {
      return {
        queryBooks: BOOKS,
        bookId: null,
      }
    },
    components: {
        bookDetails: BookDetails
    },
    methods: {
        changeBookId(bookId) {
            this.bookId = bookId;
        }
    }
  }

</script>

<style>

</style>
