// Task 3: Simulate accidental deletion

db = db.getSiblingDB("ticketDB");

// Drop bookings collection
db.bookings.drop();

print("Bookings collection deleted successfully.");