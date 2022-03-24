const app = new Vue ({
  el:"#app",
  data:{
    newEmail:[],
  },
  methods: {
    
  },
  mounted() {
    const tempThis=this;
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(email){
        const result= email;
        tempThis.newEmail.push(result.data.response);
      })
    }  ;
  },
})