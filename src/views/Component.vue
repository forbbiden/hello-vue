<template>
  <div>
    <MyTable :title="title" :body="body" />
    <YourTable :title="title" :content="body" style="width: 80%; color: green;" />
  </div>
</template>
<script>
import MyTable from "@/components/MyTable.vue";
import YourTable from "@/components/YourTable.vue";

export default {
  name: "ComponentTest",
  data: function() {
    return {
      title: ["ID", "Name", "Age"],
      body: [{id: "10001", name: "Jhone", age: 11}, {id: "10002", name: "Tom", age: 11}, {id: "10003", name: "Lucy", age: 11}]
    };
  },
  components: {
    MyTable,
    YourTable
  }
};
</script>
