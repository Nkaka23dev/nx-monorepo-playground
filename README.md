# EmployeeNxFrontend

- Use the Nx Console extension to easily generate UI components.

* npx nx generate @nx/angular:lib lib1
* nx list @nx/angular
* nx g @nx/angular:library

* Setting up Tailwind CSS: Since we are using an Nx monorepo, we should have a shared tailwind.config.js file so it’s available for the entire monorepo. This means we need to configure it globally.

* Set up the CI pipeline — a process that automatically checks and builds our code whenever we make changes.
* Create a README file with instructions for setting up, starting, and running the project.

### Adding angular material

- npm i @angular/material
- npx nx g @angular/material:ng-add --project=task-checker

We can figure out how to add it globall.
