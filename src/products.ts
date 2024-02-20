//create interface Product that contains properties name and price 
interface Product {
    name: string, 
    price: number;
}

//declare array called products of type Product 
let products:Product[] = [
    {name: "apples", price: 2}, 
    {name: "peaches", price: 4}, 
    {name: "oranges", price: 3}, 
    {name: "watermelon", price: 5}, 
    {name: "strawberries", price: 3}, 
]; 

function calcAverageProductPrice(array:Product[]): number {
    if(array.length === 0){
        return 0;
    }else {
        let sum:number = array.reduce((sum, price) => sum = sum + price.price, 0); 
        let average:number = sum / array.length;
        return average;
    }
}; 

let averageProducts:number = calcAverageProductPrice(products); 
console.log(averageProducts);

export{Product, calcAverageProductPrice}