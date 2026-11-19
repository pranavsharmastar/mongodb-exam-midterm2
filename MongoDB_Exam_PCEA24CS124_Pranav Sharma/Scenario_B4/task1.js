db = db.getSiblingDB("ticketDB");


db.bookings.drop();


db.bookings.insertMany([
    {
        _id: 1,
        passenger: "Anand",
        route: "Chennai-Madurai",
        seats: 2
    },
    {
        _id: 2,
        passenger: "Bhuvana",
        route: "Chennai-Coimbatore",
        seats: 1
    },
    {
        _id: 3,
        passenger: "Chandru",
        route: "Madurai-Trichy",
        seats: 3
    },
    {
        _id: 4,
        passenger: "Divya",
        route: "Salem-Chennai",
        seats: 1
    },
    {
        _id: 5,
        passenger: "Elango",
        route: "Chennai-Trichy",
        seats: 2
    }
]);

db.bookings.find();