import { Component } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: 'app.button.html'
})
export class Button {

    public changeSound: Function;
    audio:HTMLAudioElement;
    image:HTMLImageElement;
    ngOnInit() {
        
        this.changeSound = this.callBackFunction.bind(this);
        this.image = <HTMLImageElement>document.getElementById("image");
        this.audio = <HTMLAudioElement>document.getElementById("audio");
        this.audio.src = '../assets/sounds/classic.mp3';
    }

    playAudio() {
        this.audio.play();
    }

    public callBackFunction(str:string) {
        this.audio.src = '../assets/sounds/' + str + ".mp3";
        this.image.src = '../assets/imgs/' + str + ".png";
        document.getElementById("title").innerHTML = str.toLocaleUpperCase();

      }
    
}

