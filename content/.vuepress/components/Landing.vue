<template>
  <div>
    <div class="profile-img" :style="profileLoadedStyles">
      <transition name="fade">
        <img v-show="profileImgLoaded" @load="onLoadProfileImg" src="/jt-face-right.webp" height="100%" alt=""/>
      </transition>
      <Laser class="laser" :style="profileLoadedLaserStyles" />
      <!-- <a v-if="!isMobileWidth" class="twitter-timeline" href="https://twitter.com/HoukasaurusRex" data-tweet-limit="1"></a> -->
    </div>
    <main class="landing">
      <h1 class="typewriter">{{title}}</h1>
      <h2 class="description">{{description}}</h2>
      <a href="https://spotify-github-profile.vercel.app/api/view?uid=spacemanjohn&redirect=true" target="_blank" rel="noopener">
        <transition name="fade">
          <img v-show="spotifyImgLoaded" @load="onLoadSpotifyImg" class="spotify-card" :src="spotifyCard" :height="spotifyCardHeight" alt="" :style="spotifyCardDynamicStyles">
        </transition>
      </a>
    </main>
    <RightArrow class="arrow"/>
  </div>
</template>

<script>
import RightArrow from './RightArrow'
import Laser from './Laser'

export default {
  name: 'Landing',
  components: { RightArrow, Laser },
  data() {
    return {
      profileImgLoaded: false,
      spotifyImgLoaded: false,
      profileLoadedLaserStyles: {
        width: 0
      }
    }
  },
  computed: {
    title() {
      return this.$page.frontmatter.heroText || this.$page.frontmatter.title || this.$site.title
    },
    description() {
      return this.$site.description
    },
    isMobileWidth() {
      return typeof window !== 'undefined' && window.innerWidth <= 425
    },
    spotifyCardTheme() {
      return this.isMobileWidth ? 'natemoo-re' : 'default'
    },
    spotifyCard() {
      return `https://spotify-github-profile.vercel.app/api/view?uid=spacemanjohn&cover_image=true&theme=${this.spotifyCardTheme}`
    },
    spotifyCardHeight() {
      return this.spotifyCardTheme === 'natemoo-re' ? 80 : 300
    },
    spotifyCardDynamicStyles() {
      return this.spotifyCardTheme === 'natemoo-re' ? {} : {
        'box-shadow': '1px 1px 1px #222',
        'border-radius': '6px',
        'background-color': '#000',
      }
    },
    profileLoadedStyles() {
      return this.profileImgLoaded ? {
        width: 'calc(100vw + 100px)',
        transform: 'translateX(0)'
      } : {}
    },
    profileLoadedImgStyles() {
      return this.profileImgLoaded ? {
        width: 'calc(100vw + 180px)'
      } : {}
    }
  },
  methods: {
    onLoadProfileImg() {
      this.profileImgLoaded = true
      setTimeout(() => {
        this.profileLoadedLaserStyles.width = 'calc(100vw + 430px)'
      }, 500)
    },
    onLoadSpotifyImg() {
      this.spotifyImgLoaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
.landing {
  margin: 0 auto;
  text-align: center;
}

.profile-img {
  height: 50vh;
  width: calc(100vw + 350px);
  position: absolute;
  left: -100px;
  transform: translateX(-250px);
  bottom: 0;
  margin-bottom: 72px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  img {
    filter: drop-shadow(2px 5px 5px #222);
  }
}

.laser {
  overflow: hidden;
  margin-left: -80px;
  margin-top: -100px;
  transition: all 0.3s ease-in;
}

.arrow {
  position: absolute;
  top: 40%;
  right: 20vw;
  background-color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #222;
  transition: all 0.15s ease;
  &:hover {
    box-shadow: 1.5px 1.5px 3px #222;
    transform: scale(1.01);
  }
}

.description {
  font-size: 1rem;
}

.spotify-card {
  max-height: 320px;
}

.twitter-timeline {
  max-width: 300px;
}
</style>