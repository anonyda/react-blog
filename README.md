# The Web Dev Blog

The Web Dev Blog is a blogging platform that makes use of [BloggIt](https://github.com/anonyda/blog-backend) Backend to fetch and display blogs. 
It is built using React and Redux, and is secured by a basic authentication with a login functionality facilitated by a custom [authentication server](https://github.com/anonyda/auth-server).

## Live Link

[https://anonyda.github.io/react-blog](https://anonyda.github.io/react-blog)

The project is hosted on Github Pages. The APIs this project consumes are hosted on Heroku.

## Run This Project Locally

Clone the project, and navigate to the project directory.

```bash
git clone https://github.com/anonyda/react-blog.git
cd react-blog
```

In the project directory, you can run:

```bash
npm start
```
This runs the app in the development mode.

## The Flow

To view the blog posts, you need to log in. If you don't have an account, you can create a new account by signing up. 
Once you log in, you will be able to view all the blogs.
You can click on a blog card, if you want to read more about it. 

### State Management
There are two states in the app.

1. Authentication
2. Error

The Authentication state keeps track of whether you are logged in or not, and with that decides the routes you can/cannot access.\
The Error state keeps track of the app errors and displays a modal indicating the error if it occurs.

### Directory Structure
```
.
└── src
|    ├── App.css
|    ├── App.js
|    ├── App.test.js
|    ├── components
|    │   ├── Aside
|    │   │   ├── Aside.jsx
|    │   │   └── Aside.module.css
|    │   ├── Banner
|    │   │   ├── Banner.jsx
|    │   │   └── Banner.module.css
|    │   ├── Blog
|    │   │   ├── Blog.jsx
|    │   │   └── Blog.module.css
|    │   ├── Blogs
|    │   │   ├── Blogs.jsx
|    │   │   └── Blogs.module.css
|    │   ├── Footer
|    │   │   ├── Footer.jsx
|    │   │   └── Footer.module.css
|    │   ├── LoginForm
|    │   │   ├── LoginForm.jsx
|    │   │   └── Login.module.css
|    │   ├── Modal
|    │   │   ├── Modal.jsx
|    │   │   └── Modal.module.css
|    │   ├── NavBar
|    │   │   ├── NavBar.jsx
|    │   │   └── NavBar.module.css
|    │   ├── ProtectedRoute
|    │   │   └── ProtectedRoute.jsx
|    │   ├── SignUpForm
|    │   │   └── SignUp.jsx
|    │   └── SingleBlog
|    │       ├── SingleBlog.jsx
|    │       └── SingleBlog.module.css
|    ├── index.css
|    ├── index.js
|    ├── logo.svg
|    ├── pages
|    │   ├── Blog
|    │   │   ├── Blog.jsx
|    │   │   └── Blog.module.css
|    │   └── Home
|    │       ├── Home.jsx
|    │       └── Home.module.css
|    ├── redux
|    │   ├── features
|    │   │   ├── appError
|    │   │   │   └── appErrorSlice.js
|    │   │   └── user
|    │   │       └── userSlice.js
|    │   └── store
|    │       └── store.js
|    ├── reportWebVitals.js
|    ├── routing
|    │   └── AppRouter.js
|    ├── setupTests.js
|    └── utils
|        ├── checkError.js
|        └── constants.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── README.md
```

## To Do

* Add Create Blog Post Feature
