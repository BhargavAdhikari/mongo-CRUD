use("badminton");

// add football to hobbies array of sagar

// db.dosts.updateOne(
//   { name: "Sagar" },
//   { $push: { hobbies: { $each: ["Football"] } } }
// );

// Add badminton and basketball to Sagar's hobbies

// db.dosts.updateOne(
//   { name: "Sagar" },
//   { $set: { hobbies: ["badminton", "cricket"] } }
// );

// db.dosts.updateOne(
//   { name: "Sagar" },
//   { $push: { hobbies: { $each: ["Football"] } } }
// );

// ? Add Swimming, Cycling and Cricket as Sagar's hobbies

// db.dosts.updateOne(
//   { name: "Sagar" },
//   { $addToSet: { hobbies: { $each: ["Swimming", "Cycling", "Cricket"] } } }
// );

// add swimming and cycling as Prakash's hobbies

// db.dosts.updateOne(
//   { name: "Prakash" },
//   { $addToSet: { hobbies: { $each: ["Swimming", "Cycling"] } } }
// );

// add two subjects with points in Prakash's score

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "Nepali", point: 65 },
//           { sub: "English", point: 60 },
//         ],
//       },
//     },
//   }
// );

// removes last item from sagar's hobbies

// db.dosts.updateOne({ name: "Sagar" }, { $pop: { hobbies: 1 } });

// ? pull
// Remove those subjects in which Prakash has scores less than 60

// db.dosts.updateOne(
//   { name: "Prakash" },
//   { $pull: { scores: { point: { $lt: 60 } } } }
// );

// remove badminton and swimming from Sagar hobbies

// ? update Sagar's science score to 63

// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Science" },
//   {
//     $set: { "scores.$.point": 63 },
//   }
// );

// ? change Sagar's Social subject to health

// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Social" },
//   {
//     $set: {
//       "scores.$.sub": "Health",
//       "scores.$.point": 65,
//     },
//   }
// );

// change health's point to 60 in sagar's document

// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Health" },
//   { $set: { "scores.$.point": 60 } }
// );

// ? change football to futsal from sagar's hobby

// db.dosts.updateOne(
//   { name: "Sagar", hobbies: "Football" },
//   { $set: { "hobbies.$": "Futsal" } }
// );

// update prakash's all subject score to 80

// db.dosts.updateOne({ name: "Prakash" }, { $set: { "scores.$[].point": 80 } });

// change all books to "trekking" for alish

// db.dosts.updateOne({ name: "Alish" }, { $set: { "hobbies.$[]": "Trekking" } });

// db.dosts.updateOne(
//   { name: "Sulochan" },
//   { $set: { "scores.$[item].point": 60 } },
//   { arrayFilters: [{ "item.point": { $gt: 50 } }] }
// );

// update scores less than  55 by 10 marks

// db.dosts.updateOne(
//   { name: "Sulochan" },
//   { $inc: { "scores.$[item].point": 10 } },
//   { arrayFilters: [{ "item.point": { $lt: 55 } }] }
// );

db.dosts.find({});
