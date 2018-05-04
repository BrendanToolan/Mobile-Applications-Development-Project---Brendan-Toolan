import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from './../results/results';
import { Storage} from '@ionic/storage';


/**
 * Generated class for the QuestionFivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-five',
  templateUrl: 'question-five.html',
})
export class QuestionFivePage {

  questionFive : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage5: Storage) {
  }

//function that saves the answer and moves to the next page at the same 
end()
{
  console.log(this.questionFive);
    this.storage5.set("Question5", this.questionFive);
    this.navCtrl.push(ResultsPage)
}

//Stores the answer
ionViewWillEnter()
{
  this.storage5.get("Question5")
  .then((data) => {
    this.questionFive = data;
  })
  .catch((err) => {
    console.log(err);
  })
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionFivePage');
  }

}
