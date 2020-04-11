<template>
  <div>
    <VideoPlayer
      options="{
    autoplay: true,
    controls: true,
    sources: [
    {
    src: 'https://www.youtube.com/watch?v=y5JicO2bKec',
    type: 'video/mp4'
    }
    ]
    }"
    />
  </div>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer";
export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "https://www.youtube.com/watch?v=y5JicO2bKec",
            type: "video/mp4"
          }
        ]
      }
    };
  }
};
