# jessemorynproject2
<h1>GoToShow</h1>

GoToShow is a platform for crowdsourced concert information. For live music lovers, it's often inconvenient to find out what shows are happening in a given weekend and at which venues, without visiting a ton of websites independently. GoToShow removes the hassle by letting concertgoers, bands, or even venues add upcoming shows to the site, putting it all conveniently in one place.

<h2>Basic Site Info</h2>
The frontend of the site was created using HTML, CSS (+Skeleton Framework), and Javascript, with EJS parsing show data onto the webpages and allowing for the use of JS alongside the html. The backend uses Node.js, Mongoose, and Express, with our data stored in MongoDB Atlas and the web-based version of the application hosted on Heroku. Bcrypt and express-session are used for user/password and session functionality.

The site utilizes an MVC file structure to organize everything. The basic premise of the project was to create an app with all 7 RESTful routes and full CRUD, with authentication as a bonus. These required criteria are fulfilled by the "shows" portion of the site.

<h2>Notable Issues</h2>
Linking each page to the css proved to be a little bit of an issue. It took a while to figure out that I had to look at how each page was actually set up in terms of its URL to include the right amount of ../ before styles.css. The Edit page, for example, requires ../../styles.css because its URL is actually shows/:id/edit, putting it two subdirectories away from home. I was confused for a bit because I was looking at how edit.ejs is just one deep in the views folder, but that isn't what actually matters.

Another issue was when I decided to change my home route from / to /shows/. Going through and refactoring everything to reflect this change proved cumbersome, and threw more than a couple errors when trying to run my website after the fact, including issues with authentication. Fortunately I patched them and everything seems to be working now.

Being relatively new to forms, I also struggled a few times with form validation and trying to match the data that is input to the data that is displayed on the page. One of my greatest barriers has been figuring out how to set the minimum date to today - little stuff like that. It's likely that I will need to change how I receive the data in question, instead of continuing to use the date and time input types in my HTML.

<h2>Potential Future Additions</h2>
