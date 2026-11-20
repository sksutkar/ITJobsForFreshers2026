import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsPageComponent } from './pages/jobs/jobs-page.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { InterviewQuestionsPageComponent } from './pages/interview-questions/interview-questions-page.component';
import { InfoPageComponent } from './pages/info/info-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'ITJobsForFreshers.com | Your Dream IT Job Starts Here' },
  { path: 'jobs', component: JobsPageComponent, title: 'Latest IT Jobs | ITJobsForFreshers.com' },
  { path: 'fresher-jobs', component: JobsPageComponent, data: { category: 'Fresher' }, title: 'Fresher Jobs | ITJobsForFreshers.com' },
  { path: 'off-campus', component: JobsPageComponent, data: { category: 'Off-campus' }, title: 'Off-Campus Drives | ITJobsForFreshers.com' },
  { path: 'internships', component: JobsPageComponent, data: { category: 'Internship' }, title: 'Internships | ITJobsForFreshers.com' },
  { path: 'jobs/:id', component: JobDetailsComponent, title: 'Job Details | ITJobsForFreshers.com' },
  { path: 'interview-questions', component: InterviewQuestionsPageComponent, title: 'Interview Questions | ITJobsForFreshers.com' },
  { path: 'about', component: InfoPageComponent, data: { page: 'about' }, title: 'About Us | ITJobsForFreshers.com' },
  { path: 'contact', component: InfoPageComponent, data: { page: 'contact' }, title: 'Contact Us | ITJobsForFreshers.com' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
