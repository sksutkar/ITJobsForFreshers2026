import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LatestJobsComponent } from './components/latest-jobs/latest-jobs.component';
import { FresherJobsComponent } from './components/fresher-jobs/fresher-jobs.component';
import { OffCampusDrivesComponent } from './components/off-campus-drives/off-campus-drives.component';
import { InternshipsComponent } from './components/internships/internships.component';
import { InterviewQuestionsComponent } from './components/interview-questions/interview-questions.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsPageComponent } from './pages/jobs/jobs-page.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { InterviewQuestionsPageComponent } from './pages/interview-questions/interview-questions-page.component';
import { InfoPageComponent } from './pages/info/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    LatestJobsComponent,
    FresherJobsComponent,
    OffCampusDrivesComponent,
    InternshipsComponent,
    InterviewQuestionsComponent,
    CtaComponent,
    FooterComponent,
    JobCardComponent,
    HomeComponent,
    JobsPageComponent,
    JobDetailsComponent,
    InterviewQuestionsPageComponent,
    InfoPageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
