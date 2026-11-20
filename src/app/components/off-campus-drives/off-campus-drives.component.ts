import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-off-campus-drives',
  templateUrl: './off-campus-drives.component.html'
})
export class OffCampusDrivesComponent {
  readonly jobs = this.jobService.getJobs({ category: 'Off-campus' }).slice(0, 4);

  constructor(private readonly jobService: JobService) { }
}
