#target photoshop

function isDocumentSaved(doc) {
	// this is hella ghetto. the only definitive way to know whether
	// a document hasn't been saved at all is if it has no path.
	// but if it has no path and you try to access it, it throws an exception
	var saved = false;
	try {
		var path = doc.path;
		saved = true;
	} catch(e) { }
	return saved;
}

if (app.documents.length) {
	var current = app.activeDocument;

	for (var i = 0; i < app.documents.length; i++) {
		var doc = app.documents[i];
		app.activeDocument = doc;

		try {
			// 'save' with DialogModes.NO = Save
			// 'save' with DialogModes.ALL = Save As
			var idsave = charIDToTypeID('save');
			var dialogMode = isDocumentSaved(doc) ? DialogModes.NO : DialogModes.ALL;
			executeAction(idsave, undefined, dialogMode);
		} catch (e) {
			// just eat the errors. they're just gonna be "User canceled request" or whatev
		}
	}

	app.activeDocument = current;
}