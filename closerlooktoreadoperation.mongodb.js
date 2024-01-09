// closer look at the read operation
use("badminton");

// comparison operators

//?eq
// db.movies.find({ name: { $eq: "Under the Dome" } });

// db.movies.find({ name: "Bitten" });

// db.movies.find({ name: "Person of Interest" });

//? $gt

// db.movies.find({ runtime: { $gt: 60 } }).count();

// db.movies.find({ runtime: { $gt: 30 } });

// db.movies.find({ runtime: { $gte: 60 } });

// ? $lt

// db.movies.find({ weight: { $lt: 75 } });

// db.movies.find({ weight: { $lte: 75 } });

// ? $not
// status !=="Ended"

// db.movies.find({ status: { $not: { $eq: "Ended" } } });

// db.movies.find({ status: { $ne: "Ended" } });

// ? logical operator

//? $and, $or, $not, $nor

// status==="Ended"

// db.movies.find({
//   $and: [{ status: "Ended" }, { runtime: 60 }, { "rating.average": 8.3 }],
// });

// find movies whose rating is greater than 9

// db.movies.find(
//   { "rating.average": { $gte: 9 } },
//   { name: 1, rating: 1, _id: 0 }
// );

// ? $or
// find movies whose run time is less than 60 or status is ended
// db.movies.find(
//   { $or: [{ runtime: { $lt: 60 } }, { status: "Ended" }] },
//   { name: 1, status: 1, runtime: 1 }
// );

// ?nor
// find movies whose status is neither Ended nor runtime is 60

// db.movies.find(
//   { $nor: [{ runtime: 60 }, { status: "Ended" }] },
//   { name: 1, status: 1, runtime: 1 }
// );
