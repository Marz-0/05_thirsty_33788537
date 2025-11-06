# MyPage

This is a basic Node.js web application that shows some information about me.  
The project now uses *Express.js* instead of the built-in HTTP module, and includes route chaining and multiple endpoints.



## Technologies Used

- *HTML* – for structuring the webpage (myPage.html)
- *CSS* – for styling the page (styles.css)
- *Node.js* – to run a lightweight server (server.js)
- *Built-in Node modules:*
  - http – to create the server
  - fs – to read and serve files
  - path – to resolve file paths safely
- Express.js - Framework for Node.js. Helps define routes, handling requests and responses, as well as serving files
- Javascript - used in the /date route for client-side behaviour. This is run in the browser, not on the server. It dynamically inserts the current date and time for that local device onto the page
- Routing - modularising routes into seperate a seperate file (routes/main.js). 
- git and .gitignore - ignored the node_modules folder as it is unnecessary to run the server




## How to Install and Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Marz-0/04_express_33788537
```

### 2. Install Node.js (if not installed already)

Download and install from nodejs.org

# Drinks4U — demo Express app (05_thirsty_33788537)

Lightweight Express/EJS project used for a Dynamic Web Applications assignment. It demonstrates server-side rendering with EJS, routing, serving static assets, and simple form handling (registration + survey).

## Quick features

- EJS templates with header/footer partials
- Static assets served from `public/` (CSS)
- Routes: home, about (shop locations), search, register, survey (form + result)
- Simple in-memory shop data used by views

## Tech

- Node.js + Express
- EJS templating
- Plain CSS in `public/styles.css`

## Getting started (Windows PowerShell)

1. Install Node.js (v14+ recommended): https://nodejs.org
2. From the project root, install dependencies (if any are added later):

```powershell

npm install
```

3. Start the app:

```powershell
node index.js
```

4. Open http://localhost:8000 in your browser.

## Available routes

- GET /            -> home page (`views/index.ejs`)
- GET /about       -> about page (now lists shop locations) (`views/about.ejs`)
- GET /search      -> search form (`views/search.ejs`)
- GET /search_result -> shows submitted search terms (`views/search_result.ejs`)
- GET /register    -> registration form (`views/register.ejs`)
- POST /registered -> registration result (`views/registered.ejs`)
- GET /survey      -> customer survey form (`views/survey.ejs`)
- POST /survey_result -> shows survey responses (`views/survey_result.ejs`)

## Project structure (important files)

- index.js                 Express app entry point
- routes/main.js           All application routes and the sample `shopData`
- views/                   EJS templates (partial header/footer + pages)
  - partials/header.ejs
  - partials/footer.ejs
  - index.ejs, about.ejs, search.ejs, register.ejs, survey.ejs, survey_result.ejs, registered.ejs
- public/styles.css        Styles for the site

## Notes and tips

- Static files are served from the `public/` directory. Make sure `/styles.css` is loaded by pages via `<link href="/styles.css">`.
- Form field names in the survey match the server mapping (e.g. `drink_category`, `is_student`). If you change input names, update `routes/main.js` accordingly.
- The app uses in-memory data (no database). Restarting the server resets any runtime data.

## Testing the survey quickly

1. Visit `/survey`, fill in the form and submit.
2. The results page will display the submitted values (no data is stored server-side).

## Next steps you can implement

- Add persistent storage (JSON file or a database) for survey responses
- Improve accessibility and responsive layout for forms
- Add client-side validation and nicer UI for radio/checkbox groups

## Licence

This project is an educational assignment. Use or adapt freely for learning purposes.



