<template>
    <div id="app">
        <app-header />
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
    name: "App",
    components: {
        AppHeader,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 6px;
    background-color: rgb(22, 21, 21);
    text-align: center;
    a {
        font-weight: bold;
        color: #ffffff;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
