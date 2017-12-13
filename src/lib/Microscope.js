import { setTimeout } from "timers";
import sample from '../assets/img/sample.jpg';

export class Microscope {
    static setup(video, canvas, allow_cam, callback) {
        let source = null;
        let name = null;
        /* Microscope selection */
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          console.log("Video devices discovered:")
          for(let device of devices)
            if(device.kind == "videoinput") {
              console.log(device.deviceId + "\n" + device.label);
              if(device.label.toLowerCase().indexOf("leica") > -1 || allow_cam) {
                console.log("This is a microscope.");
                name = device.label;
                source = device.deviceId;
              }
            }
          if(source == null) {
            return;
          }
          console.log("Selected device: " + source)
          callback(name);
          /* Acquisition */
          navigator.mediaDevices.getUserMedia({
              video: {
                  deviceId: {
                    exact: source
                  }
              }
            }).then((stream) => {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            let context = canvas.getContext("2d");
            video.addEventListener('play', function() {
              (function render() {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0);
                setTimeout(render, 1000 / 60);
              })();
            })

          }).catch((err) => alert("error: " + err));
      }).catch((err) => alert("error: " + err));
    }
    static emulate(canvas) {
      var img = new Image;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext("2d").drawImage(img, 0, 0);
      };
      img.src = sample;
    }
}