const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contacts = [];

const addContact = ()=> {
  rl.question('Enter  name: ', (name) => {
    rl.question('Enter  phone number: ', (phoneNumber) => {
      contacts.push({ name, phoneNumber });
      console.log(`${name} added to contacts.`);
      mainMenu();
    });
  });
}

function viewContacts() {
  console.log('contact list:');
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.name} - ${contact.phoneNumber}`);
  });
  mainMenu();
}

function searchContact() {
  rl.question('Enter  name to search: ', (name) => {
    const contact = contacts.find(contact => contact.name === name);
    if (contact) {
      console.log(`Found: ${contact.name} - ${contact.phoneNumber}`);
    } else {
      console.log('Contact not found.');
    }
    mainMenu();
  });
}

function mainMenu() {
  console.log('\n1. Add Contact\n2. View Contacts\n3. Search Contact\n4. Exit');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        addContact();
        break;
      case '2':
        viewContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Invalid option. Try again.');
        mainMenu();
        break;
    }
  });
}

 mainMenu();