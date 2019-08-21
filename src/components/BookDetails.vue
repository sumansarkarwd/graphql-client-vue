<template>
  <ApolloQuery :query="queryBook" :variables="{id: bookId}">
    <template slot-scope="{ result: { loading, error, data } }">
      <div class="mt-2" v-if="data">
        <h5>{{data.book.name}}</h5>
        <p class="mb-0">{{data.book.genre}} -<em> by {{data.book.author.name}}</em></p>
        <p class="mb-0">Other Books by Author</p>
        <ul>
          <li v-for="book in data.book.author.books" :key="book.id">{{book.name}}</li>
        </ul>
      </div>
      <div v-else>
          <p>No Book Selected!</p>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
  import {
    BOOK
  } from "../query/queries";

  export default {
    data() {
      return {
        queryBook: BOOK,
      }
    },
    props: ['id'],
    computed: {
        bookId() {
            // console.log(this.$props);
            
            return this.$props.id;
        }
    }
  }

</script>

<style>

</style>
