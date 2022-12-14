# Gifts_selection_API_demo

The App was build to practice RESTful API. I have built this to list gifts in the landing page. Each gifts has corresponding detail page with a link to add the review of the gift. The api uses in memory variable to store the data. This data is refreshed when server is restarted. In future, I have plans to add and retrieve the data from database.

### Features

- Home page: (`GET /gifts`) This is the landing page that list some predefined gifts. Each gift has a link to the detail page
- Gift Details page: (`GET /gifts/:id`) Each gift has a corresponding detail link which redirects the user to the gift detail page containing the description, price and reviews of the gift. The page also has a link to add review
- Open review page: (`GET /gifts/:id/review`) This is the page opens a form and allow user to submit the review. When the review is submitted a HTTP POST request submitted with path `/gifts/:id/review` and the user is redirected to product details page that has all the reviews, including this last one
- The detail page also has a back button to redirect the user to the home page

### Technologies/Framework Used

1. Express (npm i express)
2. Embedded JavaScript- EJS (npm i ejs)
3. UUID - Universally Unique Identifier (npm i uuid) used to identify each gift

### How to run/develop locally

1. clone the repository
2. `cd` to Gifts_selection_API_demo
3. Run `npm i`
4. Run `npm start`
5. Open browser and hit `localhost:3000/gifts`
