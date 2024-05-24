// This é o objeto sendo referenciado naquele momento
// Em contexto global de browser, por exemplo o this será o 'window'
// Entretanto, pode variar em outros contextos

// Ex: f1(){ consolo.log(this == window)} --> True
// document.getElementByTagName('body')[0].onclick = f1 --> False, pois o objeto em questão deixou de ser o window
