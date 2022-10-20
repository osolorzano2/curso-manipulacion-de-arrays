const items = [1, 3, 2, 3];

const rta = items.reduce((objetoFinal, item) => {
    if (!objetoFinal[item]) {
        objetoFinal[item] = 1;
    } else {
        objetoFinal[item] = objetoFinal[item] + 1;
    }
    return objetoFinal;
}, {})

console.log("rta", rta)

const data = [
    {
        name: "Nicolas",
        level: "alto",
    },
    {
        name: "Lucia",
        level: "medio",
    },
    {
        name: "Oscar",
        level: "alto",
    },
    {
        name: "Zuleima",
        level: "bajo",
    },
    {
        name: "Lili",
        level: "medio",
    }
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {})
console.log("rta1", rta1)


const rango = [1,3,2,3,4,2,5,7,8,9,3,6,8,9,3,9,6];

const rta2 = rango.reduce((objetoFinal, item) => {
    if (item < 5) objetoFinal["1-4"] += 1;
    else if (item < 9) objetoFinal["5-8"] += 1;
    else objetoFinal["9-10"] += 1;
    return objetoFinal;
}, {
    "1-4":0,
    "5-8":0,
    "9-10":0
})
console.log("rta2", rta2)