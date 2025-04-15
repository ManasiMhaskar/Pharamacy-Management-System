function submitData() {

    let name1 = document.getElementById("name");
    let mn1 = document.getElementById("mobile");
    let mt1 = document.getElementById("medtype");
    let mdn1 = document.getElementById("medname");
    let qty1 = document.getElementById("quantity");
    let dt1 = document.getElementById("dte");
    let add1 = document.getElementById("address");

    if (name1.value == "" || mn1.value == "" || mt1.value == "" || mdn1.value == "" || qty1.value == "" || dt1.value == "" || add1.value == "") {
        alert("Fill the form")
    } else {
        addobject()
    }
};

const object1 =
    [

    ]
const object2 =
    [

    ]

function addobject() {
    let task1 = document.getElementById("medtype")
    let task2 = document.getElementById("medname")
    let task3 = document.getElementById("quantity")
    let task4 = document.getElementById("name")
    let task5 = document.getElementById("mobile");
    let task6 = document.getElementById("dte");
    let task7 = document.getElementById("address");
    // let task8 = document.getElementById("message");
    addvalues1(task1.value, task2.value, task3.value)
    addvalues2(task4.value, task5.value, task6.value, task7.value)
    task1.value = ""
    task2.value = ""
    task3.value = ""
    // task4.value = ""
    // task5.value = ""
    // task6.value = ""
    // task7.value = ""
    // task8.value = ""
}

function addvalues1(newMedtype, newMedname, newQuantity) {
    var p1, tot1
    if (newMedname == "Penicillin" || newMedname == "Himalaya Chyvanprash" || newMedname == "Amphotericin" || newMedname == "Turmeric" || newMedname == "Folate") {
        p1 = "Rs. 5"
        tot1 = Number(newQuantity) * 5;
    }
    if (newMedname == "Tetracycline" || newMedname == "Himalaya Trifala" || newMedname == "Nystatin" || newMedname == "Elderberry" || newMedname == "Niacin") {
        p1 = "Rs. 10"
        tot1 = Number(newQuantity) * 10;
    }
    if (newMedname == "Keflex" || newMedname == "Arshkalp Vati" || newMedname == "Terbinafine" || newMedname == "Ginkgo Bioloba" || newMedname == "Calcium") {
        p1 = "Rs. 15"
        tot1 = Number(newQuantity) * 15;
    }
    if (newMedname == "Avelox" || newMedname == "Tulsi Drink" || newMedname == "Econazole" || newMedname == "Ginseng" || newMedname == "Biotin") {
        p1 = "Rs. 10"
        tot1 = Number(newQuantity) * 10;
    }
    if (newMedname == "Cleocin" || newMedname == "Ortho Raksha" || newMedname == "Clotrimazole" || newMedname == "Echinacea" || newMedname == "Riboflavin") {
        p1 = "Rs. 12 "
        tot1 = Number(newQuantity) * 12;
    }
    let new_object1 =
    {
        id1: object1.length + 1,
        mt1: newMedtype,
        mdn1: newMedname,
        qty1: newQuantity,
        uprice1: p1,
        total1: tot1,
    }
    object1.push(new_object1)
    console.log(object1)
    display_object1()
}

function addvalues2(newName, newMob, newDate, newAdd) {
    let new_object2 = {
        name1: newName,
        mn1: newMob,
        dt1: newDate,
        add1: newAdd,
    }
    object2.push(new_object2)
    console.log(object2)
    display_object2()
}


