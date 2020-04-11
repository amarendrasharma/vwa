<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "../../node_modules/video.js/dist/video-js.min.css";
export default {
  name: "VideoPlayer",
  props: {},
  data() {
    return {
      options: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src:
              "https://www.youtube.com/watch?v=ryJgDL9jzKk&list=RDryJgDL9jzKk&start_radio=1",
            type: "video/mp4"
          }
        ]
      },
      player: null
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style>
</style>