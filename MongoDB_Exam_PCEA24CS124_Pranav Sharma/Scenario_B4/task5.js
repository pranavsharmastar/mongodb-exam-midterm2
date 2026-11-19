// Task 5: Verify restored bookings

db = db.getSiblingDB("ticketDB");

// Count restored documents
print("Total restored bookings:");

print(db.bookings.countDocuments());

// Display restored documents
print("Restored booking records:");

db.bookings.find().forEach(printjson);

// Verify passenger names
print("Passenger names:");

db.bookings.find(
    {},
    { _id: 0, passenger: 1 }
).forEach(printjson);