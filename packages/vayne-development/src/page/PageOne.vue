<script>
import Title from '@/components/title'

export default {
  name: 'page-one',
  components: {
    'v-title': Title
  },
  data() {
    return {
      title: 'Page One !'
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