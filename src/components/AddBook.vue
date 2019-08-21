<template>
  <ApolloQuery :query="queryAuthors">
    <template slot-scope="{ result: { loading, error, data } }">
      <form @submit.prevent="mutate" class="mt-3">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" v-model="name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Genre" v-model="genre">
        </div>
        <div class="form-group">
          <div v-if="data">
            <select class="form-control" v-model="authorId">
              <option value="">Select Author</option>
              <option v-for="author in data.authors" :value="author.id" :key="author.id">
                {{author.name}}</option>
            </select>
          </div>
          <div v-else>
            <option value="" v-if="loading" disabled>Loading Authors</option>
            <option value="" v-if="error" disabled>No Authors Found</option>
          </div>
        </div>
        <button class="btn btn-success">Add</button>
      </form>
    </template>
  </ApolloQuery>
</template>

<script>
  import {
    AUTHORS,
    ADD_BOOK,
    BOOKS
  } from "../query/queries";

  export default {
    data() {
      return {
        name: '',
        genre: '',
        authorId: '',
        queryAuthors: AUTHORS,
        mutationAddBook: ADD_BOOK,
      }
    },
    methods: {
      mutate() {
        this.$apollo.mutate({
            mutation: ADD_BOOK,
            variables: {
              name: this.name,
              genre: this.genre,
              authorId: this.authorId
            },
            update: (cache, { data: { addBook } }) => {
                const { books } = cache.readQuery({ query: BOOKS });

                cache.writeQuery({
                    query: BOOKS,
                    data: {
                        books: books.concat(addBook)
                    }
                });
            }
          })
          .catch(error => {});
      }
    }
  }

</script>

<style>

</style>
