import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionOnePage } from '../pages/question-one/question-one'
import { QuestionTwoPage } from '../pages/question-two/question-two'
import { QuestionThreePage } from '../pages/question-three/question-three'
import { QuestionFourPage } from '../pages/question-four/question-four'
import { QuestionFivePage } from '../pages/question-five/question-five'
import { ResultsPage } from '../pages/results/results';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { WeatherProvider } from '../providers/weather/weather';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionOnePage,
    QuestionTwoPage,
    QuestionThreePage,
    QuestionFourPage,
    QuestionFivePage,
    ResultsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionOnePage,
    QuestionTwoPage,
    QuestionThreePage,
    QuestionFourPage,
    QuestionFivePage,
    ResultsPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    
  ]
})
export class AppModule {}
