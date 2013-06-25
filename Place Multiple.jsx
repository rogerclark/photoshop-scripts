#target photoshop

function placeFile(file)
{
	// this is horrid output from ScriptListener, but it gets the job done.
	// the app.open() method will only turn PSD files into Smart Objects
	var idPlc = charIDToTypeID( "Plc " );
	var desc2 = new ActionDescriptor();
	var idnull = charIDToTypeID( "null" );
	desc2.putPath( idnull, file);
	var idFTcs = charIDToTypeID( "FTcs" );
	var idQCSt = charIDToTypeID( "QCSt" );
	var idQcsa = charIDToTypeID( "Qcsa" );
	desc2.putEnumerated( idFTcs, idQCSt, idQcsa );
	var idOfst = charIDToTypeID( "Ofst" );
	var desc3 = new ActionDescriptor();
	var idHrzn = charIDToTypeID( "Hrzn" );
	var idRlt = charIDToTypeID( "#Rlt" );
	desc3.putUnitDouble( idHrzn, idRlt, 0.000000 );
	var idVrtc = charIDToTypeID( "Vrtc" );
	var idRlt = charIDToTypeID( "#Rlt" );
	desc3.putUnitDouble( idVrtc, idRlt, 0.000000 );
	var idOfst = charIDToTypeID( "Ofst" );
	desc2.putObject( idOfst, idOfst, desc3 );
 
	executeAction( idPlc, desc2, DialogModes.NO );
}
 
var files = app.openDialog();
 
if (files) {
	for (var i = 0; i < files.length; i++) {
		placeFile(files[i]);
	}
}