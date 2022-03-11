import { Component } from '@angular/core';
import { Screen } from 'app/screen';

@Component({
  selector: 'screen-question-phoneportrait',
  templateUrl: 'question.html'
})
export class question_PhonePortrait extends Screen {
    data: any;
    isValid: boolean;

  ngOnInit(): void {
      super.ngOnInit();
      // Logic to run when the screen loads goes here.
      this.isValid = false;
      this.data.showWarning = false;
      this.data.temperature = this.data.temperature ? Number(this.data.temperature).toFixed(1) : 98.6;
      this.data.today = new Date().toISOString().slice(0, 10);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
      this.data.topLevelQuestions = [];
      this.data.topLevelWithChilds = {};
      this.data.questions.forEach(question => {
          if (!question.ParentId) {
              this.data.topLevelQuestions.push(question)
          } else {
              this.data.topLevelWithChilds[question.ParentId] = this.data.topLevelWithChilds[question.ParentId] || [];
              this.data.topLevelWithChilds[question.ParentId].push(question)
          }
      })
      console.log(this.data.topLevelQuestions)
      console.log(this.data.topLevelWithChilds)
      console.log(this.data.questions)
      this.checkToShowWarning();
  }

  save() {
      this.data.questions = this.data.topLevelQuestions;
      Object.keys(this.data.topLevelWithChilds).forEach((parentId) => {
          this.data.questions = [...this.data.questions, ...this.data.topLevelWithChilds[parentId]];
      })
      this.action('submit');
  }

  changeAnswer() {
      const result = this.data.topLevelQuestions.some(function (item) {
          return item.IsParent ? false : item.answer === undefined;
      });
      this.isValid = !result;
      this.checkToShowWarning();
  }

  checkboxChange(event, item) {
      item.answer = event.value;
      this.checkToShowWarning();
  }

  changeTemperature(direction) {
      if (direction === 'up') {
          const value = Number(this.data.temperature) + .1;
          this.data.temperature = value.toFixed(1);
      } else if (direction === 'down') {
          const value = Number(this.data.temperature) - .1;
          this.data.temperature = value.toFixed(1);
      }
      this.checkToShowWarning();
  }

  private checkToShowWarning() {
      this.data.showWarning = this.data.temperature >= this.data.temperatureWarning;
      if (!this.data.showWarning) {
          this.data.questions.forEach(item => {
              if (item.answer === true) {
                  this.data.showWarning = true;
              }
          })
      }
  }
}
