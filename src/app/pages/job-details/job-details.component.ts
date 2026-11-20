import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html'
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  job?: Job;
  loading = true;
  private readonly destroyed = new Subject<void>();

  constructor(private readonly route: ActivatedRoute, private readonly jobService: JobService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroyed)).subscribe(params => {
      this.loading = true;
      const id = params.get('id');
      this.job = id ? this.jobService.getJobById(id) : undefined;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
