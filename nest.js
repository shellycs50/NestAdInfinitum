import process from 'node:process'
const argv = process.argv;

let ob = {"name": argv[3] || "Rob",
"age": argv[4] || 23,
"hobbies": argv[5] || "Nesting",
"next": ''}
let count = 0;
const depth = argv[2] || 200

function iterateObject(obj) {
    console.log({memoryusage: process.memoryUsage()})
    count ++
    if (count > depth)
    {
        return
    }
    if (!obj.next)
    {
        obj.next = {"name": argv[3] || "Rob",
        "age": argv[4] || 23,
        "hobbies": argv[5] || "Nesting",
        "next": ''}
        
        iterateObject(obj.next)
    }
    else
    {
        iterateObject(obj.next)
    }
}
    
iterateObject(ob, depth);

console.log(JSON.stringify(ob, null, 2))