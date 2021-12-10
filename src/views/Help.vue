<template>
    <div class="our-help">
        <h1 v-bold>{{ PageName }}</h1>
        <p>{{ PageDescribtion }}</p>
        <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <form action="">
                <input :type="fieldType" placeholder="Enter your password" />
                <button @click.prevent="switchfield">Show/Hide</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            PageName: "Help",
            PageDescribtion: "This Is Help Page",
        };
    },
    directives: {
        bold: {
            bind: function (el) {
                el.style.fontWeight = "bold";
            },
        },
    },
    name: "help",
};
</script>
