db = db.getSiblingDB("ticketDB");

print("Total bookings:");
print(db.bookings.countDocuments());

print("Booking records:");
db.bookings.find().forEach(printjson);

print("Collection indexes:");
printjson(db.bookings.getIndexes());