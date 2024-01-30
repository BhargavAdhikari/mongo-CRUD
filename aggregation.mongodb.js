use("badminton");

// aggregation
// ? powerful query tool
// uses pipeline
// ? $match, $sort, $limit, $skip, $project, $lookup, $group

// db.movies.aggregate([
//   { $match: { name: "Under the Dome" } },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   { $match: {} },
//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },
//   {
//     $project: {
//       movieName: "$name",
//       rating: "$rating.average",
//     },
//   },
// ]);

// db.movies.aggregate([
//   { $match: {} },
//   {
//     $project: {
//       movieName: { $toLower: "$name" },
//     },
//   },
//   { $sort: { movieName: 1 } },
// ]);
