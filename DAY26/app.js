const mongoose = require('mongoose');
const { User } = require('./models/userModel');


const userSchema = new User({
    name: "Mike Ross",
    email:"mike.ross@arkx.group",
    age: 20
});

// Create the User model

mongoose
    .connect("mongodb://localhost:27017/mydb")
    .then(() => console.log("Connected to database"))
    .catch((error) => console.log("Error: ", error));

 
    // const newUser = new User({
    //     name:"Mike Ross",
    //     email: "mike.ross@arkx.group",
    //     age: 23,
    //   });
      
    //   newUser
    //     .save()
    //     .then((user) => console.log("User created succesfully: ", user))
    //     .catch((error) => console.log("Error creating user: ", error));
    
 //finding all users
    //     User.find({})
    // .then((users) => console.log(users))
    // .catch((error) => console.log("Error fetching users: ", error));

    //finding a user by name
//     User.findOne({ name: "Arkadian" })
//   .then((user) => {
//     if (user) console.log(user);
//     else console.log("User not found");
//   })
//   .catch((error) => console.log("Error fetching users: ", error));


//updating a user
// User.findOneAndUpdate(
//     { email: "admin@arkx.group" },
//     { $set: { email: "monim@arkx.group", age: 23 } }
//   )
//     .then((user) => {
//       if (user) console.log("User updated successfully: ", user);
//       else console.log("User not found");
//     })
//     .catch((error) => console.log("Error fetching users: ", error));


//deleting a user
// User.findOneAndDelete({ email: "user@arkx.group" })
//   .then((user) => {
//     if (user) console.log("User deleted successfully: ", user);
//     else console.log("User not found");
//   })
//   .catch((error) => console.log("Error deleting user: ", error));


