const mangoose = require("mongoose");

// mangoose
//   .connect("mongodb://0.0.0.0:27017/NewDb")
//   .then(() => {
//     console.log("Database successfully connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//Create connection
const Connect = async () => {
  try {
    await mangoose.connect("mongodb://0.0.0.0:27017/jndfkd");
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};

Connect();
//create schema

const Schema = new mangoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  course: String,
  branch: String,
});

//create model

const Model = new mangoose.model("NewColl", Schema);

//create document
//save one document
// const CreateDocument = async () => {
//   try {
//     const first = new Model({
//       name: "Dipu",
//       age: 22,
//       course: "Machine Learning",
//       branch: "MCA",
//     });

//     //save the document in databse

//     const res = await first.save();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

// CreateDocument();

//create multiple document

// const CSDocument = async () => {
//   try {
//     const second = new Model({
//       name: "Dinu",
//       age: 24,
//       course: "Full Stack",
//       branch: "MCA",
//     });

//     const third = new Model({
//       name: "Soumya",
//       age: 23,
//       course: "Android",
//       branch: "MCA",
//     });

//     const fourth = new Model({
//       name: "Shaswata",
//       age: 24,
//       course: "Data science",
//       branch: "MCA",
//     });

//     const result = await Model.insertMany([second, third, fourth]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// CSDocument();

const getData = async () => {
  try {
    // const res=await Model.find();
    const res = await Model.updateOne(
      { name: "Biswajeet" },
      { $set: { course: "FullStack" } }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getData();
