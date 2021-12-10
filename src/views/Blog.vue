<template>
    <div class="about">
        <h1>{{ PageName }}</h1>
        <p>{{ PageDescribtion }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <blog-posts
                            v-for="post in posts"
                            :key="post.id"
                            :views="post.views"
                            :title="post.title"
                            :date="post.date"
                            :content="post.content"
                            :author="post.author"
                            :category="post.category"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <blog-side-bar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BlogPosts from "@/components/Blog/BlogPosts";
import BlogSideBar from "@/components/Blog/BlogSideBar";
import JsonPosts from "../json/MOCK_DATA.json";

export default {
    data: function () {
        return {
            PageName: "Posts",
            PageDescribtion: "This Is Posts Page",
            posts: JsonPosts,
        };
    },
    name: "blog",
    components: {
        BlogPosts,
        BlogSideBar,
    },
};
</script>
