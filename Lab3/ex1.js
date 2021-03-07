city = {};
 function findFacts(city){
     console.log(city.name+" has a population of "+city.population+" and is located in "+ city.continent);
 }

 findFacts({
     name: "Toronto",
     population: "6197000",
     continent: "North America"

 })

 findFacts({
    name: "Venice",
    population: "261905",
    continent: "Europe"

})
