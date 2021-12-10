<template>
    <div class="sidebar">{{ title | uppercase }}</div>
</template>

<script>
export default {
    data: function () {
        return {
            title: "testing",
        };
    },
    name: "sidebar",
    filters: {
        uppercase: function (v) {
            return v.toUpperCase();
        },
    },
};
</script>
