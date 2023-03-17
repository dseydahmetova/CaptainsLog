# CaptainsLog

![Screenshot](https://github.com/dseydahmetova/CaptainsLog/blob/main/Capture.JPG?raw=true)
![Screenshot](https://github.com/dseydahmetova/CaptainsLog/blob/main/Capture1.JPG?raw=true)
![Screenshot](https://github.com/dseydahmetova/CaptainsLog/blob/main/Capture2.JPG?raw=true)

## Learning Objectives
* Full CRUD app with a mongo database
## Prerequisites
* JavaScript
* Express / Node
* Mongo / Mongoose

### Multi-part/Multi-day Lab
Every great captain, whether on the waters or in the skies, keeps a daily log.
Let's build the perfect Captain's Log App for our extraordinary captains.
There are many ways to get started building an app. This lab follows a specific order for two reasons:
* to align with the content of lecture
* to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part
 

## Set up
Let's keep track of our Restful Routes as we build out our app. 
 

## Restful Routes
###	Action	URL	HTTP Verb	jsx view filename	mongoose method
1	Index	/logs/	GET	Index.jsx	Log.find()
2	Show				
3	New	/logs/new	GET	New.jsx	none
4	Create	/logs/	POS T	none	Log.create(req.body)
5	Edit				
6	Update				
7	Destroy				
 

In your student_labsfolder
`mkdir captains_log`
`cd catpains_log`
create a new express app


### Router
`mkdir controllers`
`touch controllers/logs.js`
work on refactoring your code so your logs routes are in your controller file, rather than in server.js
 


### Bonuses
The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
make a seed file and seed it
have your update route redirect to the show page of the log that was edited
research res.redirect('back')
create a seed file and seed your database
work on your css, make this Captain's Log look awesome!
if you have timestamps, figure out how to edit/display the edited date
### SUPER BONUS - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do your own research on how to set up a one-to-manyrelationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google.