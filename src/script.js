var products = [];

function addProduct(){
    var product = insertJson();
    products.push(product);
    console.log(products);
    table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    for (var i=0; i<products.length; i++){
        cell1.innerHTML = products[i].prod_id;
        cell2.innerHTML = products[i].prod_name;
        cell3.innerHTML = products[i].prod_price;
    }
}

function insertJson(){
    var p_id = document.getElementById('p_id').value;
    var p_name = document.getElementById('p_name').value;
    var p_price = document.getElementById('p_price').value;
    console.log(p_id,p_name,p_price);
    return {
        'prod_id' : p_id,
        'prod_name' : p_name,
        'prod_price' : p_price
    }
}

