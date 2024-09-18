<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class="list-group-item" 
            to="user/1" exact-active-class="active" exact>USER 1</router-link>
            <router-link class="list-group-item" 
            to="user/2" exact-active-class="active" exact>USER 2</router-link>
            <router-link class="list-group-item" 
            to="user/3" exact-active-class="active" exact>USER 3</router-link>
            
        </ul>
    </div>
</template>