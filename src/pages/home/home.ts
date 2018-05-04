import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionOnePage } from './../question-one/question-one'
import { WeatherProvider } from '../../providers/weather/weather'
//import { CharacterProvider} from '../../providers/character/character'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  characters:any[] = [];
  weathers:any[]=[];
  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {

  }

  ionViewWillEnter(){

    this.weatherProvider.GetWeatherData().subscribe(data => 
    {
      this.weathers = data;
      console.log(data);
    });

  }


 /* ionViedDidLoad()
  {
    this.charProv.GetCharacterArray().subscribe(data => 
    {
      this.characters = data.Search;
    })
  }*/

  //function that moves to the first page of the quiz 
  beginQuiz()
  {
    this.navCtrl.push(QuestionOnePage);
  }

  

}
