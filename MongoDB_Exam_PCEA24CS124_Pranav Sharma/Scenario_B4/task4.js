// Task 4: Verify collection deletion

db = db.getSiblingDB("ticketDB");

// Check document count
print("Document count after deletion:");

print(db.bookings.countDocuments());

// Check whether collection exists
print("Collection exists:");

print(
    db.getCollectionNames().includes("bookings")
);