function Registre() {
    this.nom = "";
    this.cognoms = "";
    this.sexe = "";
    this.correuElectronic = "";
    this.telefon = "";
    this.cp = ""
    this.carrer = "";
    this.numero = "";
    this.pisPorta = "";
    this.altres = "";
    this.password = "";
    this.rePassword = "";

    this.esValid = function() {
        var valid = false;

        this.carregar();
        this.show();

        if ((this.nom != "") &&
            (this.cognoms != "") &&
            (this.correuElectronic != "") &&
            (this.telefon != "") &&
            (this.carrer != "") &&
            (this.numero != "") &&
            (this.pisPorta != "")) {
            valid = true;
        } else {
            alert("dades incomplertes");
        }

        return valid
    }


    this.reset = function() {
        this.nom = "";
        this.cognoms = "";
        this.sexe = "";
        this.correuElectronic = "";
        this.telefon = "";
        this.carrer = "";
        this.numero = "";
        this.pisPorta = "";
        this.altres = "";
        this.password = "";
        this.rePassword = "";

        document.getElementById("idCp").value = "";
        document.getElementById("idNom").value = "";
        document.getElementById("idCognoms").value = "";
        document.getElementById("idDona").checked = false;
        document.getElementById("idHome").checked = false;
        document.getElementById("idEmail").value = "";
        document.getElementById("idPhone").value = "";
        document.getElementById("idCarrer").value = "";
        document.getElementById("idEscala").value = "";
        document.getElementById("idPisPorta").value = "";
        document.getElementById("idAltres").value = "";
        document.getElementById("idPassword").value = "";
        document.getElementById("idRepassword").value = "";

        document.getElementById("idUsrLogin").value = "";
        document.getElementById("idUsrPassword").value = "";

        this.show();
    }

    this.carregar = function() {
        this.nom = document.getElementById("idNom").value;
        this.cognoms = document.getElementById("idCognoms").value;
        var dona = document.getElementById("idDona").checked;
        var home = document.getElementById("idHome").checked;
		  this.sexe = "";
        if (dona) {
        	this.sexe = "dona";
        }       
        if (home) {
        	this.sexe = "home";
        }       
        this.correuElectronic = document.getElementById("idEmail").value;
        this.telefon = document.getElementById("idPhone").value;
        this.carrer = document.getElementById("idCarrer").value;
        this.numero = document.getElementById("idEscala").value;
        this.pisPorta = document.getElementById("idPisPorta").value;
        this.altres = document.getElementById("idAltres").value;
        this.password = document.getElementById("idPassword").value;
        this.rePassword = document.getElementById("idRepassword").value;
    }

    this.show = function() {
        for (var i = 0; i <= 1; i++) {
            document.getElementsByClassName("reg-nom")[i].innerHTML = this.nom;
            document.getElementsByClassName("reg-cognoms")[i].innerHTML = this.cognoms;
            document.getElementsByClassName("reg-sexe")[i].innerHTML = this.sexe;
            document.getElementsByClassName("reg-email")[i].innerHTML = this.correuElectronic;
            document.getElementsByClassName("reg-telefon")[i].innerHTML = this.telefon;
        }
    }
    
    this.showReserva = function() {
        for (var i = 0; i <= 4; i++) {
            document.getElementsByClassName("res-nom")[i].innerHTML = this.nom;
            document.getElementsByClassName("res-cognoms")[i].innerHTML = this.cognoms;
            document.getElementsByClassName("res-email")[i].innerHTML = this.correuElectronic;
            document.getElementsByClassName("res-telefon")[i].innerHTML = this.telefon;
            document.getElementsByClassName("res-carrer")[i].innerHTML = this.carrer;
            document.getElementsByClassName("res-escala")[i].innerHTML = this.numero;
            document.getElementsByClassName("res-pis")[i].innerHTML = this.pisPorta;
             
        }
    }
}
