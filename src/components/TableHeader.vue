<template>
  <thead>
    <th>
      <td v-for="(t, i) in title" :key="'head-' + i">
        {{ t }}
      </td>
    </th>
  </thead>
</template>
<script>
export default {
  "name": "TableHeader",
  props: {
    title: Array
  }
}
</script>
