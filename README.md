# SmartLoan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Command
npm install -g @angular/cli
ng new smart-loan
cd smart-loan
ng add @angular/material
npm install bootstrap
npm install firebase @angular/fire

ng build --prod

## Deploy
npm install -g firebase-tools
firebase login
firebase init
ng build --prod
firebase deploy

## Note
https://www.remotestack.io/angular-firebase-firestore-real-time-crud-example-tutorial/

## Create user service
ng g c create-user
ng g c list-user
ng g c edit-user
ng g service service/user
ng g class model/user --type=model

ng g service service/loan-transaction
ng g class model/loan-transaction --type=model

ng g service service/loan-account
ng g class model/loan-account --type=model

ng g service service/loan-statement
ng g class model/loan-statement --type=model

ng g c loan-transaction-home
ng g c loan-transaction-due
ng g c loan-transaction-over
ng g c loan-transaction-create
ng g c loan-account-create
ng g c loan-statement-paid