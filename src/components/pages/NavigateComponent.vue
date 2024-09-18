<!-- src/components/NavigateComponent.vue -->
<template>

  <nav>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/" exact-active-class="active" exact>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/facial_scanner" exact-active-class="active">Facial Scan</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/filters" exact-active-class="active">Filters</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " to="/animation" exact-active-class="active">Animation</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " to="/user" exact-active-class="active">User</router-link>
      </li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "NavigateComponent",
};
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;

}

li {
  display: inline;
  margin-right: 1rem;
}

router-link {
  text-decoration: none;
  color: #007bff;
}

router-link:hover {
  color: #0056b3;
}
</style>