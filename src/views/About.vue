<template>
    <div class="about">
        <h1 v-font.bold.orange="60">{{ PageName }}</h1>
        <p>{{ PageDescribtion }}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            PageName: "AboutUs",
            PageDescribtion: "This Is AboutUs Page",
        };
    },

    name: "about",
};
</script>
