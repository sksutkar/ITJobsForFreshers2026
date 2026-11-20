export type JobCategory = 'Latest' | 'Fresher' | 'Off-campus' | 'Internship';

export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  experience: string;
  postedDate: string;
  category: JobCategory;
  description: string;
  skills: string[];
  applicationUrl: string;
  duration?: string;
  eligibility?: string;
  qualification?: string;
  deadline?: string;
}

export interface JobFilter {
  query?: string;
  location?: string;
  category?: JobCategory;
}
