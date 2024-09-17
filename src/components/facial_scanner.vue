<template>
 
    <h1>Video</h1>
    <div>
      <video ref="video" autoplay muted playsinline></video>
      <canvas ref="overlay"></canvas>
    </div>
    <div v-if="selectedFace">
      <input v-model="inputName" placeholder="Nombre del sujeto" />
      <button @click="sendNames">Guardar Nombre</button>
    </div>

</template>

<script>
import * as faceapi from 'face-api.js';

export default {
  data() {
    return {
      inputName: '',
      selectedFace: null,
      operable: true,
      stream: null
    };
  },
  async mounted() {
    
    // Cargar los modelos desde la carpeta 'public/models'
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

    const video = this.$refs.video;
    video.width = 640;  // Set an appropriate width
    video.height = 480; // Set an appropriate height
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      video.srcObject = this.stream;
      video.onloadeddata = () => this.detectFaces();
    } catch (error) {
      console.error('getUserMedia no es soportado en este navegador.');
      console.log(error);
      this.operable = false;  // Cambiado a this.operable para reflejar el estado en el componente
    }
    

    


  },
  beforeUnmount() { // En Vue 3 se utiliza 'beforeUnmount', en Vue 2 sería 'beforeDestroy'
    this.stopCamera();
  },

  methods: {
    async detectFaces() {
      const video = this.$refs.video;
      const canvas = this.$refs.overlay;

      // Resize the canvas to match the video
      canvas.width = video.width;
      canvas.height = video.height;

      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      // Detect faces at a regular interval
      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

        // Select the first detected face if available
        if (resizedDetections.length > 0) {
          this.selectedFace = resizedDetections[0].detection.box; // Example, select the first detected face
        }
      }, 100);
    },

    stopCamera() {
      console.log(this.stream)
      if (this.stream) {
        const tracks = this.stream.getTracks();
        tracks.forEach(track => track.stop());  // Detener todas las pistas del stream (video y audio si existe)
        this.stream = null;  // Limpiar el stream
        console.log("Cámara apagada");
      }
    },

  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position: relative;
}

video {
  width: 100%;
  height: auto;
}

canvas {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
