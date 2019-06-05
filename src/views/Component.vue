<template>
  <div>
    <MyTable :title="title" :body="body" />
    <YourTable :title="title" :content="body" style="width: 80%; color: green;" />
    <hr>
    <BlogPost title="如何利用Vue进行高效开发？" author="张三" date="2019-11-11 11:11:11" content="鬼知道" :comments="comments" />
  </div>
</template>
<script>
import MyTable from "@/components/MyTable.vue";
import YourTable from "@/components/YourTable.vue";
import BlogPost from "@/views/BlogPost.vue";

export default {
  name: "ComponentTest",
  data: function() {
    return {
      title: ["ID", "Name", "Age"],
      body: [{id: "10001", name: "Jhone", age: 11}, {id: "10002", name: "Tom", age: 11}, {id: "10003", name: "Lucy", age: 11}],
      comments: [{
        author: "李四",
        date: "2019-11-11 11:11:11",
        content: "瞎发什么东东。。。"
      }, {
        author: "赵四",
        date: "2019-11-11 12:12:12",
        content: "哈哈哈哈。。。"
      }]
    };
  },
  components: {
    MyTable,
    YourTable,
    BlogPost
  }
};
</script>
