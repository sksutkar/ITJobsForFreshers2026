import { Injectable } from '@angular/core';
import { Job, JobCategory, JobFilter } from '../models/job.model';

const careers: {
  Microsoft: string;
  TCS: string;
  Infosys: string;
  Accenture: string;
  Capgemini: string;
  Wipro: string;
  Cognizant: string;
  'Tech Mahindra': string;
  'L&T': string;
} = {
  Microsoft: 'https://careers.microsoft.com/',
  TCS: 'https://www.tcs.com/careers',
  Infosys: 'https://www.infosys.com/careers/',
  Accenture: 'https://www.accenture.com/careers',
  Capgemini: 'https://www.capgemini.com/careers/',
  Wipro: 'https://careers.wipro.com/',
  Cognizant: 'https://careers.cognizant.com/',
  'Tech Mahindra': 'https://careers.techmahindra.com/',
  'L&T': 'https://www.larsentoubro.com/careers/'
};

const sampleListings: Job[] = [
  { id: 'microsoft-software-engineer', company: 'Microsoft', title: 'Software Engineer', location: 'Hyderabad, India', experience: '0–2 years', postedDate: 'Recently added', category: 'Latest', description: 'Illustrative sample listing for an entry-level software engineering opportunity. Check the company careers site for current openings and requirements.', skills: ['C#', 'Azure', 'Problem solving'], applicationUrl: careers.Microsoft },
  { id: 'tcs-java-developer', company: 'TCS', title: 'Java Developer', location: 'Pune, India', experience: '0–2 years', postedDate: 'Recently added', category: 'Latest', description: 'Illustrative sample listing for a Java development role. Check the company careers site for current openings and requirements.', skills: ['Java', 'SQL', 'Spring'], applicationUrl: careers.TCS },
  { id: 'infosys-angular-developer', company: 'Infosys', title: 'Angular Developer', location: 'Bengaluru, India', experience: '1–3 years', postedDate: 'Recently added', category: 'Latest', description: 'Illustrative sample listing for a frontend development role. Check the company careers site for current openings and requirements.', skills: ['Angular', 'TypeScript', 'HTML'], applicationUrl: careers.Infosys },
  { id: 'accenture-dotnet-developer', company: 'Accenture', title: '.NET Developer', location: 'Mumbai, India', experience: '0–2 years', postedDate: 'Recently added', category: 'Latest', description: 'Illustrative sample listing for a .NET development role. Check the company careers site for current openings and requirements.', skills: ['C#', '.NET', 'Web API'], applicationUrl: careers.Accenture },
  { id: 'capgemini-react-developer', company: 'Capgemini', title: 'React Developer', location: 'Pune, India', experience: '0–2 years', postedDate: 'Recently added', category: 'Latest', description: 'Illustrative sample listing for a React development role. Check the company careers site for current openings and requirements.', skills: ['React', 'JavaScript', 'CSS'], applicationUrl: careers.Capgemini },
  { id: 'wipro-python-developer', company: 'Wipro', title: 'Python Developer', location: 'Hyderabad, India', experience: '0–2 years', postedDate: 'Recently added', category: 'Latest', description: 'Illustrative sample listing for a Python development role. Check the company careers site for current openings and requirements.', skills: ['Python', 'SQL', 'Git'], applicationUrl: careers.Wipro },
  { id: 'tcs-graduate-trainee', company: 'TCS', title: 'Graduate Engineer Trainee', location: 'Chennai, India', experience: 'Fresher', postedDate: 'Recently added', category: 'Fresher', description: 'Illustrative sample graduate trainee listing. Confirm current openings and eligibility with the company careers site.', skills: ['Programming fundamentals', 'Communication'], applicationUrl: careers.TCS, qualification: 'Engineering graduate' },
  { id: 'infosys-associate-engineer', company: 'Infosys', title: 'Associate Software Engineer', location: 'Mysuru, India', experience: 'Fresher', postedDate: 'Recently added', category: 'Fresher', description: 'Illustrative sample entry-level listing. Confirm current openings and eligibility with the company careers site.', skills: ['Java', 'SQL', 'Problem solving'], applicationUrl: careers.Infosys, qualification: 'Bachelor’s degree' },
  { id: 'wipro-junior-developer', company: 'Wipro', title: 'Junior Developer', location: 'Bengaluru, India', experience: 'Fresher', postedDate: 'Recently added', category: 'Fresher', description: 'Illustrative sample junior developer listing. Confirm current openings and eligibility with the company careers site.', skills: ['JavaScript', 'HTML', 'CSS'], applicationUrl: careers.Wipro, qualification: 'Engineering graduate' },
  { id: 'accenture-support-engineer', company: 'Accenture', title: 'Technical Support Engineer', location: 'Mumbai, India', experience: '0–1 year', postedDate: 'Recently added', category: 'Fresher', description: 'Illustrative sample technical support listing. Confirm current openings and eligibility with the company careers site.', skills: ['Troubleshooting', 'Networking', 'Communication'], applicationUrl: careers.Accenture, qualification: 'Bachelor’s degree' },
  { id: 'capgemini-software-engineer', company: 'Capgemini', title: 'Software Engineer', location: 'Pune, India', experience: 'Fresher', postedDate: 'Recently added', category: 'Fresher', description: 'Illustrative sample software engineering listing. Confirm current openings and eligibility with the company careers site.', skills: ['Java', 'SQL', 'Git'], applicationUrl: careers.Capgemini, qualification: 'Engineering graduate' },
  { id: 'cognizant-off-campus', company: 'Cognizant', title: 'Off-Campus Graduate Hiring', location: 'Multiple locations', experience: 'Fresher', postedDate: 'Sample drive', category: 'Off-campus', description: 'Illustrative off-campus drive example only, not a live vacancy. Please verify eligibility, deadlines, and openings on the official careers site.', skills: ['Programming fundamentals', 'Analytical thinking'], applicationUrl: careers.Cognizant, eligibility: 'Graduating students and recent graduates', qualification: 'Bachelor’s degree in a relevant discipline', deadline: 'Check official careers site' },
  { id: 'tcs-campus-drive', company: 'TCS', title: 'Graduate Campus Drive', location: 'Multiple locations', experience: 'Fresher', postedDate: 'Sample drive', category: 'Off-campus', description: 'Illustrative campus drive example only, not a live vacancy. Please verify eligibility, deadlines, and openings on the official careers site.', skills: ['Logical reasoning', 'Programming basics'], applicationUrl: careers.TCS, eligibility: 'Recent graduates', qualification: 'B.E. / B.Tech / MCA', deadline: 'Check official careers site' },
  { id: 'wipro-campus-drive', company: 'Wipro', title: 'Early Careers Hiring Drive', location: 'Bengaluru, India', experience: 'Fresher', postedDate: 'Sample drive', category: 'Off-campus', description: 'Illustrative drive example only, not a live vacancy. Please verify eligibility, deadlines, and openings on the official careers site.', skills: ['Communication', 'Programming basics'], applicationUrl: careers.Wipro, eligibility: 'Recent graduates', qualification: 'Bachelor’s degree', deadline: 'Check official careers site' },
  { id: 'techmahindra-drive', company: 'Tech Mahindra', title: 'Graduate Engineer Hiring', location: 'Hyderabad, India', experience: 'Fresher', postedDate: 'Sample drive', category: 'Off-campus', description: 'Illustrative drive example only, not a live vacancy. Please verify eligibility, deadlines, and openings on the official careers site.', skills: ['Software fundamentals', 'Communication'], applicationUrl: careers['Tech Mahindra'], eligibility: 'Final-year students and graduates', qualification: 'Engineering degree', deadline: 'Check official careers site' },
  { id: 'lt-campus-drive', company: 'L&T', title: 'Graduate Engineer Trainee Drive', location: 'Mumbai, India', experience: 'Fresher', postedDate: 'Sample drive', category: 'Off-campus', description: 'Illustrative drive example only, not a live vacancy. Please verify eligibility, deadlines, and openings on the official careers site.', skills: ['Engineering fundamentals', 'Problem solving'], applicationUrl: careers['L&T'], eligibility: 'Recent graduates', qualification: 'Engineering degree', deadline: 'Check official careers site' },
  { id: 'infosys-software-intern', company: 'Infosys', title: 'Software Development Intern', location: 'Bengaluru, India', experience: 'Internship', postedDate: 'Sample opportunity', category: 'Internship', description: 'Illustrative internship example, not a live vacancy. Review current opportunities on the company careers site.', skills: ['Programming', 'Git', 'Teamwork'], applicationUrl: careers.Infosys, duration: '8–12 weeks' },
  { id: 'microsoft-web-intern', company: 'Microsoft', title: 'Web Development Intern', location: 'Hyderabad, India', experience: 'Internship', postedDate: 'Sample opportunity', category: 'Internship', description: 'Illustrative internship example, not a live vacancy. Review current opportunities on the company careers site.', skills: ['JavaScript', 'HTML', 'CSS'], applicationUrl: careers.Microsoft, duration: '10–12 weeks' },
  { id: 'tcs-java-intern', company: 'TCS', title: 'Java Developer Intern', location: 'Pune, India', experience: 'Internship', postedDate: 'Sample opportunity', category: 'Internship', description: 'Illustrative internship example, not a live vacancy. Review current opportunities on the company careers site.', skills: ['Java', 'SQL', 'Spring'], applicationUrl: careers.TCS, duration: '3–6 months' },
  { id: 'accenture-angular-intern', company: 'Accenture', title: 'Angular Developer Intern', location: 'Mumbai, India', experience: 'Internship', postedDate: 'Sample opportunity', category: 'Internship', description: 'Illustrative internship example, not a live vacancy. Review current opportunities on the company careers site.', skills: ['Angular', 'TypeScript', 'CSS'], applicationUrl: careers.Accenture, duration: '3 months' },
  { id: 'capgemini-data-intern', company: 'Capgemini', title: 'Data Analyst Intern', location: 'Pune, India', experience: 'Internship', postedDate: 'Sample opportunity', category: 'Internship', description: 'Illustrative internship example, not a live vacancy. Review current opportunities on the company careers site.', skills: ['SQL', 'Excel', 'Analytics'], applicationUrl: careers.Capgemini, duration: '3–6 months' }
];

@Injectable({ providedIn: 'root' })
export class JobService {
  getJobs(filter: JobFilter = {}): Job[] {
    const query = filter.query?.trim().toLowerCase();
    const location = filter.location?.trim().toLowerCase();
    return sampleListings.filter(job => {
      const matchesCategory = !filter.category || job.category === filter.category;
      const matchesLocation = !location || job.location.toLowerCase().includes(location);
      const searchable = `${job.title} ${job.company} ${job.location} ${job.skills.join(' ')}`.toLowerCase();
      return matchesCategory && matchesLocation && (!query || searchable.includes(query));
    });
  }

  getJobById(id: string): Job | undefined {
    return sampleListings.find(job => job.id === id);
  }

  getCategories(): JobCategory[] {
    return ['Latest', 'Fresher', 'Off-campus', 'Internship'];
  }
}
