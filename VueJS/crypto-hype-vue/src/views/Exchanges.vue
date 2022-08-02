<template>
  <CryptoListVue
    :cryptoData="exchangeData"
    :tableData="tableData"
    :tableTitle="tableTitle"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CryptoListVue from '../components/CryptoList.vue';
import { EXCHANGE_TABLE_DATA, EXCHANGE_TABLE_TITLE } from '../constant';

export default {
  name: 'Exchanges',
  components: {
    CryptoListVue,
  },
  data() {
    return {
      tableData: EXCHANGE_TABLE_DATA,
      tableTitle: EXCHANGE_TABLE_TITLE,
    };
  },
  methods: {
    ...mapActions(['fetchExchangeData']),
  },
  computed: {
    ...mapGetters(['exchangeData']),
  },
  beforeMount() {
    if (this.exchangeData?.length === 0) {
      this.fetchExchangeData();
    }
  },
};
</script>

<style></style>
