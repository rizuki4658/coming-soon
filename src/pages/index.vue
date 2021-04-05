<template>
  <div class="m-main">
    <div class="flex flex-right">
        <div
          v-for="(link, n) in links"
          :key="link.name"
          class="flex-col">
          <transition name="el-fade-in">
            <el-button
              v-if="!loading"
              :key="n"
              type="primary"
              circle
              class="sosial-link"
              @click="goToLink(link.link)">
              <my-svg :icon-class="link.icon"/>
            </el-button>
          </transition>
        </div>
    </div>

    <transition name="el-fade-in">
      <div
        v-if="!loadingMain"
        class="bg-main"
      />
    </transition>

    <div class="m-content">
      <transition name="el-zoom-in-bottom">
        <div
          v-if="!loadingTitle"
          class="title">
          Launching Soon
        </div>
      </transition>
      <transition name="el-fade-in">
        <div
          v-if="!loadingDesc"
          class="description">
          Halo #SobatMina! Ditunggu ya, Web
          <el-button type="text">Mina Indonesia</el-button>
          sedang dalam pengembangan nih.
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      links: [
        {
          icon: 'instagram',
          name: 'instagram',
          link: 'https://www.instagram.com/minaindonesia/?hl=id'
        },
        {
          icon: 'linkedin',
          name: 'linkedin',
          link: 'https://id.linkedin.com/company/minaindonesia'
        },
        {
          icon: 'telegram',
          name: 'telegram',
          link: ''
        }
      ],
      loading: true,
      loadingMain: true,
      loadingTitle: true,
      loadingDesc: true
    }
  },
  mounted () {
    this.loaderContent()
  },
  methods: {
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },
    async loaderContent () {
      this.loadingMain = true
      await this.delay(300)
      this.loadingMain = false

      await this.delay(300)

      this.loading = true
      await this.delay(300)
      this.loading = false

      this.loadingTitle = true
      await this.delay(300)
      this.loadingTitle = false

      await this.delay(300)

      this.loadingDesc = true
      await this.delay(300)
      this.loadingDesc = false
    },
    goToLink (link) {
      if (link) {
        window.open(link)
      }
    }
  }
}
</script>
