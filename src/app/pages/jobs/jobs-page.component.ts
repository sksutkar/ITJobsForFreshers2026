import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Job, JobCategory } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html'
})
export class JobsPageComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  query = '';
  location = '';
  title = 'Latest IT Jobs';
  isLoading = false;
  private category?: JobCategory;
  private readonly destroyed = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly jobService: JobService
  ) { }

  ngOnInit(): void {
    combineLatest([this.route.data, this.route.queryParamMap])
      .pipe(takeUntil(this.destroyed))
      .subscribe(([data, params]) => {
        this.category = data['category'] as JobCategory | undefined;
        this.title = this.category === 'Fresher' ? 'Fresher Jobs' :
          this.category === 'Off-campus' ? 'Off-Campus Drives' :
            this.category === 'Internship' ? 'Internship Opportunities' : 'Latest IT Jobs';
        this.query = params.get('q') || '';
        this.location = params.get('location') || '';
        this.updateJobs();
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  search(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.query || null, location: this.location || null },
      queryParamsHandling: 'merge'
    });
  }

  clearFilters(): void {
    this.query = '';
    this.location = '';
    this.router.navigate([], { relativeTo: this.route, queryParams: { q: null, location: null } });
  }

  private updateJobs(): void {
    this.jobs = this.jobService.getJobs({
      category: this.category,
      query: this.query,
      location: this.location
    });
  }
}
