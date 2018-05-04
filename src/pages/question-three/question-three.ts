import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { QuestionFourPage} from './../question-four/question-four';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the QuestionThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-three',
  templateUrl: 'question-three.html',
})
export class QuestionThreePage {

  questionThree:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage3:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionThreePage');
  }

   //function that saves the answer and moves to the next page at the same 
  nextQ3()
  {
    console.log(this.questionThree);
    this.storage3.set("Question3", this.questionThree);
    this.navCtrl.push(QuestionFourPage);
    
  }

  //Stores the answer
  ionViewWillEnter()
  {
    this.storage3.get("Question3")
    .then((data) => {
      this.questionThree = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
