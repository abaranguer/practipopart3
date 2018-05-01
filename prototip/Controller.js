	function Controller(registre, reserva) {
	    this.registre = registre;
	    this.reserva = reserva;

	    this.validarCP = function () {
	        codisValids = ['08001', '08002', '08003', '08004', '08005', '08006', '08007', '08008', '08009', '08010', 
	        '08011', '08012', '08013', '08014', '08015', '08016', '08017', '08018', '08019', '08020', 
	        '08021', '08022', '08023', '08024', '08025', '08026', '08027', '08028', '08029', '08030', 
	        '08031', '08032', '08033', '08034', '08035', '08036', '08037', '08038', '08039', '08040', 
	        '08041', '08042'];
	        var codiPostal = document.getElementById("idCp").value;
	        var mapping = "error cp";
	        if (isInArray(codiPostal, codisValids)) {
	            registre.reset();
	            registre.show();
	        	   registre.showReserva();

	        	   reserva.reset();
	        	   reserva.showReserva();

	            mapping = "reg usuari";
	        }
	        this.navigate(mapping);
	    }
	    
	    this.validarRegistre = function () {
	        var mapping = "";
	        if (this.registre.esValid()) {
	            mapping = "reserva dia";
	        } else {
	            // if (this.registre.faltenDadesUsuari()) {
	            // 	// TODO: indicar que falten dades d'usuari
	            // 	mapping = "reg usuari";
	            // } else {
	            // 	// TODO: indicar que falten dades de vivenda
	            // 	mapping = "reg vivenda";
	            // }
	            mapping = "reg usuari";
	        }
	        this.navigate(mapping);
	    }
	    
	    this.vesARegistreVivenda = function () {
	        this.navigate('reg vivenda');
	    }
	    
	    // usuari : maqueta
	    // password: 12345
	    this.login = function () {
	        var usr = document.getElementById("idUsrLogin").value;
	        var pass = document.getElementById("idUsrPassword").value;
	        var mapping = "inici";
	        if ((usr == 'maqueta') && (pass = '12345')) {
	        	   registre.reset();
	        	   registre.show();
	        	   registre.showReserva();
	        	   reserva.reset();
	        	   reserva.showReserva();
	        	   
	            registre.nom = "maqueta";
	            registre.cognoms = "Cognom1 Cognom2";
	            registre.sexe = "home";
	            registre.correuElectronic = "correu@deproves.cat";
	            registre.telefon = "936666565";
	            registre.cp = "08001"
	            registre.carrer = "c/proves";
	            registre.numero = "1";
	            registre.pisPorta = "1er 1ra";
	            registre.altres = "aquest és l'usuari de proves";
	            registre.password = "12345";
	            registre.rePassword = "12345";
	            
	            mapping = "reserva dia";
	        }
	        if (usr != 'maqueta') {
	            alert('Usuari desconegut');
	        }
	        if ((usr == 'maqueta') && (pass != '12345')) {
	            alert('password erroni')
	        }
	        this.navigate(mapping);
	    }
	    
	    this.hideAll = function () {
	    	  document.getElementById("liAjuda").className = "";
	    	  document.getElementById("liRegUsuari").className = "";
	    	  document.getElementById("liRegVivenda").className = "";
	    	  document.getElementById("liResDia").className = "";
	    	  document.getElementById("liResTipus").className = "";
	    	  document.getElementById("liResPreu").className = "";
	    	  document.getElementById("liResPagament").className = "";	    	  
	    	  
	        document.getElementById("formCP").style.visibility = "hidden";
	        document.getElementById("formCP").style.display = "none";
	        document.getElementById("formCPNoValid").style.visibility = "hidden";
	        document.getElementById("formCPNoValid").style.display = "none";
	        document.getElementById("tabsRegistre").style.visibility = "hidden";
	        document.getElementById("tabsRegistre").style.display = "none";
	        document.getElementById("formRegistreVivenda").style.visibility = "hidden";
	        document.getElementById("formRegistreVivenda").style.display = "none";
	        document.getElementById("formRegistreUsuari").style.visibility = "hidden";
	        document.getElementById("formRegistreUsuari").style.display = "none";
	        document.getElementById("tabsReserva").style.visibility = "hidden";
	        document.getElementById("tabsReserva").style.display = "none";
	        document.getElementById("formReservaDia").style.visibility = "hidden";
	        document.getElementById("formReservaDia").style.display = "none";
	        document.getElementById("formReservaTipus").style.visibility = "hidden";
	        document.getElementById("formReservaTipus").style.display = "none";
	        document.getElementById("formReservaPreu").style.visibility = "hidden";
	        document.getElementById("formReservaPreu").style.display = "none";
	        document.getElementById("formReservaPagament").style.visibility = "hidden";
	        document.getElementById("formReservaPagament").style.display = "none";
	        document.getElementById("formAjuda").style.visibility = "hidden";
	        document.getElementById("formAjuda").style.display = "none";
	        document.getElementById("formResum").style.visibility = "hidden";
	        document.getElementById("formResum").style.display = "none";
	    }
	    
	    this.navigate = function (mapping) {
	        this.hideAll();
	        if (mapping == "error cp") {
	            document.getElementById("formCPNoValid").style.visibility = "visible";
	            document.getElementById("formCPNoValid").style.display = "block";
	        }
	        if (mapping == "inici") {
	            registre.reset();
	            reserva.reset();
	            document.getElementById("formCP").style.visibility = "visible";
	            document.getElementById("formCP").style.display = "block";
	        }
	        if (mapping == "reg usuari") {
	        	   document.getElementById("liRegUsuari").className = "active";
	            registre.carregar();
	            document.getElementById("tabsRegistre").style.visibility = "visible";
	            document.getElementById("tabsRegistre").style.display = "block";
	            document.getElementById("formRegistreUsuari").style.visibility = "visible";
	            document.getElementById("formRegistreUsuari").style.display = "block";
	            registre.show();
	        }
	        if (mapping == "reg vivenda") {
	        	   document.getElementById("liRegVivenda").className = "active";
	            registre.carregar();
	            document.getElementById("tabsRegistre").style.visibility = "visible";
	            document.getElementById("tabsRegistre").style.display = "block";
	            document.getElementById("formRegistreVivenda").style.visibility = "visible";
	            document.getElementById("formRegistreVivenda").style.display = "block";
	            registre.show();
	        }
	        if (mapping == "reserva dia") {
	        	   document.getElementById("liResDia").className = "active";
	        	   reserva.carregar();
	            document.getElementById("tabsReserva").style.visibility = "visible";
	            document.getElementById("tabsReserva").style.display = "block";
	            document.getElementById("formReservaDia").style.visibility = "visible";
	            document.getElementById("formReservaDia").style.display = "block";
	            registre.showReserva();
	            reserva.showReserva();
	        }
	        if (mapping == "reserva tipus") {
	        	   document.getElementById("liResTipus").className = "active";
	        	   reserva.carregar();
	            document.getElementById("tabsReserva").style.visibility = "visible";
	            document.getElementById("tabsReserva").style.display = "block";
	            document.getElementById("formReservaTipus").style.visibility = "visible";
	            document.getElementById("formReservaTipus").style.display = "block";
	            registre.showReserva();
	            reserva.showReserva();
	        }
	        if (mapping == "reserva preu") {
	        	   document.getElementById("liResPreu").className = "active";
	        	   reserva.carregar();
	            document.getElementById("tabsReserva").style.visibility = "visible";
	            document.getElementById("tabsReserva").style.display = "block";
	            document.getElementById("formReservaPreu").style.visibility = "visible";
	            document.getElementById("formReservaPreu").style.display = "block";
	            registre.showReserva();
	            reserva.showReserva();
	        }
	        if (mapping == "reserva pagament") {
	        	   document.getElementById("liResPagament").className = "active";	
	        	   reserva.carregar();
	            document.getElementById("tabsReserva").style.visibility = "visible";
	            document.getElementById("tabsReserva").style.display = "block";
	            document.getElementById("formReservaPagament").style.visibility = "visible";
	            document.getElementById("formReservaPagament").style.display = "block";
	            registre.showReserva();
	            reserva.showReserva();
	        }
	        if (mapping == "ajuda") {
	        	   document.getElementById("liAjuda").className = "active";
	            document.getElementById("formAjuda").style.visibility = "visible";
	            document.getElementById("formAjuda").style.display = "block";
	        }
	        if (mapping == "resum") {
	            document.getElementById("formResum").style.visibility = "visible";
	            document.getElementById("formResum").style.display = "block";
	        }
	        if (mapping == "final") {
	        	   alert('Va a efectuar a la passarel·la de pagament. Fi de la simulació');
	        }
	        if (mapping == "cancel") {
	            this.navigate('reserva pagament');
	        }
	    }
	}
