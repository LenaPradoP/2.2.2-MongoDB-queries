
db.restaurants.find();
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1});
db.restaurants.find({borough: "Bronx"});
db.restaurants.find({borough: "Bronx"}).limit(5);
db.restaurants.find({borough: "Bronx"}).skip(5).limit(5);
db.restaurants.find({"grades.score": {$gt: 90}});
db.restaurants.find({"grades.score": {$gt: 80, $lt: 100}});
db.restaurants.find({"address.coord.0": {$lt: -95.754168}});
db.restaurants.find({ $and: [ { cuisine: {$ne: "American "}}, {"grades.score": {$gt: 70}}, {"address.coord.0": {$lt: -65.754168}}]});
db.restaurants.find({cuisine: {$ne: "American "}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}});
db.restaurants.find({cuisine: {$ne: "American "}, "grades.grade": "A", "borough": {$ne: "Brooklyn"}}).sort({"cuisine": -1});
db.restaurants.find({"name": {$regex: /^Wil/, $options: "i"}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({"name": {$regex: /ces$/, $options: "i"}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({"name": {$regex: /Reg/, $options: "i"}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({borough: "Bronx", cuisine: {$in: ["American", "Chinese"]}});
db.restaurants.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{_id: 0, restaurant_id: 1, name: 1, borough:1, cuisine: 1});
db.restaurants.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{_id: 0, restaurant_id: 1, name: 1, borough:1, cuisine: 1});
db.restaurants.find({"grades.score": {$lt: 10}},{_id: 0, restaurant_id: 1, name: 1, borough:1, cuisine: 1});
db.restaurants.find({cuisine: "Seafood", name:{ $not: /^Wil/}},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({cuisine: "Seafood", name:{ $not: /^Wil/}},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurants.find({grades: {$elemMatch:{grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z")}}}, {_id: 0, restaurant_id: 1, name: 1, grades: 1});
db.restaurants.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}, {_id: 0, restaurant_id: 1, name: 1, grades: 1});
db.restaurants.find({"address.coord.1": {$gte: 42, $lte: 52}},{_id: 0, restaurant_id: 1, name: 1, address: 1});
db.restaurants.find().sort({name: 1});
db.restaurants.find().sort({name: -1});
db.restaurants.find().sort({cuisine: 1 ,borough: -1})
db.restaurants.find({"address.street": {$exists: true, $ne: "", $ne: null}})
db.restaurants.find({"address.coord": { $type: "double" }});
db.restaurants.find({"grades.score": {$mod: [7, 0]}}, {_id: 0, restaurant_id: 1, name: 1, grades: 1});
db.restaurants.find({name: {$regex: /mon/, $options: "i"}}, { _id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1});
db.restaurants.find({name: {$regex: /^Mad/, $options: "i"}}, {_id: 0, name: 1, borough: 1, "address.coord": 1, cuisine: 1});
