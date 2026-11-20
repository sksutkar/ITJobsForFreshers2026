import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

interface QuestionCategory {
  name: string;
  questions: string[];
}

@Component({
  selector: 'app-interview-questions-page',
  templateUrl: './interview-questions-page.component.html'
})
export class InterviewQuestionsPageComponent implements OnInit, OnDestroy {
  readonly categories: QuestionCategory[] = [
    { name: 'Angular', questions: ['What is the difference between a component and a directive?', 'How does dependency injection work in Angular?', 'What are observables and how are they used?', 'What is lazy loading in Angular routing?'] },
    { name: '.NET', questions: ['What is the .NET runtime?', 'How do value types differ from reference types?', 'What is middleware in ASP.NET Core?', 'How does dependency injection work in .NET?'] },
    { name: 'Java', questions: ['What are the main principles of object-oriented programming?', 'How do interfaces differ from abstract classes?', 'What is the Java Collections Framework?', 'How does exception handling work in Java?'] },
    { name: 'SQL', questions: ['What is the difference between WHERE and HAVING?', 'How do INNER JOIN and LEFT JOIN differ?', 'What is a database index?', 'What is a primary key?'] },
    { name: 'C#', questions: ['What is the difference between a class and a struct?', 'What are async and await used for?', 'What is LINQ?', 'How does garbage collection work in .NET?'] },
    { name: 'Web API', questions: ['What makes an API RESTful?', 'Which HTTP methods are commonly used in a REST API?', 'How should API errors be represented?', 'What is the purpose of status codes?'] },
    { name: 'JavaScript', questions: ['How do let, const and var differ?', 'What is a JavaScript promise?', 'What is the event loop?', 'How do map and forEach differ?'] },
    { name: 'HTML & CSS', questions: ['What is semantic HTML?', 'How does CSS Flexbox work?', 'What is the difference between block and inline elements?', 'How do media queries support responsive design?'] }
  ];
  selectedCategory = 'Angular';
  private readonly destroyed = new Subject<void>();

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroyed)).subscribe(params => {
      const requested = params.get('category');
      this.selectedCategory = this.categories.find(category => category.name.toLowerCase() === requested?.toLowerCase())?.name || 'Angular';
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get questions(): string[] {
    return this.categories.find(category => category.name === this.selectedCategory)?.questions || [];
  }
}
