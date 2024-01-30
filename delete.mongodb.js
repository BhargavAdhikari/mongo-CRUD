use("badminton");

//? delete operation

// delete movies whose summary includes "pacific"

// db.movies.deleteMany({ summary: { $regex: "pacific", $options: "i" } });

// delete movies whose genre includes both action and crime

// db.movies.deleteMany({ genres: { $all: ["Action", "Crime"] } });

// delete movies whose weight is less than 60

// db.movies.deleteMany({ weight: { $lt: 60 } });

// db.movies.find({});
