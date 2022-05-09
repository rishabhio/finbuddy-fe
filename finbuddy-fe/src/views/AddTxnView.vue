<script>
export default {
  computed: {
    users() {
        console.log(this.$store.getters.users)
        return this.$store.getters.users
      }
  },
  data: function(){
     return {
       amount: "",
       reason: "",
   }
},
    methods: {
      addTxn(e){
        e.preventDefault() // it prevent from page reload
        const data = {
          "reason": this.reason, 
          "amount": this.amount,
          "borrower": this.selected 
        }
        this.$store.dispatch(
          "addTxn",
        {
          payload: data 
        })
    }
    },
  created() {
    console.log('created') ;
    this.$store.dispatch('loadUsers', this.$store.getters);  
  },
}
</script>

<template>
  <main>
    <h3> Add Transaction </h3> 
    <form v-on:submit="addTxn">
      <p>
        Amount: 
        <input type="text" v-model="amount" placeholder="100.00">
        {{amount}}
      </p> 
      <p>
        Borrower: 
        <select v-model="selected">
          <option> choose borrower </option> 
          <option v-for="user in users" :value="user.id">{{ user.email }}</option>

        </select>
        {{selected}}
      </p>
      <p> 
        <textarea v-model="reason" placeholder="Reason for borrow..."></textarea>
      </p> 
      <button type="submit">Add</button>
    </form> 
  </main>
</template>

<style>
  input[type=text] {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  select {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  textarea {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }

  button {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
</style> 
