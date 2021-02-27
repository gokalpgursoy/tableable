<template>
  <div id="app">
    <div class="table-wrapper">
      <BaseTable :columns="columns" :rows="rows" />
    </div>
  </div>
</template>

<script>
import { columns, rows } from './data';
import BaseTable from './components/BaseTable';

export default {
  name: 'App',
  components: {
    BaseTable,
  },
  data() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style scoped>
.table-wrapper {
  padding: 8px 16px;
  overflow-x: auto;
}
</style>
