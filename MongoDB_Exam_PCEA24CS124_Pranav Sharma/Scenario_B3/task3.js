db = db.getSiblingDB("movieDB");

db.movies.createIndex({
    rating: 1,
    genre: 1
});

db.movies.find({
    genre: "Drama",
    rating: { $gte: 8 }
}).hint("rating_1_genre_1").explain("executionStats");


db.movies.find({
    genre: "Drama",
    rating: { $gte: 8 }
}).hint("genre_1_rating_-1").explain("executionStats");