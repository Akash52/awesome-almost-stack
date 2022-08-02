<template>
  <div>
    <!-- <div v-if="cryptoLoading">Crypto Loading</div>
    <div v-else>Crypto : {{ cryptoData }}</div> -->
    <CryptoListVue
      :cryptoData="cryptoData"
      :tableData="tableData"
      :tableTitle="tableTitle"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CryptoListVue from '../components/CryptoList.vue';
import { CRYPTO_TABLE_DATA, CRYPTO_TABLE_TITLE } from '../constant';

export default {
  name: 'TrendingListings',
  components: {
    CryptoListVue,
  },
  data() {
    return {
      tableData: CRYPTO_TABLE_DATA,
      tableTitle: CRYPTO_TABLE_TITLE,
    };
  },
  methods: {
    ...mapActions(['fetchCryptoData']),
  },
  computed: {
    ...mapGetters(['cryptoData', 'cryptoLoading']),
  },
  beforeMount() {
    if (this.cryptoData?.length === 0) {
      this.fetchCryptoData();
    } else {
      this.crypto = this.cryptoData;
      this.loading = false;
    }
  },
};
</script>

<style></style>
