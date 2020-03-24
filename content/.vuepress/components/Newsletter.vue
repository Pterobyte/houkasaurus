<template>
  <section id="newsletter">
    <div id="mc_embed_signup">
      <form action="https://icloud.us20.list-manage.com/subscribe/post?u=43303dd7d9ba322cb39ac34fe&amp;id=14624bd397" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <h2>Get the News</h2>
        <div id="mc_embed_signup_scroll" class="formgroup">
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address </label>
            <input type="email" value="" placeholder="internetguy@myspace.com" name="EMAIL" class="required email" id="mce-EMAIL">
          </div>
          <div id="mce-responses" class="clear empty">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div class="empty" style="position: absolute; left: -5000px" aria-hidden="true">
            <input type="text" name="b_43303dd7d9ba322cb39ac34fe_14624bd397" tabindex="-1" value="">
          </div>
          <div class="clear submit">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  computed: {
    connect() {
      const script = document.createElement('script')
      script.setAttribute('id', 'mcjs')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('async', 'async')
      script.setAttribute('src', 'https://chimpstatic.com/mcjs-connected/js/users/43303dd7d9ba322cb39ac34fe/a343be7195f7470201bd15080.js')
      return script
    },
    embed() {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('async', 'async')
      script.setAttribute('src', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js')
      return script
    },
  },

  mounted() {
    const newsletter = document.querySelector('#newsletter')
    newsletter.appendChild(this.connect)
    newsletter.appendChild(this.embed)
  }
}
</script>

<style lang="stylus">
#mc_embed_signup
	max-width 600px
	margin 0 auto
	padding 3rem 2.5rem
	form 
		text-align left
	h2 
		border-bottom none
	input 
		border 1px solid #999
		-webkit-appearance none
		&:focus 
			border-color #333
		&.email
			font-size 1.1em
			display block
			padding 0 0.4em
			margin 0 0 8.5px 0
			height 3rem
			width 100%
			min-width 130px
			border-radius 3px
		&.button 
			display block
			margin 0 0 10px 0
			min-width 90px
	.formgroup
		display flex
		align-items flex-end
		@media (max-width 600px)
			flex-direction column
			align-items flex-start
	.mc-field-group
		flex 3
		margin-right 1rem
	div
		&.mce_inline_error
			position absolute
			background-color var(--bg-color) !important
			color var(--error) !important
			&::before
				content '*'
	.submit
		margin-left 0.5rem
	.empty
		flex 0
	input[type=checkbox] 
		-webkit-appearance checkbox
	input[type=radio] 
		-webkit-appearance radio
	.button 
		font-size 1.1em
		clear both
		background-color #aaa
		border 0 none
		border-radius 4px
		letter-spacing .03em
		color var(--bg-color)
		background var(--btn-color-primary)
		cursor pointer
		height 3rem
		transition: all .1s ease-in-out
		&:hover
			background-position: 91% 100%
			color var(--button-text-color)
	.small-meta 
		font-size 11px
	.nowrap 
		white-space nowrap
	.clear 
		clear none
		display inline
	label 
		display block
		padding-bottom 10px
		font-weight bold
		&.error 
			display block
			float none
			width auto
			margin-left 1.05em
			text-align left
			padding .5em 0
	div#mce-responses
		margin-bottom -20px
		position absolute
	#mce-error-response 
		display none
		color var(--error)
	#mce-success-response 
		display none
		color var(--success)
</style>