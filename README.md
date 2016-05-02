BIRD-CLICKER

# This program is done to learn the concept of MVC i.e Model View Controller, which is used nowadays to organize JavaScript.
## The requirement of this project was that the application should display - 
	** a list of birds by name
	** an area to display the selected bird name, picture and text showing number of clicks.
	** an admin button
	** an admin area with inputs for changing the bird's name, url and number of clicks.(hidden by default)
### There are three files - index.html
						  - js/app.js
						  - images
### Open index.html in the web browser and when the bird name is clicked in the list, the bird display area shows the selected bird picture and name and no. of clicks.The number of clicks is unique to each bird and increments when the bird's picture is clicked. When the admin button is clicked, the admin area appears with the inputs filled in for the currently-selected bird. When the cancel button in the admin area is pressed, the admin area disappears.When the save button in the admin area is pressed, the currently-selected bird's values update with the values in the admin area and the admin area disappears.
#### Since the JavaScript file is organized using the concept of MVC so all the application's data objects i.e bird name, image, number of clicks etc. are stored in the Model function. View is what's presented to the users and how users interact with the app. View function is divided into three parts- birdView, birdListView and adminView. The view doesn't know how to update the model because that's the controller's job i.e in our program Octopus job. The controller or octopus is the decision maker and the glue between the model and view. The controller or octopus updates the view when the model changes. It also adds event listeners to the view and updates the model when the user manipulates the view. The variables and functions within the model and view objects communicate with each other via the octopus object. The octopus object is the controller in the MVC architecture.