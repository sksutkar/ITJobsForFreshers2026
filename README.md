# ITJobsForFreshers.com

An Angular 15 job-portal demo for fresh graduates, with a responsive home page, sample IT job listings, category and location search, job details, internships, off-campus drive examples, and interview question sets.

> **Sample data notice:** Job listings and drive details in this project are illustrative examples, not verified or live vacancies. Application links lead to the relevant employer's general careers site; always confirm openings and requirements there.

## Run locally

Install dependencies with `npm install`, then start the Angular development server:

```bash
npm start
```

Open `http://localhost:4200/`.

## Build and test

```bash
npm run build
npm test -- --watch=false
```

## Project structure

- `src/app/components/` contains the shared navigation, home-page sections, and reusable job card.
- `src/app/pages/` contains the home, job search, job details, interview questions, and information pages.
- `src/app/models/job.model.ts` defines the listing and search filter types.
- `src/app/services/job.service.ts` centralizes the illustrative sample data and filtering logic for a future API integration.
- `src/app/app-routing.module.ts` defines application navigation and restores scroll position on route changes.

The application uses Angular NgModules and Angular Router. Bootstrap 5 and Bootstrap Icons are included from their public CDNs; custom responsive styling lives in `src/styles.scss`.
