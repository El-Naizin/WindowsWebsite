<script>

export default {
  data() {
    return {
      currentTime: ''
    };
  },
  mounted() {
    this.$refs.time.textContent = this.getCurrentTime();
    setInterval(this.getCurrentTime, 60000);
  },
  methods: {
    getCurrentTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes}`;
    }
  }
};

</script>

<template>
  <div class="taskbar">
    <div class="start-button"><img src="assets/logo.svg"> start</div>

    <div class="opened-tabs">
      <div class="open-tab" onclick="window.open('https://faisalakhtar.github.io/')"><img src="assets/documents.png"> Faisal Akhtar</div>
      <div class="open-tab" onclick="window.open('https://github.com/faisalAkhtar/')"><img src="assets/computer.png"> My Computer</div>
      <div class="open-tab" onclick="window.open('https://twitter.com/faisallakhtarr/')"><img src="assets/network.png"> My Network</div>
      <div class="open-tab readme active"><img src="assets/notepad.png"> ReadME.txt</div>
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
}

.start-button {
  height: 100%;
  float: left;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  font-style: italic;
  background: radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat;
  box-shadow: 0px 5px 10px #79ce71 inset, 4px 0 8px #3f8cf3;
  padding: 2px 25px 6px 10px;
  text-shadow: 1px 1px 3px #222;
  border-radius: 0px 8px 8px 0px;
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

.open-tab {
  width: 150px;
  height: 26px;
  margin: 3px 0;
  float: left;
  background-color: #4892F7;
  background: url(btn1.png) no-repeat 0 0;
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

.open-tab:hover {
  background: url(btn2.png) no-repeat 0 0;
}

.open-tab.active {
  background: url(btn3.png) no-repeat 0 0;
}

.open-tab img {
  height: 18px;
  float: left;
  transform: translateY(-3px);
  margin-right: 5px;
}

.time {
  height: 100%;
  float: right;
  font-family: calibri, monospace;
  font-size: 14px;
  line-height: 14px;
  background: linear-gradient(to bottom, #1290E9 0%, #19B9F3 9%, #1290E9 18%, #1290E9 92%, #1941A5 100%) center/cover no-repeat;
  box-shadow: 0px 5px 10px #14A5F0 inset, 0px 5px 10px #333333;
  padding: 9px 15px 9px 25px;
  border-left: 1px solid #092E51;
  text-shadow: 1px 1px 2px #222;
  cursor: pointer;
  text-transform: uppercase;
}

</style>