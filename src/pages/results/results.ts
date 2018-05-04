import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {QuestionOnePage} from '../question-one/question-one';
import {QuestionTwoPage} from '../question-two/question-two';
import { QuestionThreePage } from '../question-three/question-three';
import { QuestionFourPage } from '../question-four/question-four';
import { QuestionFivePage } from '../question-five/question-five';
import { HomePage } from '../home/home';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
 
  Question1 : string;
  Question2 : string;
  Question3 : string;
  Question4 : string;
  Question5 : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private storage2:Storage, private storage3:Storage, private storage4: Storage, private storage5: Storage) {
  }

  ionViewWillEnter(){
    this.storage.get("Question1")
    .then((data) => {
      this.Question1 = data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage2.get("Question2")
    .then((data) => {
      this.Question2 = data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage3.get("Question3")
    .then((data) => {
      this.Question3 = data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage4.get("Question4")
    .then((data) => {
      this.Question4 = data;
    })
    .catch((err) => {
      console.log(err);
    })

    this.storage5.get("Question5")
    .then((data) => {
      this.Question5 = data;
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //function that clears the storage and then goes back to the home page
  playAgain()
  {
    this.navCtrl.push(HomePage);

    localStorage.clear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
