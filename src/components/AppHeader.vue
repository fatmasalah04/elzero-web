<template>
    <div class="header">
        <div class="logo">Elzero vue</div>
        <ul id="nav">
            <router-link to="/" tag="li" exact>
                <a>Home</a>
            </router-link>
            <router-link to="/about" tag="li">
                <a>about</a>
            </router-link>
            <router-link to="/help" tag="li">
                <a>Help</a>
            </router-link>
            <router-link to="/blog" tag="li">
                <a>Blog</a>
            </router-link>
        </ul>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "AppHeader",
};
</script>

<style scoped lang="scss">
.header {
    color: black;
    overflow: hidden;
}
.logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
    color: #fff;
}
ul {
    width: 100%;
    li {
        padding: 15px;
        display: inline-block;
        font-size: 18px;
        a {
            color: rgb(7, 6, 6);
            text-decoration: none;
        }
    }
}
</style>
