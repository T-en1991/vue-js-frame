<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld/index.vue'
import {createNamespacedHelpers} from 'vuex'
import exMixin from '../../mixins/exMixin'
const {mapState, mapMutations}=createNamespacedHelpers('example1')
export default {
  name: 'Home',
  mounted(){
    // console.log(this.$store.state.demo)
    // console.log(this.example1)
    // this.changeExample1('changedExample1');
    // console.log(this.example1)
    // this.$store.commit('setDemo','changedDemo')
    // console.log(this.$store.state.demo)
    console.log(process.env.NODE_ENV)
    console.log(process.env.VUE_APP_EXAMPLE)
  },
  mixins:[exMixin],
  computed:{
    ...mapState(['example1'])
  },
  methods:{
    ...mapMutations(['changeExample1'])
  },
  components: {
    HelloWorld
  }

}
</script>
