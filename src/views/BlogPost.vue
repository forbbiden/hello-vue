<template>
  <div style="text-align: left;">
    <h1>{{ title }}</h1>
    <h4>作者: {{ author }}</h4>
    <h4>日期: {{ date }}</h4>
    <hr>
    <h3>博客正文：</h3>
    <p>{{ content }}</p>
    <hr>
    <h3>评论区:</h3>
    <div v-for="(comment, index) in comments" :key="'comment-' + index">
      <p>{{ comment.content }}</p>
      <h4>作者: {{ comment.author }}，日期: {{ comment.date }}</h4>
      <hr>
    </div>
    <hr>
    <textarea rows="10" cols="100" v-model="myComment" />
    <input type="button" value="评论" @click="postComment" />
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    comments: {
      type: Array,
      required: false,
      default: []
    }
  },
  data: function() {
    return {
      myComment: ""
    };
  },
  methods: {
    postComment() {
      if (this.myComment && this.myComment.trim().length > 0) {
        this.comments.push({
          content: this.myComment,
          date: new Date().toString(),
          author: "whoami"
        });
        this.myComment = ""
      }
    }
  }
};
</script>
