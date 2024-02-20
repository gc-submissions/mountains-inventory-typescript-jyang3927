import { Product } from "./products";

//declare interface containing properties Product and number
interface InventoryItem {
    product: Product, 
    quantity: number
}

//declare array with array type InventoryItem
let inventory:InventoryItem[] = [
    {product: {name:"motor", price:10.00}, quantity: 10}, 
    {product: {name:"sensor", price:12.50}, quantity: 4}, 
    {product: {name:"LED", price:1.00}, quantity: 20}
]

function calcInventoryValue(array:InventoryItem[]): number {
    if (array.length === 0){
        return 0; 
    }else {
        let sum:number = array.reduce((sum, item) => sum = sum + ((item.product.price) * (item.quantity)), 0); 
        return sum; 
    }
}

let result:number = calcInventoryValue(inventory); 

console.log(result)

export{InventoryItem, calcInventoryValue};