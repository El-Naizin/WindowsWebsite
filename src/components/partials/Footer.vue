<script>
import StartMenuItem from './StartMenu.vue'

export default {
  components: {
    StartMenuItem
  },
  computed: {
    start_menu() {
      return start_menu
    }
  },
  data() {
    return {
      currentTime: '',
      isUnder920px: false,
    };
  },
  mounted() {
    setInterval(this.getCurrentTime, 1000);
    this.checkWindowSize(); // Initial check on component mount
    window.addEventListener('resize', this.checkWindowSize); // Add event listener for window resize
  },
  methods: {
    getCurrentTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      this.$refs.time.textContent = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`
    },
    openDrawer() {
      this.$refs.StartMenuRef.toggleShow();
    },
    customRoute(newRoute) {
      if (newRoute === this.$route.path) {
        this.$router.push('/wallpaper')
      } else {
        this.$router.push(newRoute)
      }
    },
    isTabOpened(routePath) {
      /// Return open-tab if this tab is the current active route, or closed tab if
      /// the tab is not the current active route
      return this.$route.path === routePath;
    },
    checkWindowSize() {
      this.isUnder920px = window.innerWidth < 920;
    },
  }
};
</script>

<template>

  <StartMenuItem ref="StartMenuRef">
  </StartMenuItem>


  <div class="taskbar">
    <div class="start-button unselectable"
         @click="openDrawer"
    ><img src="../../assets/footer/logo.svg"> start
    </div>

    <div class="opened-tabs" v-if="!isUnder920px">
      <div class="taskbar-tab unselectable" :class="{active: isTabOpened('/lore')}" @click="customRoute('/lore')">
        <img src="@/assets/footer/documents.png">
        Home
      </div>

      <div class="taskbar-tab unselectable" :class="{active: isTabOpened('/planning')}" @click="customRoute('/planning')">
        <img src="@/assets/footer/computer.png">
        Planning
      </div>

      <div class="taskbar-tab unselectable" :class="{active: isTabOpened('/blog')}" @click="customRoute('/blog')">
        <img src="@/assets/footer/network.png">
        Blog
      </div>
      <div class="taskbar-tab unselectable" :class="{active: isTabOpened('/cmd')}" @click="customRoute('/cmd')">
        <img src="@/assets/footer/console_prompt-0.png">
        cmd
      </div>

    </div>

    <div ref="time" class="time">{{ currentTime }}</div>
  </div>
</template>

<style scoped>

.taskbar {
  background-color: #245EDC;
  background: linear-gradient(to bottom, #245EDC 0%, #3f8cf3 9%, #245EDC 18%, #245EDC 92%, #1941A5 100%) center/cover no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 32px;
  color: white;
}

.start-button {
  height: 100%;
  float: left;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  font-style: italic;
  background: radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat;
  box-shadow: 0 5px 10px #79ce71 inset, 4px 0 8px #3f8cf3;
  padding: 2px 25px 6px 10px;
  text-shadow: 1px 1px 3px #222;
  border-radius: 0 8px 8px 0;
  margin-right: 16px;
  cursor: pointer;
}

.start-button img {
  height: 20px;
  filter: drop-shadow(1px 1px 1px #222);
  transform: translateY(4px);
}

.opened-tabs {
  width: calc(100% - 225px);
  float: left;
}

.taskbar-tab {
  width: 150px;
  height: 26px;
  margin: 3px 0;
  float: left;
  background-color: #4892F7;
  background: url(../../assets/footer/btn1.png) no-repeat 0 0;
  border: 1px solid #306FD9;
  border-radius: 2px;
  font-family: calibri, monospace;
  font-size: 14px;
  line-height: 14px;
  padding: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  cursor: pointer;
}

.taskbar-tab:hover {
  background: url(../../assets/footer/btn2.png) no-repeat 0 0;
}

.taskbar-tab:active {
  background: url(../../assets/footer/btn3.png) no-repeat 0 0;
}

.taskbar-tab img, .closed-tab img {
  height: 18px;
  float: left;
  transform: translateY(-3px);
  margin-right: 5px;
}

.taskbar-tab.active {
  background: url(../../assets/footer/btn3.png) no-repeat 0 0;
}

.time {
  height: 100%;
  float: right;
  font-family: calibri, monospace;
  font-size: 14px;
  line-height: 14px;
  background: linear-gradient(to bottom, #1290E9 0%, #19B9F3 9%, #1290E9 18%, #1290E9 92%, #1941A5 100%) center/cover no-repeat;
  box-shadow: 0 5px 10px #14A5F0 inset, 0 5px 10px #333333;
  padding: 9px 15px 9px 25px;
  border-left: 1px solid #092E51;
  text-shadow: 1px 1px 2px #222;
  cursor: pointer;
  text-transform: uppercase;
}

.unselectable {
  user-select: none;
}
</style>