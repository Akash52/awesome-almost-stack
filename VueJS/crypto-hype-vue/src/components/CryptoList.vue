<template>
  <div class="container">
    <div v-if="cryptoLoading">Loading...</div>
    <div v-else>
      <div v-if="!cryptoLoading && !!cryptoData.length">
        <div>
          <table
            class="table table-hover mt-3 data-table shadow text-center mb-5"
          >
            <thead class="table-primary">
              <tr>
                <th v-for="(title, i) in tableTitle" :key="i" scope="col">
                  {{ title }}
                </th>
              </tr>
            </thead>
            <tbody
              class="border-0 text-black-50 tbody-border"
              v-for="crypto in cryptoData"
              :key="crypto.id"
            >
              <tr>
                <td v-for="(data, i) in tableData" :key="i">
                  <small>{{ crypto[data] }}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <div class="alert alert-danger" role="alert">No data found.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CryptoList',
  props: ['cryptoData', 'tableData', 'tableTitle'],
  computed: {
    ...mapGetters(['cryptoLoading']),
  },
};
</script>

<style lang="scss">
.data-table {
  border-collapse: collapse;
  border-radius: 10px;
  width: 100%;
}
.tbody-border {
  border-color: #f0f0f0 !important;
  border-style: solid;
  border-width: 1px;
}
</style>
