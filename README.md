# Giphy API

Let's use the Giphy API and use Angular's `$http` service to create a fun application. **Fork** the provided repository. Before you get started, you'll need to read through the [Giphy documentation](https://developers.giphy.com/) to determine which endpoints you need to complete this app. You will also need to register an account in order to get your `API Key`. This key is used for all of your requests to authenticate your app to Giphy.

### Base Mode
Setup!
You will need to make the front end app from scratch. 
-- Bring in angular, make your app, and connect it to your html file. 
-- Create 2 separate controllers in your Angular app, one for search and one for the random. Connect them to your html file.

Once you've got your app set up:
In each controller's corresponding view, create usable forms with inputs that use the `/search` and `/random` in the Giphy API.
For random, allow users to get a random giphy by clicking a *RANDOM* button.
For search, allow users to input text and click a *SEARCH* button.
After a successful response, you should display the image(s) to your user!

###HARD Mode
`/Search` results in Giphy have a `Pagination` Object -- Let's use this!
Add Previous and Next buttons for the search results. Clicking previous and next should show us different images, corresponding to the pagination information. You will need to read and understand what Pagination is telling you, and how to add it to your request! 

###PRO Mode
Make a way to save the user's favorite images in both random and search. 
Save user favorites in a SQL database. 
Add a new controller-- it should be responsible for displaying only the favorited images.
Remember to include a database.sql file with your table create code!
