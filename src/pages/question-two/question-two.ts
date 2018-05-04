import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionThreePage } from '../question-three/question-three';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the QuestionTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-two',
  templateUrl: 'question-two.html',
})
export class QuestionTwoPage {

  questionTwo : string;
  constructor(private storage2:Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionTwoPage');
  }

   //function that saves the answer and moves to the next page at the same 
  nextQ2()
  {
    console.log(this.questionTwo);
    this.storage2.set("Question2", this.questionTwo);
    this.navCtrl.push(QuestionThreePage);
    
  }

  //Stores the answer
  ionViewWillEnter()
  {
    this.storage2.get("Question2")
    .then((data) => {
      this.questionTwo = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
