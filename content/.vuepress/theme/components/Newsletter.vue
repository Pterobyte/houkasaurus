<template>
  <section id="newsletter">
    <div id="mc_embed_signup">
      <form action="https://icloud.us20.list-manage.com/subscribe/post?u=43303dd7d9ba322cb39ac34fe&amp;id=14624bd397" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <h2>Get the News</h2>
        <div id="mc_embed_signup_scroll" class="formgroup">
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
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
			font-family "Open Sans","Helvetica Neue",Arial,Helvetica,Verdana,sans-serif
			font-size 15px
			display block
			padding 0 0.4em
			margin 0 4% 10px 0
			min-height 32px
			width 100%
			min-width 130px
			-webkit-border-radius 3px
			-moz-border-radius 3px
			border-radius 3px
		&.button 
			display block
			width 35%
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
		min-height 34px
	.empty
		flex 0
	input[type=checkbox] 
		-webkit-appearance checkbox
	input[type=radio] 
		-webkit-appearance radio
	.button 
		clear both
		background-color #aaa
		border 0 none
		border-radius 4px
		letter-spacing .03em
		color #FFFFFF
		cursor pointer
		display inline-block
		font-size 15px
		height 32px
		line-height 32px
		margin 0 5px 10px 0
		padding 0
		text-align center
		text-decoration none
		vertical-align top
		white-space nowrap
		width auto
		transition all 0.23s ease-in-out 0s
		&:hover 
			background-color #777
	.small-meta 
		font-size 11px
	.nowrap 
		white-space nowrap
	.clear 
		clear none
		display inline
	label 
		display block
		font-size 16px
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
		float left
		top -1.4em
		padding 0em .5em 0em .5em
		overflow hidden
		clear both
	div 
		&.response 
			margin 1em 0
			padding 1em .5em .5em 0
			font-weight bold
			float left
			top -1.5em
			z-index 1
			width 80%
	#mce-error-response 
		display none
	#mce-success-response 
		color #529214
		display none
</style>