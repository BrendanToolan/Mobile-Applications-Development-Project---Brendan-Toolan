import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionTwoPage } from './../question-two/question-two';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the QuestionOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-question-one',
  templateUrl: 'question-one.html',
})
export class QuestionOnePage {
  

 questionOne : string
  constructor(private storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
  }


  //function that saves the answer and moves to the next page at the same 
  nextQ()
  {
      
    console.log(this.questionOne);
    this.storage.set("Question1", this.questionOne);
    this.navCtrl.push(QuestionTwoPage);
    
  }
  
  /*saveQ()
  {
    console.log(this.questionOne);
    this.storage.set("Question1", this.questionOne);
    this.navCtrl.push(QuestionTwoPage);
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionOnePage');
  }

  //Stores the answer
  ionViewWillEnter()
  {
    this.storage.get("Question1")
    .then((data) => {
      this.questionOne = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
