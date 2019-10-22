<script>
export default {
  data() {
    return {
      title: '主页'
    }
  },
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <div>
          <router-link to="/page-one">Go to Page One</router-link>
          <br/>
          <router-link to="/page-two">Go to Page Two</router-link>
        </div>
        <router-view></router-view>
      </div>
    )
  }
}
</script>
