<template>
  <section id="disqus_thread" class="disqus"></section>
</template>


<script>
  export default {
    name: 'Disqus',
    props: {
      shortname: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: false
      },
      title: {
       type: String,
       required: false
      },
      remote_auth_s3: {
       type: String,
       required: false
      },
      api_key: {
       type: String,
       required: false
      },
      sso_config: {
        type: Object,
        required: false
      },
      language: {
        type: String,
        required: false
      }
    },
    mounted () {
      if (window) {
        if (window.DISQUS) {
          this.reset(window.DISQUS)
          return
        }
        this.init()
      }
    },
    computed: {
      embed() {
        const script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('async', 'async')
        script.setAttribute('data-timestamp', +new Date())
        script.setAttribute('src', `https://${this.shortname}.disqus.com/embed.js`)
        return script
      },
    },
    watch: {
      identifier() {
        if (window) {
          if (window.DISQUS) {
            this.reset(window.DISQUS)
            return
          }
          this.init()
        }
      }
    },
    methods: {
      reset (dsq) {
        const disqus = document.querySelector('#disqus_thread')
        disqus.innerHTML = ''
        const self = this
        dsq.reset({
          reload: true,
          config: function () {
            self.setBaseConfig(this)
          }
        })
      },
      init () {
        const self = this
        window.disqus_config = function() {
          self.setBaseConfig(this)
        }
        setTimeout(() => {
          const disqus = document.querySelector('#disqus_thread')
          disqus.innerHTML = ''
          disqus.appendChild(this.embed)
        }, 0)
      },
      setBaseConfig (disqusConfig) {
        disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname)
        disqusConfig.page.url = (this.url || this.$el.baseURI)
        if (this.title){
          disqusConfig.page.title = this.title;
        }
        if (this.remote_auth_s3){
          disqusConfig.page.remote_auth_s3 = this.remote_auth_s3;
        }
        if (this.api_key){
          disqusConfig.page.api_key = this.api_key;
        }
        if (this.sso_config){
          disqusConfig.sso = this.sso_config;
        }
        if (this.language){
          disqusConfig.language = this.language;
        }
        disqusConfig.callbacks.onReady = [() => {
          this.$emit('ready')
        }]
        
        disqusConfig.callbacks.onNewComment = [(comment) => {
          this.$emit('new-comment', comment)
        }]
      }
    }
  }
</script>

<style lang="stylus">

.disqus
  padding 2rem 2.5rem

</style>