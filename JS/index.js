
const firebaseConfig = {
    apiKey: "AIzaSyDI3rJBSuBobsOfk4SUcHacISSP3vEP83g",
    authDomain: "basedosdemayo.firebaseapp.com",
    databaseURL: "https://basedosdemayo-default-rtdb.firebaseio.com",
    projectId: "basedosdemayo",
    storageBucket: "basedosdemayo.appspot.com",
    messagingSenderId: "497068768446",
    appId: "1:497068768446:web:c96d2daf90fd19973172ef"
  };

firebase.initializeApp(firebaseConfig);

const contactFormDb =  firebase.database().ref('formulario');

document.getElementById('formulario').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let nombre = getElementaVal('nombre');
    let apellido = getElementaVal('apellido');
    let departamento = getElementaVal('departamento');
    let email = getElementaVal('email');
    let numero = getElementaVal('numero');
    let propietario = getElementaVal('propietario');


    saveMessages(nombre, apellido, departamento, email, numero, propietario );


    // mensaje de alerta

    document.querySelector('.alert').style.display = "block";

    // remover la alerta 

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
        
    }, 5000);


    //reiniciar el formulario

    document.getElementById('formulario').reset();

    

    
}

const saveMessages = (nombre, apellido, departamento, email, numero, propietario) =>{
    let newContactForm = contactFormDb.push();

    newContactForm.set({
        nombre : nombre,
        apellido : apellido,
        departamento : departamento,
        email : email,
        numero : numero,
        propietario : propietario,

    })

};


const getElementaVal = (id) => {
    return document.getElementById(id).value;

}


