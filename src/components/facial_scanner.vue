<template>
  <div id="app">
    <h1>Video</h1>
    <div>
      <video ref="video" autoplay muted playsinline></video>
      <canvas ref="overlay"></canvas>
    </div>
    <div v-if="selectedFace">
      <input v-model="inputName" placeholder="Nombre del sujeto" />
      <button @click="sendNames">Guardar Nombre</button>
    </div>
  </div>
</template>

<script>
import * as faceapi from 'face-api.js';

export default {
  name: 'FacialScan', // Asegúrate de que el nombre del componente esté aquí
  data() {
    return {
      videoSrc: 'http://localhost:5000/video_feed',  // Ruta del stream de video
      inputName: '',
      selectedFace: null
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

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Lógica para usar getUserMedia
      video.srcObject = await navigator.mediaDevices.getUserMedia({ video: {} });
      video.onloadeddata = () => this.detectFaces();
    } else {
        console.error('getUserMedia no es soportado en este navegador.');
        
    }

    
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
    async sendNames() {
      if (this.selectedFace && this.inputName) {
        const faceData = {
          name: this.inputName,
          coordinates: this.selectedFace // Example, you might want to format these coordinates
        };

        try {
          const response = await fetch('http://localhost:5000/save_face_data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(faceData)
          });

          if (!response.ok) {
            throw new Error('Error al enviar los datos del rostro');
          }

          const result = await response.json();
          console.log(result.message);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
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
