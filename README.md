# Travel Tracker

## Abstract
Would you like to track and book your trips in an app you can personalize? Use this repo to help you do just that! This was a solo project assigned by the [Turing School of Software and Design](https://turing.edu/). This was a travel tracking application which utilized a variety of technologies, including javaScript, HTML, CSS, Mocha, and Chai. At the end of this solo project I will have completed 50% of the Turing curriculum, primarily focusing on vanilla JS to this point. The project was completed in just under a week. The project goals were to: implement ES6 classes that communicate to each other as needed, use object and array prototype methods to perform data manipulation, create a dashboard that is easy to use and displays information in a clear way, write modular, reusable code that follows SRP, implement a robust testing suite using TDD, make network requests to retrieve data, create a user login, and ensure that our app follows best practices for accessability. 

![Travel Tracker preview]()


## Setup
- Clone this repository to your local machine
- Clone the Local server as well to view client data [Here](https://github.com/turingschool-examples/travel-tracker-api)
- `cd` into the project
- Run `npm install` to install project dependencies
- Run `npm start` to launch the live server
- Copy and paste the provided localhost URL into your browser
- Explore and enjoy!

[Webpack starter kit](https://github.com/turingschool-examples/webpack-starter-kit)
[Local Server](https://github.com/turingschool-examples/travel-tracker-api)

## Login
1. To login to the dashboard view for a user, please use the current username and password format.

`username: traveler50 (where 50 is the ID of the user, users 1 - 50 should be acccessable)`

`password: travel`

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran `npm install`, then the tooling you need to start testing is already installed (`mocha` and `chai`).

## Project Specs
The project specs and rubric for Traveler Tracker can be found [here](https://frontend.turing.edu/projects/travel-tracker.html)


## Technologies Used
 <p>
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
   <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
   <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
   <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white"/>
   <img src="https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white"/>
   <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
 </p>
 
 ## Challenges
- TDD and Class Architecture
- Event Delegation
- Iterating Nested Data 
- Post Calls

## Wins
- API calls
- Dynamic functions created to stick to SRP and get rid of unecessary code
- Accessibility

## Future Extensions
- Implement further error handling
- Implement dynamic features for displaying more trip data to the user, for example, showing all destination images

## Contributors
- Beth Wilson [LinkedIn](https://www.linkedin.com/in/beth-wilson-92594284/) [GitHub](https://github.com/BethWProjects)

## Setup
# Webpack Starter Kit

## Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something (just add a line in the README) and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

## Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with the Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

