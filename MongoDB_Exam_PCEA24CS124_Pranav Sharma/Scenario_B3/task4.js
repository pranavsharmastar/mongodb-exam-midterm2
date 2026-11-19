
db = db.getSiblingDB("movieDB");

db.movies.dropIndex("rating_1_genre_1");

db.movies.getIndexes();