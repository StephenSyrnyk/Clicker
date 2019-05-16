import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public admob: AdMobFree, private screenOrientation: ScreenOrientation,
              public storage: Storage) {
    platform.ready().then(() => {
      platform.registerBackButtonAction(() => {
        platform.exitApp();
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();     
    });  
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.showExtraSounds();
    this.showBanner();
  }

  showExtraSounds() {
    this.storage.get("extra").then(data=>
      {
        if(data)
        {
          document.getElementById("horn").style.display = "inline-block";
          this.storage.set('menuheight', '100px');
          document.getElementById("more-sounds").style.display = "none";
        }
        else
        {
          this.storage.set('menuheight', '50px');
        }
      });
  }

  showBanner() {
 
    let bannerConfig: AdMobFreeBannerConfig = {
        
        autoShow: true,
        id: adMobConfig.bannerId
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        // success
        this.admob.banner.show();
        
    }).catch(e => console.log(e));

  } 
  
  
}


