<template>
  <div style="width: 100%;">
    <table :style="style">
        <tr>
          <td v-for="(item, index) in title" :key="'row-head-cell-' + index">
            {{ item }}
          </td>
        </tr>
        <tr v-for="(row, i) in content" :key="'row-' + i">
          <td v-for="(cell, j) in row" :key="'row-' + i + '-cell-' + j">
            {{ cell }}
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "YourTable",
  props: {
    title: {
      type: Array,
      required: true,
      default: [ "Missing", "Title", "Settings" ]
    },
    content: {
      type: Array,
      required: false,
      default: []
    },
    style: Object
  }
}
</script>

<style scoped>
table, td, tr, th {
  border: 5px solid #0094ff;
}
</style>
