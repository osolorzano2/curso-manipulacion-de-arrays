const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zuleman",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
console.log("original", orders);
const rta = orders.map(item => item.total)
console.log("rta", rta);
console.log("original", orders);

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }

});
console.log("rta3", rta3);
console.log("original", orders);