//create interface Mountain with properties name and height
interface Mountain {
    name: string, 
    height: number
}

//declare array of type Mountain called mountains 
let mountains:Mountain[] = [
    {name: "Kilimanjaro", height: 19341}, 
    {name: "Everest", height: 29029}, 
    {name: "Denali", height: 20310}
]

//return tallest mountain name
function findNameOfTallestMountain(mountains:Mountain[]): string{
    let tallest:Mountain = mountains.reduce((tallest, mountain) => mountain.height > tallest.height ? mountain : tallest)
    return tallest.name;
}

//set return value in variable
let tallestMountain:string = findNameOfTallestMountain(mountains);

//console log variable 
console.log(tallestMountain); 

export{Mountain, findNameOfTallestMountain};