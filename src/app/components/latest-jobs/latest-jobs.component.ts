import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html'
})
export class LatestJobsComponent {
  readonly jobs = this.jobService.getJobs({ category: 'Latest' }).slice(0, 6);

  constructor(private readonly jobService: JobService) { }
}
