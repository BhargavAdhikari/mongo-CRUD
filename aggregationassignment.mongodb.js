use("badminton");

// ?read operations

// db.movies.aggregate([{ $match: {} }]);

//?Find movies whose status is "Ended"

// db.movies.aggregate([
//   { $match: { status: "Ended" } },
//   {
//     $project: {
//       name: 1,
//       status: 1,
//     },
//   },
// ]);

// ?find movies whose rating is 9

// db.movies.aggregate([
//   { $match: { "rating.average": 9 } },
//   {
//     $project: {
//       name: 1,
//       movieAverage: "$rating.average",
//     },
//   },
// ]);

// ?find movies whose rating is greater than 7 and less than 9

// db.movies.aggregate([
//   { $match: { "rating.average": { $gt: 7, $lt: 9 } } },
//   {
//     $project: {
//       name: 1,
//       movieAverage: "$rating.average",
//     },
//   },
// ]);

// ?find movies whose genres is Thriller

// db.movies.aggregate([
//   { $match: { genres: "Thriller" } },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ?find movies whose status is Running

// db.movies.aggregate([
//   { $match: { status: "Running" } },
//   {
//     $project: {
//       name: 1,
//       status: 1,
//     },
//   },
// ]);

//? find movies whose status is Ended and runtime is 60

// db.movies.aggregate([
//   { $match: { status: "Ended", runtime: { $eq: 60 } } },
//   {
//     $project: {
//       name: 1,
//       status: 1,
//       runtime: 1,
//     },
//   },
// ]);

// ?find movies whose weight is 75 and network country is Canada

// db.movies.aggregate([
//   { $match: { weight: 75, "network.country.name": "Canada" } },
//   {
//     $project: {
//       name: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

// ?find movies whose weight is 96 or runtime is 60

// db.movies.aggregate([
//   { $match: { weight: 96, runtime: 60 } },
//   {
//     $project: {
//       name: 1,
//       weight: 1,
//       runtime: 1,
//     },
//   },
// ]);

// ? find movies whose rating average is not 9

// db.movies.aggregate([
//   { $match: { "rating.average": { $ne: 9 } } },
//   { $project: { name: 1, "rating.average": 1 } },
// ]);

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       movieRating: "$rating.average",
//     },
//   },
// ]);

// ? find movies whose rating average is neither 6 nor 6.5 nor
// ?9 nor 8 nor 8.5 nor 8.6 nor 7.7 nor 6.1 nor 7.8

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $nin: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
//     },
//   },
//   { $project: { name: 1, movieRating: "$rating.average" } },
//   { $sort: { movieRating: -1 } },
// ]);

// find movies whose genre is both drama and thriller

// db.movies.aggregate([
//   { $match: { genres: { $all: ["Drama", "Thriller"] } } },
//   { $project: { name: 1, genres: 1 } },
// ]);

// ?find movies whose genre includes Action and Crime

// db.movies.aggregate([
//   { $match: { genres: { $all: ["Action", "Crime"] } } },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ! find movies whose genre size is 2

// db.movies.aggregate([
//   { $match: { genres: { $size: 2 } } },
//   {
//     $project: {
//       name: { toLower: "$name" },
//       genres: 1,
//     },
//   },
//   { $sort: { name: -1 } },
// ]);

// find movies whose genre size is not 2

// db.movies.aggregate([
//   { $match: { genres: { $not: { $size: 2 } } } },
//   {
//     $project: {
//       name: { $toLower: "$name" },
//       genres: 1,
//     },
//   },
//   { $sort: { name: 1 } },
// ]);

// ? find movies whose language is not English

// db.movies.aggregate([
//   { $match: { language: { $ne: "English" } } },
//   {
//     $project: {
//       name: 1,
//       language: 1,
//     },
//   },
// ]);

// ! find movies whose summary includes "Pacific"

// db.movies.aggregate([
//   { $match: { summary: { $regex: "Pacific", $options: "i" } } },
//   {
//     $project: {
//       name: 1,
//       summary: 1,
//     },
//   },
// ]);

// ? find students whose hobby is neither Swimming nor Dancing

// db.students.aggregate([
//   { $match: { hobbies: { $nin: ["Swimming", "Dancing"] } } },
// ]);

// db.students.find({});

// ?find students whose hobby is both Gaming and Singing

// db.students.aggregate([
//   { $match: { hobbies: { $all: ["Gaming", "Singing"] } } },
//   {
//     $project: {
//       name: 1,
//       hobbies: 1,
//     },
//   },
// ]);

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
