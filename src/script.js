var products = [];

function addProduct(){
    var product = insertJson();
    products.push(product);
    console.log(products);
    display(products);
}

function insertJson(){
    var p_id = document.getElementById('p_id').value;
    var p_name = document.getElementById('p_name').value;
    var p_price = document.getElementById('p_price').value;
    
    if (checkValues(p_id, p_name, p_price) && idValidate(p_id, products)){
        console.log(p_id,p_name,p_price, p_price);
        return {
            'prod_id' : p_id,
            'prod_name' : p_name,
            'prod_price' : p_price
        };
    }
    else{
        window.alert('Invalid Input or ID Already Taken');
    }
    
    
}

function idValidate(p_id, products){
    for (var i = 0; i<products.length; i++){
        if (p_id == products[i].prod_id){
            return false;
        }
    }
    return true;
}



function checkValues(p_id, p_name, p_price){
        return false;
    }
    else{
        return true;
    }
}
function display(products){

    var html = '<tr>\
        <th>Product Id</th>\
        <th>Product Name</th>\
        <th>Product Price</th>\
    </tr> ';

    for (var i=0; i < products.length; i++){
        html += '<tr>\
        <td>'+products[i].prod_id+'</td>\
        <td>'+products[i].prod_name+'</td>\
        <td>'+products[i].prod_price+'</td>\
        <td><a href ="#" onclick = editForm('+products.prod_id+')>Edit</a></td>\
    </tr>'
    }
    document.getElementById('table').innerHTML = html;
}

function editForm(){

}