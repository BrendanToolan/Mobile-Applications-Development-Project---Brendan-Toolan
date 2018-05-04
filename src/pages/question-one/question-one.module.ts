import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionOnePage } from './question-one';

@NgModule({
  declarations: [
    QuestionOnePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionOnePage),
  ],
})
export class QuestionOnePageModule {}
