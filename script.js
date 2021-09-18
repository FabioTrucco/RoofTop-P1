// DOM events 

const store = new Store;

store.fetchProducts();

let catalog = store.getCatalog();

renderListProducts();

function renderListProducts(){
    Array.from(document.getElementsByClassName('shop-items'))
    .forEach((list) => {
            list.innerHTML = productsList(catalog.all())
        })
}


let submitFunc = function() {
        const email = document.getElementById('lmail').value;
        const name = document.getElementById('fname').value;
        const last = document.getElementById('lname').value;
        const country = document.getElementById('country').value;
        const subject = document.getElementById('subject').value;
        const checkMail = document.querySelector('.checkmail').checked;

        store.getUser().setEmail(email);
        store.getUser().setFirstName(name);
        store.getUser().setLastName(last);
        store.getUser().setCountry(country);
        store.getUser().setSubject(subject);
        store.getUser().setChecked(checkMail);

        store.fetchUsers(store.user);
        return false;
    }
    

    
let click = 0;
let openMenu = function (){  //Despliega el menu
    const navMenu = document.getElementsByClassName("nav-menu")[0];
    click += 1;
    if (click == 1){
    navMenu.style.display = "inline-block";
    }
    else{
    navMenu.style.display = "none";
    click = 0;
    }
}


   




