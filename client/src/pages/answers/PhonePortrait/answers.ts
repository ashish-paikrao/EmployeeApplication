import { Component } from '@angular/core';
import { Screen } from 'app/screen';

@Component({
  selector: 'screen-answers-phoneportrait',
  templateUrl: 'answers.html'
})
export class answers_PhonePortrait extends Screen {
    data: any;

  ngOnInit(): void {
      super.ngOnInit();
  }

  ngOnDestroy(): void {
      super.ngOnDestroy();
      // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
      // Logic to run when the screen's data is updated goes here.
    this.data.showWarning = false;
    this.data.today = new Date().toISOString().slice(0, 10);
    this.data.temperature = this.data.temperature ? Number(this.data.temperature).toFixed(1) : 98.6;
      this.data.topLevelQuestions = [];
      this.data.topLevelWithChilds = {};
      this.data.questions.forEach(question => {
          if (!question.ParentId) {
              this.data.topLevelQuestions.push(question)
          } else {
              this.data.topLevelWithChilds[question.ParentId] = this.data.topLevelWithChilds[question.ParentId] || [];
              this.data.topLevelWithChilds[question.ParentId].push(question)
          }
          if (question.Answer === 'yes') {
              this.data.showWarning = true;
          }
      })
      this.data.showWarning = this.data.showWarning || this.data.temperature >= this.data.temperatureWarning;
      console.log(this.data.topLevelQuestions)
      console.log(this.data.topLevelWithChilds)
      console.log(this.data.questions)
  }
}
