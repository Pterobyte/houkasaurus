<template>
    <SimpleNewsletter v-slot="{ slotProps }">
      <div class="newsletter__wrap">
        <!-- <div class="newsletter__title">{{ slotProps.title }}</div>
        <div class="newsletter__content">{{ slotProps.content }}</div> -->
        <input
          v-model="mail"
          class="newsletter__input"
          type="email"
          name="email"
          aria-label="Email"
          placeholder="Email"
          required
          autocapitalize="off"
          autocorrect="off"
          data-cy="email"
        />
        <ul class="newsletter__interests">
          <li class="interest">
            <input checked type="checkbox" value="group[177126][2]" v-model="interests" id="coding"><label  for="coding">Coding</label>
          </li>
          <li class="interest">
            <input checked type="checkbox" value="group[177126][1]" v-model="interests" id="lifestyle"><label for="lifestyle">Lifestyle</label>
          </li>
          <li class="interest">
            <input checked type="checkbox" value="group[177126][4]" v-model="interests" id="startups"><label for="startups">Startups</label>
          </li>
        </ul>
        <button @click.prevent="onSubmit" type="submit" class="newsletter__button" data-cy="submit">
          {{ slotProps.submitText }}
        </button>
      </div>
    </SimpleNewsletter>
</template>

<script>
import SimpleNewsletter from 'vuepress-plugin-mailchimp/src/components/SimpleNewsletter'
import subscribeToMailchimp from 'vuepress-plugin-mailchimp/src/mailchimpSubscribe'
import subscribeEvent from 'vuepress-plugin-mailchimp/src/event'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ig

export default {
  name: 'Newsletter',
  components: { SimpleNewsletter, subscribeToMailchimp },
  data() {
    return {
      interests: [ 'group[177126][1]', 'group[177126][2]', 'group[177126][4]' ],
      mail: ''
    }
  },
  computed: {
    isValidEmail() {
      return this.mail.match(emailRegex)
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (!this.isValidEmail) {
          throw new Error('Invalid email address')
        }
        const interests = Object.assign({}, ...this.interests.map(interest => ({
          [interest]: interest.slice(-2, -1)
        })))
        const res = await subscribeToMailchimp(this.mail, interests)
        subscribeEvent.$emit('submited', res);
      } catch (error) {
        console.error(error)
        subscribeEvent.$emit('submited', { result: 'error' });
      } finally {
        this.mail = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .newsletter__wrap {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  .newsletter__input {
    margin: 0;
  }
  .newsletter__interests {
    display: flex;
    list-style: none;
    padding-left: 0;
    justify-content: center;
    .interest {
      margin-right: 1rem;
    }
  }
  .newsletter__button {
    background-color: var(--primary-color);
  }
}
</style>