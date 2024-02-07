
const cities = [
        { name: 'New York', lat: 40.7128, lng: -74.0060 },
        { name: 'London', lat: 51.5074, lng: -0.1278 },
        { name: 'Paris', lat: 48.8566, lng: 2.3522 },
        { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
        { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
        { name: 'Rome', lat: 41.9028, lng: 12.4964 },
        { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
        { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
        { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
        { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
    ];


const  SelectRandomCity = (cities)=> {
        const randomIndex = Math.floor(Math.random() * cities.length);
        return cities[randomIndex];
      }



const fetchTemps = async (lat, lng) => {
    try {
        const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
        const result = await data.json();
        const temp = result.current_weather.temperature;
        
        return temp;
    } catch (error) {
        console.error(`Error fetching data check the link maybe is wrong: ${error.message}`);
    }
}

const displayCityTemp = async () => {
    const city = SelectRandomCity(cities);
    const temp = await fetchTemps(city.lat, city.lng);
    console.log(`The temperature in ${city.name} is ${temp}°C`);
}

displayCityTemp(); 


const fetchUserData = async () => {
    try {
        const data = await fetch("https://dummyjson.com/users");
        const result = await data.json();
        

    } catch (error) {
        console.error(`Error fetching data check the link maybe is wrong: ${error.message}`);
    }
}
processUserData(result);


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
