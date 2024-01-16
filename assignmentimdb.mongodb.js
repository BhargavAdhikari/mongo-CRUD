use("badminton");

// ?read operations

// db.movies.find();

//?Find movies whose status is "Ended"

// db.movies.find({ status: "Ended" }, { name: 1, status: 1 });

// ?find movies whose rating is 9

// db.movies.find({ "rating.average": 9 }, { name: 1, rating: 1 });

// ?find movies whose rating is greater than 7 and less than 9

// db.movies.find(
//   {
//     $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
//   },
//   { name: 1, rating: 1 }
// );

// ?find movies whose genres is Thriller

// db.movies.find({ genres: "Thriller" }, { name: 1, genres: 1 });

// db.movies.find({"rating.average":[{$gt:7, $lt:9}])

// ?find movies whose status is Running

// db.movies.find({ status: "Running" }, { name: 1, status: 1 });

//? find movies whose status is Ended and runtime is 60

// db.movies.find(
//   { $and: [{ status: "Ended" }, { runtime: 60 }] },
//   { name: 1, status: 1, runtime: 1 }
// );

// ?find movies whose weight is 75 and network country is Canada

// db.movies.find(
//   { $and: [{ weight: 75 }, { "network.country.name": "Canada" }] },
//   { name: 1, "network.country": 1 }
// );

// ?find movies whose weight is 96 or runtime is 60

// db.movies.find(
//   { $or: [{ weight: 96 }, { runtime: 60 }] },
//   { name: 1, runtime: 1, weight: 1 }
// );

// ? find movies whose rating average is not 9

// db.movies.find(
//   { "rating.average": { $ne: 9 } },
//   { name: 1, "rating.average": 1 }
// );

// db.movies.find(
//   { "rating.average": { $not: { $eq: 9 } } },
//   { name: 1, "rating.average": 1 }
// );

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

// db.movies.find(
//   {
//     $or: [
//       { "rating.average": 6 },
//       { "rating.average": 6.5 },
//       { "rating.average": 9 },
//       { "rating.average": 8 },
//       { "rating.average": 8.5 },
//       { "rating.average": 8.6 },
//       { "rating.average": 7.7 },
//       { "rating.average": 6.1 },
//       { "rating.average": 7.8 },
//     ],
//   },
//   { name: 1, "rating.average": 1 }
// );

// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
// });

// db.movies.find(
//   {
//     $nor: [
//       { "rating.average": 6 },
//       { "rating.average": 6.5 },
//       { "rating.average": 9 },
//       { "rating.average": 8 },
//       { "rating.average": 8.5 },
//       { "rating.average": 8.6 },
//       { "rating.average": 7.7 },
//       { "rating.average": 6.1 },
//       { "rating.average": 7.8 },
//     ],
//   },
//   { name: 1, "rating.average": 1 }
// );

// db.movies.find(
//   { "rating.average": { $nin: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] } },
//   { name: 1, "rating.average": 1 }
// );

// find movies whose genre is both drama and thriller

// db.movies.find(
//   { genres: { $all: ["Drama", "Thriller"] } },
//   { name: 1, genre: 1 }
// );

// db.students.find({ hobbies: { $all: ["Dancing", "Singing"] } });

// db.students.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 70 } } },
// });

// ? $size

// db.students.find({ hobbies: { $size: 3 } });

//=======================================================

// ? evaluation operation

// $regex

// db.movies.find({ name: { $regex: "dome", $options: "i" } });

// db.movies.find({ summary: { $regex: "400 inhabita", $options: "i" } });

// db.movies.find({ summary: { $regex: "pacific", $options: "i" } });

// ? $expr

// find sales data whose order is greater than volume

// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

//=====================================================

// ?find movies whose genre includes Action and Crime

// db.movies.find();

// ! find movies whose genre size is 2

// db.movies.find({ genres: { $size: 2 } });

// find movies whose genre size is not 2

// db.movies.find({ genres: { $not: { $size: 2 } } });

// ? find movies whose language is not English

// db.movies.find({ language: { $ne: "English" } });

// ! find movies whose summary includes "Pacific"

// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } });

// ? find students whose hobby is neither Swimming nor Dancing
// db.students.find({});
// db.students.find({ $nor: [{ hobbies: "Swimming" }, { hobbies: "Dancing" }] });

// ?find students whose hobby is both Gaming and Singing

// db.students.find({ $and: [{ hobbies: "Gaming" }, { hobbies: "Singing" }] });

// ?find students who have three hobbies

// db.students.find({ hobbies: { $size: 3 } });

// ?find students whose math score is greater than 50

// db.students.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 50 } } },
// });

// ?find students whose score in any subject is greater than 70

// db.students.find();

// db.students.find({ "scores.point": { $gt: 70 } });

// ? find students whose primary id is "656070d2b16daaa31169a51b"

// db.students.find({ _id: ObjectId("656070d2b16daaa31169a51b") });

// find students who have 2 hobbies as well as math score greater than 40

// db.movies.find({})
