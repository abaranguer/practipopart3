function validarCP() {
    codisValids = ['08001','08002','08003','08004','08005','08006','08007','08008','08009','08010',
		        '08011','08012','08013','08014','08015','08016','08017','08018','08019','08020',
			'08021','08022','08023','08024','08025','08026','08027','08028','08029','08030',
			'08031','08032','08033','08034','08035','08036','08037','08038','08039','08040',
			'08041','08042'];

	var codiPostal = document.getElementById("idCp").value;
	alert("cp: " + codiPostal + "; included? " + codisValids.includes(codiPostal));
 }
