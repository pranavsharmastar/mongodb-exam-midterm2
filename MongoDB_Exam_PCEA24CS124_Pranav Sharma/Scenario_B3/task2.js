db = db.getSiblingDB("movieDB");

db.movies.createIndex({
    genre: 1,
    rating: -1
});

db.movies.find({
    genre: "Drama",
    rating: { $gte: 8 }
});

db.movies.find({
    genre: "Drama",
    rating: { $gte: 8 }
}).explain("executionStats");