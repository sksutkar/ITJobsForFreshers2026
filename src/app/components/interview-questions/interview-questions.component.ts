import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html'
})
export class InterviewQuestionsComponent {
  readonly categories = [
    { name: 'Angular', icon: 'bi-braces', count: '30+ questions' },
    { name: '.NET', icon: 'bi-code-slash', count: '25+ questions' },
    { name: 'Java', icon: 'bi-cup-hot', count: '30+ questions' },
    { name: 'SQL', icon: 'bi-database', count: '25+ questions' },
    { name: 'C#', icon: 'bi-hash', count: '20+ questions' },
    { name: 'Web API', icon: 'bi-diagram-3', count: '20+ questions' },
    { name: 'JavaScript', icon: 'bi-filetype-js', count: '30+ questions' },
    { name: 'HTML & CSS', icon: 'bi-filetype-html', count: '25+ questions' }
  ];
}
