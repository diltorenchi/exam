//[id , brand , model , type , pricePerDay, available]
let carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car ',80 ,5],
        [4,'Jeep',' Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan',45,12]
];


//print car brands
carBooking.forEach(book => {
    console.log(book[1]);
  });
  console.log('-------------------');
//print total number of cars available
console.log(carBooking.length);
console.log('------------------');
//print sedan cars details
console.log('sedan car details');
carBooking.filter(item=>item[3]=='Sedan').forEach(book=>console.log(book))
//print cars with price per day greather than 60
console.log('--------------------');
console.log(' cars with price per day greather than 60');
carBooking.filter(item=>item[4]>60).forEach(book=>console.log(book[1]))
//print details of jeep wrangler
console.log('------------');
console.log('details of jeep wrangler');
carBooking.filter(item=>item[1]=='Jeep').forEach(book=>console.log(book))
//sort cars based on descending order of the price per day
console.log('------------');
console.log('cars based on descending order of the price per day');
carBooking.sort((car1,car2)=>car2[4]-car1[4]).forEach(item=>console.log(item[1]))
//sort cars based on ascending order of available car
console.log('-------------');
console.log('cars based on ascending order of available car');
carBooking.sort((car1,car2)=>car1[5]-car2[5]).forEach(item=>{
    console.log(item[1]);
})
//find the cars with most available car
console.log('-------------');
console.log('cars with most available car');
console.log(carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1[1]:car2[1]));
//calculate the revenue if all cars are rented for a day
console.log('-------------');
console.log(' the revenue if all cars are rented for a day');
totalrev=carBooking.map(item=>item[4]).reduce((car1,car2)=>car1+car2)
console.log(totalrev);
//count the number of sedans cars
console.log('count the number of sedans cars');
carBooking.filter(item=>item[3]=='Sedan').forEach(item=>console.log(item)   )


//print all unique car brands
console.log('---------');
console.log('all unique car brands');
carBooking.forEach(book => {
  console.log(book[1]);
});
//find total number of available cars of all types

//find the cars with least availblity
console.log('--------------'); 
console.log('cars with least availblity ');
console.log(carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2));
//check if there is any car with price per day of exactly 55
console.log('------------');
console.log('if there is any car with price per day of exactly 55');
pricecar = carBooking.some(item=>item[4]<=55)
console.log(pricecar?'yes':'no');