<template>
  <!-- <Popup v-slot="{ enabled, message, isError }">
    <div v-if="enabled" class="my-submit-popup" :class="{ error: isError }">
      <h1>UI Customization</h1>
      {{ message }}
    </div>
  </Popup> -->
  <SimpleNewsletter />
</template>

<script>
import Popup from 'vuepress-plugin-mailchimp/src/components/Popup'
import SimpleNewsletter from 'vuepress-plugin-mailchimp/src/components/SimpleNewsletter'

export default {
  name: 'Newsletter',
  components: { Popup, SimpleNewsletter },
  data() {
    return {
      // enabled: true,
      // message: 'Hey',
      // isError: false,
      // slotProps: {
      //   title: 'Title',
      //   content: 'hello this is a message',
      //   mail: 'mail@example.com',
      //   submitText: 'All done'
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>