function display_object1() {



    let table1 = document.createElement("table");

    let dtr = document.createElement("tr");
    let dtd = document.createElement("td");
    let dtd1 = document.createElement("td");
    let dtd2 = document.createElement("td");
    let dtd3 = document.createElement("td");
    let dtd4 = document.createElement("td");
    let dtd5 = document.createElement("td");

    dtd.style.borderBottom = "2px solid purple"
    dtd1.style.borderBottom = "2px solid purple"
    dtd2.style.borderBottom = "2px solid purple"
    dtd3.style.borderBottom = "2px solid purple"
    dtd4.style.borderBottom = "2px solid purple"
    dtd5.style.borderBottom = "2px solid purple"

    dtd.style.padding = "25px 15px 10px 0"
    dtd1.style.padding = "25px 85px 10px 0"
    dtd2.style.padding = "25px 85px 10px 0"
    dtd3.style.padding = "25px 35px 10px 0"
    dtd4.style.padding = "25px 35px 10px 0"
    dtd5.style.padding = "25px 35px 10px 0"

    dtd.style.color = "purple"
    dtd1.style.color = "purple"
    dtd2.style.color = "purple"
    dtd3.style.color = "purple"
    dtd4.style.color = "purple"
    dtd5.style.color = "purple"

    dtd.style.fontSize = "13px"
    dtd1.style.fontSize = "13px"
    dtd2.style.fontSize = "13px"
    dtd3.style.fontSize = "13px"
    dtd4.style.fontSize = "13px"
    dtd5.style.fontSize = "13px"

    dtd.appendChild(document.createTextNode("Sr."));
    dtd1.appendChild(document.createTextNode("Medicine Type"));
    dtd2.appendChild(document.createTextNode("Medicine Name"));
    dtd3.appendChild(document.createTextNode("Quantity"));
    dtd4.appendChild(document.createTextNode("Unit Price"));
    dtd5.appendChild(document.createTextNode("Total"));

    dtr.appendChild(dtd);
    dtr.appendChild(dtd1);
    dtr.appendChild(dtd2);
    dtr.appendChild(dtd3);
    dtr.appendChild(dtd4);
    dtr.appendChild(dtd5);
    table1.appendChild(dtr);

    for (let index = 0; index < object1.length; index++) {

        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        td.style.color = "#545353"
        td1.style.color = "#545353"
        td2.style.color = "#545353"
        td3.style.color = "#545353"
        td4.style.color = "#545353"
        td5.style.color = "#545353"

        td.style.fontSize = "13px"
        td1.style.fontSize = "13px"
        td2.style.fontSize = "13px"
        td3.style.fontSize = "13px"
        td4.style.fontSize = "13px"
        td5.style.fontSize = "13px"

        let id2 = document.createTextNode(object1[index].id1);
        let mt2 = document.createTextNode(object1[index].mt1);
        let mdn2 = document.createTextNode(object1[index].mdn1);
        let qty2 = document.createTextNode(object1[index].qty1);
        let uprice2 = document.createTextNode(object1[index].uprice1);
        let total2 = document.createTextNode(object1[index].total1);

        td.appendChild(id2);
        td1.appendChild(mt2);
        td2.appendChild(mdn2);
        td3.appendChild(qty2);
        td4.appendChild(uprice2)
        td5.appendChild(total2)

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        table1.appendChild(tr);
    }

    document.getElementById('demo2').replaceChildren(table1)
}

function display_object2() {
    let table2 = document.createElement("table");

    let ndtr1 = document.createElement("tr");
    let ndtr2 = document.createElement("tr");
    let ndtr3 = document.createElement("tr");
    let ndtr4 = document.createElement("tr");
    let ndtd = document.createElement("td");
    let ndtd1 = document.createElement("td");
    let ndtd2 = document.createElement("td");
    let ndtd3 = document.createElement("td");
    let ndtd4 = document.createElement("td");
    let ndtd5 = document.createElement("td");
    let ndtd6 = document.createElement("td");
    let ndtd7 = document.createElement("td");

    ndtd.style.padding = "5px 15px 0 0"
    ndtd1.style.padding = "5px 15px 0 0"
    ndtd2.style.padding = "5px 15px 0 0"
    ndtd3.style.padding = "5px 15px 0 0"
    ndtd4.style.padding = "5px 15px 0 0"
    ndtd5.style.padding = "5px 15px 0 0"
    ndtd6.style.padding = "5px 15px 0 0"
    ndtd7.style.padding = "5px 15px 0 0"

    ndtd.style.color = "purple"
    ndtd1.style.color = "purple"
    ndtd2.style.color = "purple"
    ndtd3.style.color = "purple"
    ndtd4.style.color = "#545353"
    ndtd5.style.color = "#545353"
    ndtd6.style.color = "#545353"
    ndtd7.style.color = "#545353"

    ndtd.style.fontSize = "13px"
    ndtd1.style.fontSize = "13px"
    ndtd2.style.fontSize = "13px"
    ndtd3.style.fontSize = "13px"
    ndtd4.style.fontSize = "13px"
    ndtd5.style.fontSize = "13px"
    ndtd6.style.fontSize = "13px"
    ndtd7.style.fontSize = "13px"

    ndtd.appendChild(document.createTextNode("Date :"));
    ndtd1.appendChild(document.createTextNode("Name :"));
    ndtd2.appendChild(document.createTextNode("Mobile Number :"));
    ndtd3.appendChild(document.createTextNode("Address :"));
    ndtd4.appendChild(document.createTextNode(object2[0].dt1));
    ndtd5.appendChild(document.createTextNode(object2[0].name1));
    ndtd6.appendChild(document.createTextNode(object2[0].mn1));
    ndtd7.appendChild(document.createTextNode(object2[0].add1));

    ndtr1.appendChild(ndtd);
    ndtr1.appendChild(ndtd4);
    ndtr2.appendChild(ndtd1);
    ndtr2.appendChild(ndtd5);
    ndtr3.appendChild(ndtd2);
    ndtr3.appendChild(ndtd6);
    ndtr4.appendChild(ndtd3);
    ndtr4.appendChild(ndtd7);

    table2.appendChild(ndtr1);
    table2.appendChild(ndtr2);
    table2.appendChild(ndtr3);
    table2.appendChild(ndtr4);

    document.getElementById('demo1').replaceChildren(table2)

}