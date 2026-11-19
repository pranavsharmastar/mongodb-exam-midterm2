// Task 5: Create a multikey index on cast

db = db.getSiblingDB("movieDB");

// Create index on array field
db.movies.createIndex({
    cast: 1
});

// Find movies featuring Asha
db.movies.find({
    cast: "Asha"
});

// Explain query execution
db.movies.find({
    cast: "Asha"
}).explain("executionStats");