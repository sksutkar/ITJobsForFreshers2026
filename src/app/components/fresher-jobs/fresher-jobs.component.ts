import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-fresher-jobs',
  templateUrl: './fresher-jobs.component.html'
})
export class FresherJobsComponent {
  readonly jobs = this.jobService.getJobs({ category: 'Fresher' }).slice(0, 4);

  constructor(private readonly jobService: JobService) { }
}
