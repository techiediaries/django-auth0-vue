<template>
<div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Django - Auth0 - Vue</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
          <a class="btn btn-primary" href="/">Home</a>
          </li>
          <li class="nav-item">
          <a class="btn btn-primary" href="/product-list">Products</a>
          </li>
          <li class="nav-item">
          <a class="btn btn-primary" href="/product-create">Create</a>
          </li>
          
        </ul>
          <button
            class="btn btn-primary btn-margin"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>

          <button
            class="btn btn-primary btn-margin"
            v-if="authenticated"
            @click="logout()">
              Log Out
          </button>

      </div>
    </nav>

    <div class="container">
      <router-view 
        :auth="auth" 
        :authenticated="authenticated">
      </router-view>
    </div>

</div>  
</template>

<script>
/* eslint-disable */

import AuthService from './auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
body {
  min-height: 75rem;
  padding-top: 4.5rem;
}
.nav-item{
  padding:1px;
  margin-left: 5px;
}
</style>
