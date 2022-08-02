<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/" exact-active-class="active">
        Crypto Hype Vue
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/trendings"
              exact-active-class="active"
            >
              Trending Listings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/exchanges">
              Exchnages
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/portfolio"
              exact-active-class="active"
            >
              Portfolio
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style></style>
