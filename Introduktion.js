import React from 'react'

	function Introduktion({firstName,lastName, courseName}){	

return (
		<div>
			<h2>Namn: {firstName}</h2>
			<h2>Efternamn: {lastName}</h2>
			<h2>Kurs: {courseName} </h2>
		</div>
	)
}
export default Introduktion
/*

INSTRUKTIONER FÖR UPPGIFT 1:

	1. Denna komponent skall ta emot 3x prop värden som fyller i de färdiga fälten (fornamn, efternamn, kurs).

	2. Komponenten skall sedan importeras och användas i Uppgift1.js

	3. Värdena som skickas med skall vara korrekta(ditt namn, ditt klassnamn, kursens namn)

 */