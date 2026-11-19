db = db.getSiblingDB("movieDB");

db.movies.hideIndex("genre_1_rating_-1");


db.movies.getIndexes();

db.movies.find({
    genre: "Drama",
    rating: { $gte: 8 }
}).explain("executionStats");