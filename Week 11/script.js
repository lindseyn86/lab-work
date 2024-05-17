let customers = [
    {
        firstName: 'Sam',
        lastName: 'Smith',
        email: "ssmith@gmail.com"
    },
    {
        firstName: 'Tom',
        lastName: 'Jones',
        email: "tjones@gmail.com"
    }
];

let newRowHtml = "";

for (let customer of customers) {
    newRowHtml = `<tr>
    <td>${customer.firstName}}</td>
    <td>${customer.lastName}</td>
    <td>${customer.email}</td>
    </tr>`;
    $("#tableBody").append(newRowHtml)
}

console.log('newRowHtml');