# basicbikesapi

This solo project was made as part of a 2 hour Hack Reactor Hackathon. It makes use of Node, Express and MongoDb.

The api supports PUT requests for adding bikes to the database and GET requests for retreiving.

Submitting requests:

/path?queries

Adding with PUT:

Path must be: /add

Queries must be in order and seperated by comma: ?make,model,colour,year

Example PUT request:

/add?Raleigh,S-Words,Black,2015

Receiving with GET:

Path refers to what you are requesting:

/make
/model
/colour
/year

Query for exact value of path:

/make?Specialized //return all specialized bikes
/colour?black //return all black bikes
