<script>

export default {
  name: 'v-title',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  render() {
    return (
      <h2 class='v-title'>{this.name}</h2>
    )
  }
}
</script>
<style lang="scss">
  .v-title {
    cursor: pointer;
    display: inline-block;
    color: #666;
    background-color: #c1c1c1;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
  }
</style>