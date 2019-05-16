import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Button } from './app.button';
import { Menu } from './app.menu';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdMobFree } from '@ionic-native/admob-free';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Button,
    Menu
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
 })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    ScreenOrientation,
    AlertController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
