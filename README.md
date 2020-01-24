# Schedule Appointments - Test

This repository is a Fullstack Test
With this application you can schedule yours appointments.
In each visit you will see a diferent user from Unsplash with its profile image and a banner image.
You can change this user up to 50 times in one hour

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install all dependencies from app folder and functions folder. You can run these commands from source path

```
npm run install-frontend
```
later
```
npm install -g firebase-tools
```
and
```
npm run install-functions
```

### Runing

Open two command shells.

In the first one run

```
npm run start-frontend
```

And in the other one

```
npm run start-functions
```

Visit your [localhost](http://localhost:3000/) and enjoy it

### Running StoryBook

Run StoryBook with this command

```
npm run start-storybooks
```

## Running the tests

Explain how to run the automated tests for this system

### Run unit tests in Frontend

Run unit test in Frontend executing this command

```
npm run unit-test-frontend
```

### Run unit and integration tests in Cloud Function

Run unit and integration test in Cloud Functions executing this command

```
npm run unit-test-functions
```

```
npm run integration-test-functions
```

### Run end to end tests

Run e2e test with Cypress executing this command

```
npm run e2e-test
```

## Deployment

For deploy this app in its Firebase project you can follow this steps
* Deploy frontend with the commands
```
cd app/
firebase login
firebase init
firebase deploy
```
* Deploy cloud functions with the commands
```
cd functions/
npm run deploy
```

You can visit dev environment hosted on FIrebase in [this url] (https://schedule-appointments-test-qa.web.app/)
Remember in Firebase Hosting free trial yu can't connect with 3rd part applications, so the mongDB atlas connection doesn't wor in this host

## Built With

* [ReactJS](https://reactjs.org/docs/getting-started.html) - The frontend web framework used
* [Express](https://expressjs.com/) - The backend web framework used
* [MongoDB](https://www.mongodb.com/) - Data Base
* [Firebase](https://firebase.google.com/docs/functions) - Used to create Cloud Functions and also host the app

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Scrum Board

We use Jira for management. The author can invite you to our Scrum board

## Author

* **Daniel Menendez**

## Demonstrated knowledge
* Agil Software Development Methodology
* Collaborative Software Development
* OOP and Functional Programing
* English as primary language(Dev., Doc. and Management)
* Automated testing CI/CD
* Cloud Native Applications
* Microservice Architecture
* Web and DB Performance
* RESTfull API

## Demonstrated skills
* React.JS and Jest
* Node.JS, Express
* Mocha and Chai
* Typescript
* Github
* MongoDB
* End2End, unit testing and integration testing
* Semantic release
* Cypress
* Jira
* DevOps experience
* PWA
* Material Design
* Storybook
* Scrum develoment experience
