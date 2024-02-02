
const fetchUserData = async () => {
    try {
        const data = await fetch("https://dummyjson.com/users");
        const result = await data.json();
        
        processUserData(result);

    } catch (error) {
        console.error(`Error fetching data check the link maybe is wrong: ${error.message}`);
    }
}


const processUserData = (result) => {
    result.users.forEach((user) => {
        const { firstName, lastName, age } = user;
        console.log("Name:", firstName + " " + lastName, "Age: " + age);
    });

    const totalMaleAge = summarizeMaleAge(result.users);
    console.log("Total age for male users:", totalMaleAge);
};






const summarizeMaleAge = (users) => {
    return users.reduce((totalAge, user) => {
        if (user.gender.toLowerCase() === 'male') {
            return totalAge + user.age;
        }
        return totalAge;
    }, 0);
}

fetchUserData();
