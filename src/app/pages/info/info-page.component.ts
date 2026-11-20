import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html'
})
export class InfoPageComponent implements OnInit, OnDestroy {
  page = 'about';
  private readonly destroyed = new Subject<void>();

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroyed)).subscribe(data => {
      this.page = data['page'] === 'contact' ? 'contact' : 'about';
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
