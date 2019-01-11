<template>
<div>
  <header>  
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li v-bind:class="getActiveRoute('/')">
            <router-link to="/" @click.native="setCurrentRoute" class="nav-link">Home</router-link>
          </li>          
          <li v-bind:class="getActiveRoute('/list')">
            <router-link to="/list" @click.native="setCurrentRoute" class="nav-link">Lista</router-link>
          </li>
        </ul>      
      </div>
    </nav>
  </header>
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <router-view class="app_view_default" />
    </div>    
  </main>
  <!--<footer class="footer mt-auto py-3">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>-->
</div>  
</template>
<script>
export default {
    name: 'Menu',
    props: {

    },
    data() {
        return {
          currentRoute: window.location.pathname
        }
    },
    components: {
    },
    methods: {
      setCurrentRoute() {
        this.currentRoute = window.location.pathname;
      },
      getActiveRoute(param){
        return this.currentRoute == param 
          ? 'nav-item active'
          : 'nav-item';
      }
    }
}
</script>
<style>
  .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

main > .container {
  padding: 10px 15px 0;
}

.footer {
  background-color: #f5f5f5;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}

code {
  font-size: 80%;
}
</style>


