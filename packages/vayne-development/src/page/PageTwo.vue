<script>
import Title from '@/components/title'

export default {
  name: 'page-two',
  components: {
    'v-title': Title
  },
  data() {
    return {
      title: 'Page Two!'
    }
  },
  render() {
    return (
      <div>
        <v-title name={this.title}/>
      </div>
    )
  }
}
</script>