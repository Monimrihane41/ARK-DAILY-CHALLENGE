
const events = require('events');
const eventEmitter = new events.EventEmitter();
const fs = require("fs");
//const { Readline } = require('readline/promises');
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

  

//Load users from file
function loadUsers() {
    let rawdata = fs.readFileSync("users.json");
    let users = JSON.parse(rawdata);
    return users;
  };

  // save changes
  function saveUsers(users) {
    let data = JSON.stringify(Object.values(users), null, 2);
    fs.writeFileSync("users.json", data);
  };

  // Exit app
  function exitApp() {
    console.log("Exiting application. Goodbye!");
    readline.close()
  }

  //add user
  function addUser() {
    let users = loadUsers();
    readline.question("Enter name for new user: ", (name) => {
      let accountID = "ACC" + (Object.keys(users).length + 1001);
      let pin = Math.floor(1000 + Math.random() * 9000).toString();
      users[accountID] = { accountID, name, pin, balance: 0.0, transactions: [] };
      console.log(
        `User ${name} added with accountID: ${accountID} and pin: ${pin}`
      );
      saveUsers(users); // Save the updated users list to the JSON file
      firMain();
    });
  };

  // Authentification
  function authentification(){

    let users = loadUsers();
  readline.question("Enter your accountID: ", (accountID) => {
    readline.question("Enter your pin: ", (pin) => {
      let user = users.find((x) => x.accountID === accountID && x.pin === pin);
      let i = users.findIndex(x=>x.accountID === accountID)
      if (user) {
        console.log("Authentication successful!");
        transaction(user, i)      
      } else {
        console.log("Authentication failed.");
        firMain();
      }
    });
  });
};

////  Cheeeeck Baaaleeence
eventEmitter.on('checkBalence' ,(user)=> console.log(`Your current balance is ${user.balance}`));
    
///   Deeeposiiit
eventEmitter.on('deposit' , (user , Amount,i)=>{            
  try{
  let users = loadUsers();
    console.log("ur old balance was " + user.balance);

    user.balance += Amount;
    console.log("Youre New balence now is " + user.balance);
    users[i].balance = user.balance;
    users[i].transactions.push({
      type: "Deposit",
      amount: Amount,
      date: new Date().toISOString() 
    });
      saveUsers(users);
} catch (err) {console.log(err)}
})

///   Wiithdraaaaw
eventEmitter.on('withdraw' , (user , Amount,i)=>{            
  try{
  let users = loadUsers();
    console.log("ur old balance was " + user.balance);

    user.balance -= Amount;
    console.log("Youre New balence now is " + user.balance);
    users[i].balance = user.balance;
    users[i].transactions.push({
      type: "withdraw",
      amount: Amount,
      date: new Date().toISOString() 
    });
      saveUsers(users);
} catch (err) {console.log(err)}
})

////    Viiew Traansaaactioon
eventEmitter.on("viewTransactions" ,(user)=>{
  try{console.log(`User ${user.name}'s transactions:`);
  for (const transaction of user.transactions) {
    const { type, amount, date } = transaction;
    console.log(`Type: ${type}, Amount: ${amount}, Date: ${date}`);
  }
  } catch (err) {
    console.log(err)
  }
})


  // Make transaction 
  function transaction (user ,i){
    console.log("1. check balance");
    console.log("2. Depositing Money");
    console.log("3. Withdrawing Money");
    console.log("4. View Transaction History");
    console.log("5. Exit");

    readline.question("Enter your choice: ", (choice) => {
      switch (choice) {
        case "1":
          console.log("check balence")
          eventEmitter.emit('checkBalence' , user);
          transaction (user ,i)
          break;
        case "2":
          console.log('make deposite')
          readline.question("Enter your choice: ", (choice2) => {
            let Amount = Number(choice2) ;
            eventEmitter.emit("deposit" ,user ,Amount ,i);
            transaction (user ,i)});
            break;
        case "3":
          console.log('make withdraw')
          readline.question("Enter your choice: ", (choice2) => {
            let Amount = Number(choice2) ;
            eventEmitter.emit("withdraw" ,user ,Amount ,i);
            transaction (user ,i)});
            break;
        case "4":
          console.log("view Transactions");
          eventEmitter.emit("viewTransactions",user);
          transaction (user ,i)
          break;
        case "5":
          exitApp();
          break;
        default:
          console.log("WRONG CHOICE PLEASE TRY AGAIN")
          transaction (user ,i)
    }
  })}
 
    
///   Diisplaay main
 function firMain() {
  console.log("1. Add user");
  console.log("2. authentication ");
  console.log("3. Exit");

  readline.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addUser();
        firMain()
        break;
      case "2":
        authentification();
        break;
      case "3":
        exitApp();
        break;
      default:
        console.log("Invalid choice. Please try again.\n");
        firMain();
    }
  });
}

console.log("Welcome to the Contact Management System!\n");
firMain();




  

  

