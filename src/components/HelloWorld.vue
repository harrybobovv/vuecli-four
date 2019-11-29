<template>
  <div class="hello">
    <button @click="getData">aaaa</button>
    <Button>Default</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getData() {
      console.log(1111);
      console.log(this.axios);
      let id = 1;
      this.axios.get(`StudySpringBoot/demo/selectUsers/${id}`)
      .then((res)=>{
        console.log(res);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
