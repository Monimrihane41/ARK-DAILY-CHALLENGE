const fs = require('fs');

function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const cities = JSON.parse(data).cities;
        // const nameToFilter = 'New York';
        const nameToFilter = selectRandomCity(cities)
        const filteredCities = cities.filter(city => city.name===nameToFilter.name);
        console.log(filteredCities);

        // if (fs.existsSync(`${nameToFilter.name}.txt`)){
        //     fs.unlink(`${nameToFilter.name}.txt`, (err) => {
        //         if(err) console.log(err);
        //         else console.log('Folder deleted successfully');
        //     })
        // }

        fs.writeFile(`${nameToFilter.name}.txt`, JSON.stringify(filteredCities), err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log(`data of the "${nameToFilter.name}" saved to: "${nameToFilter.name}.txt"`);
        });
    } catch (error) {
        console.log(error);
    }
});
﻿
