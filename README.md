# NHS_Handover_App

At 8pm the night team of doctors arrives. Many teams in the hospital have already left by 5pm.  Patients often move from ward to ward and don't have continuity of nursing care.  If a medical job needs doing (eg checking and acting on a blood test) this can rely on verbal handover sometimes along a chain of 2 or more junior doctors.  The person doing the job may not understand the importance or what to do if there is an unexpected event.  This can add up to unintended and potential harmful clinical incidents.

We would like an app-based system whereby handover can be efficiently logged and checked off.  The list can be accessed by the night team, with the night registrar ultimately in charge of ensuring everything has been done by the following morning.

## React

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it easier to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React makes your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Learn Once, Write Anywhere:** You can develop new features in React without rewriting existing code. React can also render on the server using Node.


## Installation

- Set up react

Download node.js on https://nodejs.org/en/download/ and make sure it downloaded: terminal; node -v (gives u the version)

On terminal: 
> npm install react --save

- Create APP

On terminal:
> npx create-react-app myapp

> cd myapp

> npm start


# Documentation
You can find the React documentation [on the website](https://reactjs.org/).

Check out the [Getting Started](https://reactjs.org/docs/getting-started.html) page for a quick overview.

The documentation is divided into several sections:

* [Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Main Concepts](https://reactjs.org/docs/hello-world.html)
* [Advanced Guides](https://reactjs.org/docs/jsx-in-depth.html)
* [API Reference](https://reactjs.org/docs/react-api.html)
* [Where to Get Support](https://reactjs.org/community/support.html)
* [Contributing Guide](https://reactjs.org/docs/how-to-contribute.html)


## About The App 

### App Overview

The app consists of 8 pages:

- **LogIn Page** 

This page requires the user to log in using their exisiting account. they enter their email and password to get access to the app.

<img width="1429" alt="login" src="https://user-images.githubusercontent.com/92522083/149628141-a9956cba-ed19-45c1-af5f-5cabce33e72f.png">

- **Shift Selection Page**

Once logged in, the user is required to select which shift they are working in: Ending Day shift or Starting Evening shift.


<img width="1392" alt="Screen Shot 2022-01-15 at 3 52 19 PM" src="https://user-images.githubusercontent.com/92522083/149628176-7ec218f7-a19a-478e-9550-0a6c40048647.png">


- **SignUp Page**

This page allows the Doctor to create a new account and access the app.

<img width="1393" alt="Screen Shot 2022-01-15 at 3 53 53 PM" src="https://user-images.githubusercontent.com/92522083/149628381-b74c7b0d-353e-4fd6-b2f9-a8ac20033c03.png">


- **Forgot Password Page**

This page sends a reset link to the doctor's email in case the password is forgotten. 

<img width="1408" alt="Screen Shot 2022-01-15 at 3 54 34 PM" src="https://user-images.githubusercontent.com/92522083/149628412-f810e3b4-27ab-4019-9e4a-f73c825f29ef.png">


- **New Task Page** 

This page allows doctors working in the day shift to add tasks assigned to the doctors in the evening shift. 

<img width="1420" alt="Screen Shot 2022-01-15 at 3 55 32 PM" src="https://user-images.githubusercontent.com/92522083/149628442-7282cef7-ad53-4908-9873-c5c39f088148.png">


- **Handover List Page** 

This page lists all the tasks as well as the specific tasks assigned to the doctor who signed in. From this page, doctors have access to the follow-up task page. 

<img width="1427" alt="Screen Shot 2022-01-15 at 3 57 04 PM" src="https://user-images.githubusercontent.com/92522083/149628496-01a1b932-ac63-4de3-a977-f30df17dd77e.png">

- **Follow Up Task Page**

This page allows doctors to add a follow-up task based on a previously created task.  

<img width="1425" alt="Screen Shot 2022-01-15 at 3 57 43 PM" src="https://user-images.githubusercontent.com/92522083/149628517-8b4afa1e-12f2-4bec-94fb-873bd7047374.png">


- **Consultant Page** 

This page summarizes all the tasks (completed and uncompleted).

<img width="1423" alt="Screen Shot 2022-01-15 at 3 59 03 PM" src="https://user-images.githubusercontent.com/92522083/149628564-8b1e319a-27bc-456f-b477-89f647c7b781.png">


### Nice User Experience

The app is designed to be responsive and hence to be used on all kind of screens. It allows user to have control of all the screen's pixels. 


### Productive Development

React offers stateful hot reload, allowing you to make changes to your code
and see the results instantly without restarting your app or losing its state.

### Extensible and Open Model

React uses several IDEs such as IntelliJ. It also provides multiple packages to speed your development, regardless of your target platform.
