<template>
  <tbody>
    <tr v-for="(row, i) in body" :key="'row-' + i">
      <td v-for="(cell, j) in row" :key="'column-' + i + '-' + j">
        {{ cell }}
      </td>
    </tr>
  </tbody>
</template>
<script>
export default {
  name: "TableBody",
  props: {
    body: Array
  }
}
</script>
