import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html'
})
export class InternshipsComponent {
  readonly jobs = this.jobService.getJobs({ category: 'Internship' }).slice(0, 4);

  constructor(private readonly jobService: JobService) { }
}
