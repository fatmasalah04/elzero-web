<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">
            {{ content }}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "date", "content", "author", "category"],
    name: "post",
};
</script>
<style scoped lang="scss">
.post-box {
    padding: 25px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: rgb(245, 219, 219);
        border-radius: 4px;
        padding: 1px 5px;
        font-weight: bold;
        text-align: center;
    }
    .post-title {
        font-weight: bold;
        color: #c1808a;
    }
    .post-date {
        display: block;
        margin: 5px 5px 0 0;
        font-size: 95%;
        font-weight: bold;
    }
    .post-content {
        line-height: 1.9;
    }
    .post-author {
        background-color: antiquewhite;
        padding: 7px 5px 7px;
        border-radius: 8px;
    }
    .post-category {
        background-color: antiquewhite;
        padding: 7px 5px 7px;
        border-radius: 8px;
        margin-left: 60%;
    }
}
</style>
