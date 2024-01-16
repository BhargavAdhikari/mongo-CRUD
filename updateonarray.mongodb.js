use("badminton");

// db.friends.updateOne({ name: "Alish" }, { $push: { hobbies: "Snooker" } });

//? modifier => $each, $position, $sort, $slice

// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   { $push: { hobbies: { $each: ["Singing", "Dancing"] } } }
// );

// db.friends.find({});

// db.friends.updateOne(
//   { name: "Alish" },
//   { $push: { hobbies: { $each: ["Cooking", "Driving"] } } }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   { $addToSet: { hobbies: { $each: ["Dancing", "Drinking"] } } }
// );

// ? $pop
// 1 => removes last element from array
// ? -1  => removes last element from array

// db.friends.updateOne({ name: "Alish" }, { $pop: { hobbies: 1 } });

// ? pull
// ? removes item from array based upon condition

// db.friends.updateOne(
//   { name: "Alish" },
//   { $pull: { scores: { sub: "Math" } } }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   { $pull: { scores: { sub: "Math", point: { $gt: 45 } } } }
// );

// db.friends.updateOne({ name: "Alish" }, { $pull: { hobbies: "Cardio" } });

// db.friends.updateOne(
//   { name: "Alish" },
//   { $pullAll: { hobbies: ["Cooking", "Dancing"] } }
// );

// db.friends.updateOne(
//   { name: "Alish", "scores.sub": "Science" },
//   { $set: { "scores.$.point": 80 } }
// );

// db.friends.updateOne(
//   { name: "Alish", hobbies: "Swimming" },
//   { $set: { "hobbies.$": "Coding" } }
// );

// db.friends.updateOne(
//   { name: "Alish", "scores.sub": "Science" },
//   { $inc: { "scores.$.point": 10 } }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "Political Science", point: 67 },
//           { sub: "Environmental Science", point: 75 },
//         ],
//       },
//     },
//   }
// );

// db.friends.find();
