import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  query = '';
  location = '';
  readonly popularSearches = ['.NET', 'Angular', 'Java', 'React', 'Python', 'Pune', 'Mumbai', 'Hyderabad'];

  constructor(private readonly router: Router) { }

  search(value?: string): void {
    this.router.navigate(['/jobs'], {
      queryParams: { q: value || this.query || null, location: this.location || null }
    });
  }
}
