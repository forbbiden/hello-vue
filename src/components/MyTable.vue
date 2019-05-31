<template>
  <div>
    <table width="100%">
      <TableHeader :title="title" />
      <TableBody :body="body" />
    </table>
  </div>
</template>
<script>
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
export default {
  name: "MyTable",
  props: {
    title: Array,
    body: Array
  },
  components: {
    TableHeader,
    TableBody
  }
};
</script>
