<!-- src/components/NavigateComponent.vue -->
<template>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/facial_scanner">video face</router-link>
        </li>
        <li>
          <router-link to="/filters" >filters</router-link>
        </li>
        <li>
          <router-link to="/animation" >Animations</router-link>
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
  