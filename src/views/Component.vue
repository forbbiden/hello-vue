<template>
  <MyTable :title="title" :body="body" />
</template>
<script>
import MyTable from "@/components/MyTable.vue";

export default {
  name: "ComponentTest",
  data: function() {
    return {
      title: ["ID", "Name", "Age"],
      body: [{id: "10001", name: "Jhone", age: 11}, {id: "10002", name: "Tom", age: 11}, {id: "10003", name: "Lucy", age: 11}]
    };
  },
  components: {
    MyTable
  }
}
</script>
