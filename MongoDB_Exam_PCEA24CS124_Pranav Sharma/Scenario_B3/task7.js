db = db.getSiblingDB("movieDB");

db.movies.createIndex({
    genre: 1,
    rating: -1
});

db.movies.getIndexes();