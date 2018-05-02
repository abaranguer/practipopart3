function Reserva() {
    this.unic = false;
    this.setmanal1dia = false;
    this.setmanal2dies = false;
    this.quinzenal = false;
    this.dia1 = "";
    this.horaInici1 = "";
    this.durada1 = 0;
    this.dia2 = "";
    this.horaInici2 = "";
    this.durada2 = 0;
    this.habsDia1 = 0;
    this.planxatDia1 = 0;
    this.armarisDia1 = 0;
    this.vidresDia1 = 0;
    this.lavabosDia1 = 0;
    this.cuinaDia1 = 0;
    this.utensilisDia1 = 0;
    this.especialsDia1 = "";
    this.habsDia2 = 0;
    this.planxatDia2 = 0;
    this.armarisDia2 = 0;
    this.vidresDia2 = 0;
    this.lavabosDia2 = 0;
    this.cuinaDia2 = 0;
    this.utensilisDia2 = 0;
    this.especialsDia1 = "";
    this.preuHora = 9.90;
    this.isTargeta = false;
    this.numeroTargeta = "";
    this.mesCaducitat = "";
    this.anysCaducitat = "";
    this.ccv = "";
    this.isPaypal = false;
    this.emailPaypal = "";
    this.telefonPaypal = "";
    this.totalHores = 0;
    this.totalPreu = 0;
    this.periodic = "";
    this.extres1 = "";
    this.extres2 = "";
    
    this.reset = function () {
        this.unic = false;
        this.setmanal1dia = false;
        this.setmanal2dies = false;
        this.quinzenal = false;
        this.dia1 = "";
        this.horaInici1 = "";
        this.durada1 = 0;
        this.dia2 = "";
        this.horaInici2 = "";
        this.durada2 = 0;
        this.habsDia1 = 0;
        this.planxatDia1 = 0;
        this.armarisDia1 = 0;
        this.vidresDia1 = 0;
        this.lavabosDia1 = 0;
        this.cuinaDia1 = 0;
        this.utensilisDia1 = 0;
        this.especialsDia1 = "";
        this.habsDia2 = 0;
        this.planxatDia2 = 0;
        this.armarisDia2 = 0;
        this.vidresDia2 = 0;
        this.lavabosDia2 = 0;
        this.cuinaDia2 = 0;
        this.utensilisDia2 = 0;
        this.especialsDia1 = "";
        this.preuHora = 9.90;
        this.isTargeta = false;
        this.numeroTargeta = "";
        this.mesCaducitat = "";
        this.anysCaducitat = "";
        this.ccv = "";
        this.isPaypal = false;
        this.emailPaypal = "";
        this.telefonPaypal = "";
        this.totalHores = 0;
        this.totalPreu = 0;
        this.periodic = "";
        this.extres1 = "";
        this.extres2 = "";
        
        document.getElementById("idUnic").checked = false;
        document.getElementById("idDUnDiaSetmana").checked = false;
        document.getElementById("idDosDiesSetmana").checked = false;
        document.getElementById("idQuinzenal").checked = false;
        document.getElementById("idDia1").checked = false;
        document.getElementById("idDuradaDia1").value = "";
        document.getElementById("idHoraIniciaDia1").value = "";
        document.getElementById("idDia2").checked = false;
        document.getElementById("idDuradaDia2").value = "";
        document.getElementById("idHoraIniciaDia2").value = "";
        document.getElementById("idHabsDia1").value = "";
        document.getElementById("idPlanxat1").checked = false;
        document.getElementById("idArmarisDia1").checked = false;
        document.getElementById("idVidres1").checked = false;
        document.getElementById("idLavabos1").checked = false;
        document.getElementById("idCuina1").checked = false;
        document.getElementById("idUtensilis1").checked = false;
        document.getElementById("idEspecials1").value = "";
        document.getElementById("idHabsDia2").value = "";
        document.getElementById("idPlanxat2").checked = false;
        document.getElementById("idArmarisDia2").checked = false;
        document.getElementById("idVidres2").checked = false;
        document.getElementById("idLavabos2").checked = false;
        document.getElementById("idCuina2").checked = false;
        document.getElementById("idUtensilis2").checked = false;
        document.getElementById("idEspecials1").value = "";
        document.getElementById("idChkTargeta").checked = false;
        document.getElementById("idNumTargeta").value = "";
        document.getElementById("idMesCaducitat").selectedIndex = "-1";
        document.getElementById("idAnyCaducitat").selectedIndex = "-1";
        document.getElementById("idCCV").value = "";
        document.getElementById("idChkPaypal").checked = false;
        document.getElementById("idEmailPaypal").value = "";
        document.getElementById("idTelPaypal").value = "";
        document.getElementById("idPreuHora").value = "9.90";
        
        this.showReserva();
    }
    
    this.carregar = function () {
        this.unic = document.getElementById("idUnic").checked;
        this.setmanal1dia = document.getElementById("idDUnDiaSetmana").checked;
        this.setmanal2dies = document.getElementById("idDosDiesSetmana").checked;
        this.quinzenal = document.getElementById("idQuinzenal").checked;
        this.dia1 = document.getElementById("idDia1").value;
        this.durada1 = document.getElementById("idDuradaDia1").value;
        this.horaInici1 = document.getElementById("idHoraIniciaDia1").value;
        this.dia2 = document.getElementById("idDia2").value;
        this.durada2 = document.getElementById("idDuradaDia2").value;
        this.horaInici2 = document.getElementById("idHoraIniciaDia2").value;
        this.habsDia1 = document.getElementById("idHabsDia1").value;
        this.planxatDia1 = document.getElementById("idPlanxat1").checked;
        this.armarisDia1 = document.getElementById("idArmarisDia1").checked;
        this.vidresDia1 = document.getElementById("idVidres1").checked;
        this.lavabosDia1 = document.getElementById("idLavabos1").checked;
        this.cuinaDia1 = document.getElementById("idCuina1").checked;
        this.utensilisDia1 = document.getElementById("idUtensilis1").checked;
        this.especialsDia1 = document.getElementById("idEspecials1").value;
        this.habsDia2 = document.getElementById("idHabsDia2").value;
        this.planxatDia2 = document.getElementById("idPlanxat2").checked;
        this.armarisDia2 = document.getElementById("idArmarisDia2").checked;
        this.vidresDia2 = document.getElementById("idVidres2").checked;
        this.lavabosDia2 = document.getElementById("idLavabos2").checked;
        this.cuinaDia2 = document.getElementById("idCuina2").checked;
        this.utensilisDia2 = document.getElementById("idUtensilis2").checked;
        this.especialsDia2 = document.getElementById("idEspecials2").value;
        this.preuHora = document.getElementById("idPreuHora").value;
        this.isTargeta = document.getElementById("idChkTargeta").checked;
        this.numeroTargeta = document.getElementById("idNumTargeta").value;
        this.mesCaducitat = document.getElementById("idMesCaducitat").value;
        this.anysCaducitat = document.getElementById("idAnyCaducitat").value;
        this.ccv = document.getElementById("idCCV").value;
        this.isPaypal = document.getElementById("idChkPaypal").checked;
        this.emailPaypal = document.getElementById("idEmailPaypal").value;
        this.telefonPaypal = document.getElementById("idTelPaypal").value;
        
		this.extres1 = "No";
		this.extres2 = "No";
		
		if (this.unic) {
			this.periodic = "Servei únic";
		}
		
		if (this.setmanal1dia) {
			this.periodic = "Servei setmanal, un cop per setmana";
		}
		
		if (this.setmanal2dies) {
			this.periodic = "Servei setmanal, dos cops per setmana";
		}
		
		if (this.quinzenal) {
			this.periodic = "Servei quinzenal";
		}
		
        this.totalHores = Number(this.durada1) + Number(this.durada2);
        
        if (this.planxatDia1) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de planxat (dia 1)
			this.extres1 = "Sí";
        }
        
        if (this.armarisDia1) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' d'armaris (dia 1)
			this.extres1 = "Sí";
        }
        
        if (this.vidresDia1) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de vidres (dia 1)
			this.extres1 = "Sí";
        }

        if (this.lavabosDia1) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de lavabos (dia 1)
			this.extres1 = "Sí";
        }
        
        if (this.cuinaDia1) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de cuina (dia 1)
			this.extres1 = "Sí";
        }
        
        if (this.planxatDia12) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de planxat (dia 2)
			this.extres2 = "Sí";
        }
        
        if (this.armarisDia2) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' d'armaris (dia 2)
			this.extres2 = "Sí";
        }
        
        if (this.vidresDia2) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de vidres (dia 2)
			this.extres2 = "Sí";
        }

        if (this.lavabosDia2) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de lavabos (dia 2)
			this.extres2 = "Sí";
        }
        
        if (this.cuinaDia2) {
            this.totalHores = Number(this.totalHores) + 0.5;  // suma 30' de cuina (dia 2)
			this.extres2 = "Sí";
        }        
        
        this.totalPreu = Number(this.totalHores) * Number(this.preuHora);
        
        if (this.utensilisDia1) {
            this.totalPreu = Number(this.totalPreu) + 3.0;  // suma 3€ si ha de portar utensilis (dia 1)
        } 
        if (this.utensilisDia2) {
            this.totalPreu = Number(this.totalPreu) + 3.0;  // suma 3€ si ha de portar utensilis (dia 2)
        }
    }
    
    this.showReserva = function () {
        for (var i = 0; i <= 4; i++) {
         document.getElementsByClassName("res-periodic")[i].innerHTML = this.periodic;
         document.getElementsByClassName("res-dia1")[i].innerHTML = this.dia1;
         document.getElementsByClassName("res-hora1")[i].innerHTML = this.horaInici1;
         document.getElementsByClassName("res-durada1")[i].innerHTML = this.durada1;
         document.getElementsByClassName("res-dia2")[i].innerHTML = this.dia2;
         document.getElementsByClassName("res-hora2")[i].innerHTML = this.horaInici2;
         document.getElementsByClassName("res-durada2")[i].innerHTML = this.durada2;
         document.getElementsByClassName("res-extres1")[i].innerHTML = this.extres1;
         document.getElementsByClassName("res-extres2")[i].innerHTML = this.extres2;
         document.getElementsByClassName("res-preuhora")[i].innerHTML = this.preuHora;
         document.getElementsByClassName("res-total")[i].innerHTML = this.totalPreu;
        }
    }
}
