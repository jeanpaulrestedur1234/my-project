<template>
    <h1>some user detail</h1>
    <p>user loaded ID: {{ $route.params.id }}</p>
    <router-link  
    class="btn btn-primary"
    :to="{name: 'userEdit', params:{id: $route.params.id },query:{locale:'en',q:100}} "
    > Edit user</router-link>
</template>