import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AdMobFree, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'menu-component',
  templateUrl: 'app.menu.html'
})
export class Menu {

    @Input()  // Reference to parent function. Ref provided by parent.
    public childChangeSound: Function;

    
    constructor(public admob: AdMobFree, private alertCtrl: AlertController,
                public storage: Storage) {

    }


    displaySounds() {
        
        let menuheight = "";
        if(document.getElementById("horn").style.display == "inline-block"){
            menuheight = "100px";
        } else {
            menuheight = "50px";
        }

        if(document.getElementById("menu").style.height == menuheight) {
            
            document.getElementById("menu").style.height = "0px";
            document.getElementsByClassName("display-menu")[0].innerHTML = "CHANGE SOUND"
        } else {
        document.getElementById("menu").style.height = menuheight;
        document.getElementsByClassName("display-menu")[0].innerHTML = "&times;    CLOSE"
        }
    }

    closeSounds() {

        let menuheight = "";
        if(document.getElementById("horn").style.display == "inline-block"){
            menuheight = "100px";
        } else {
            menuheight = "50px";
        }

        if(document.getElementById("menu").style.height == menuheight) {
        document.getElementById("menu").style.height = "0px";
        document.getElementsByClassName("display-menu")[0].innerHTML = "CHANGE SOUND"
        }
    }

    changeSound(str:string) {
        this.childChangeSound(str);
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
          title: 'Watch a short video to unlock an extra sound',
          message: 'Hello fellow dog trainers! The primary features of the app will always remain free to use, and without add interruption. If you would like to unlock an extra sound, click yes below to watch a one time video, otherwise continue using this app completely free of charge.',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
              }
            },
            {
              text: 'Yes',
              handler: () => {
                document.getElementById("more-sounds").style.display = "none";
                this.storage.set('extra', true);
                document.getElementById("horn").style.display = "inline-block";
                this.storage.set('menuheight', '100px');
                this.showBanner();
              }
            }
          ]
        });
        alert.present();
    }

    showBanner() {
   
      let rewardConfig: AdMobFreeRewardVideoConfig = {
          
          autoShow: true,
          id: adMobConfig.rewardId
      };
  
      this.admob.rewardVideo.config(rewardConfig);
  
      this.admob.rewardVideo.prepare().then(() => {
          // success
          this.admob.rewardVideo.show();
          
      }).catch(e => console.log(e));
  
    }
    
    
}

