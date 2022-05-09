<script>
export default {
  computed: {
    txns() {
         return this.$store.getters.txns
      }
  },
  methods: {
        payBack(id){
        this.$store.dispatch("markComplete", id )
    }
  },
  created() {
    console.log('created') ;
    this.$store.dispatch('loadTxns', this.$store.getters);  
  },
}
</script>

<template>
  <main>
    <h3> Transactions </h3> 
    <div v-for="item in txns">
        <div class="txn">
            <p> <b style="color: red;"> Borrower </b> : {{ item.borrower }} </p> 
            <p> <b> Amount </b>: {{ item.amount }} </p> 
            <p> <i> Reason </i> : {{ item.reason }} </p> 
            <div v-if="item.paid_back !== true">
              <button @click="payBack(item.id)"> Mark Complete </button>
            </div>
            <div v-if="item.paid_back === true">
              <p> <b style="color: green;"> Completed! </b></p> 
            </div>

            <hr> 
        </div>
    </div>
  </main>
</template>
