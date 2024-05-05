const handleSubmit = (e) => {
    e.preventDefault();

    const users = [];
    let payload = {
        tr: e.target.elements['tr'].value,
        name: e.target.elements['name'].value,
        age: e.target.elements['age'].value,
        phone: e.target.elements['phone'].value,
        address: e.target.elements['address'].value,
    };

    e.target.reset();
    users.push({ ...payload });
    let tr = "";

    for (let item of users) {
        tr += "<tr>" +
            "<td>" + item.tr + "</td>" +
            "<td>" + item.name + "</td>" +
            "<td>" + item.age + "</td>" +
            "<td>" + item.phone + "</td>" +
            "<td>" + item.address + "</td>" +
            "</tr>";
    }

    document.getElementById("tbody").innerHTML = tr;
};
