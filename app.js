const app = Vue.createApp({
  data(){
    return{
      firstname: "",
      lastname:"",
      email:"demo@gmail.com",
      gender:"male",
      picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IqZu-fwQZzdd8p7k_QSVSwHaEo%26pid%3DApi%26h%3D160&f=1&ipt=2b90f1ec97c75bef555a6c27bfcd4a10dfaf5803a71fc30cb1a942943eb906f0&ipo=images"
    }
  },
  methods:{
    async getuser(){
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
     
        this.firstname= results[0].name.first,
        this.lastname=results[0].name.last,
        this.email=results[0].email,
        this.gender=results[0].gender,
        this.picture=results[0].picture.large
    },
  },
});
app.mount("#app");
//adding
