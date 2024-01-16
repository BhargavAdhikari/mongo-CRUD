use("badminton");

// ? update
// ? update document($)
// $set

// db.friends.find({});

// db.friends.updateOne(
//   { name: "Alish" },
//   { $set: { name: "Sulochan", age: 17 } }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   { $set: { name: "Alish", age: 17 } }
// );

// $inc
// used to increase or decrease value

// db.friends.updateMany({}, { $inc: { age: -3 } });

// db.friends.find({});

// ? $mul

// db.friends.updateMany({}, { $mul: { age: 3 } });
// db.friends.find({});

// db.friends.updateMany({}, { $mul: { age: 0.5 } });
// db.friends.find({});

// ? $rename => renames fields

// db.friends.updateMany({}, { $rename: { age: "totalAge" } });

// ? $unset=> removes fields

// db.friends.updateMany({}, { $unset: { age: "" } });
