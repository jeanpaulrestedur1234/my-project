from flask import Flask, Response
import cv2

app = Flask(__name__)

def gen_frames():
    # Iniciar la captura de video desde la cámara (0 para la cámara por defecto)
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        raise RuntimeError("Error al abrir la cámara")
    
    while True:
        # Capturar frame a frame
        success, frame = cap.read()
        if not success:
            break
        else:
            # Codificar el frame como JPEG
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            # Usar el formato de flujo de video MJPEG
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    
    cap.release()

@app.route('/video_feed')
def video_feed():
    # La ruta que servirá el video en formato de flujo MJPEG
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
