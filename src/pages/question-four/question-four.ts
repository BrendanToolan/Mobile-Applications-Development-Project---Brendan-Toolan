import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { QuestionFivePage } from './../question-five/question-five';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the QuestionFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-four',
  templateUrl: 'question-four.html',
})
export class QuestionFourPage {

  questionFour:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage4:Storage) {
  }

  //function that saves the answer and moves to the next page at the same 
  nextQ4()
  {
    console.log(this.questionFour);
    this.storage4.set("Question4", this.questionFour);
    this.navCtrl.push(QuestionFivePage);
    
  }
  
  //Stores the answer
  ionViewWillEnter()
  {
    this.storage4.get("Question4")
    .then((data) => {
      this.questionFour = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionFourPage');
  }

}
