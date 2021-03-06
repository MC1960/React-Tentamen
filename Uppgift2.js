import React from 'react'
import {useEffect,useState} from 'react'

export const Uppgift2 = () => {
	
	const [counter, setCounter]= useState(0)

	return (
		<div>
			<h1>Uppgift 2</h1>
			
			<h2>Clicka på nummret för att se att den stiger upp</h2>
			<h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
		</div>
	)
}


/*

INSTRUKTIONER FÖR UPPGIFT 2:
Denna vy skall använda sig av useState hook.

	1. Importera samt instansiera en ny useState.
	Du kan döpa variablen samt funktionsnamnet i din useState deklaration efter fri vilja. (valfritt)

	2. Initialvärdet skall vara en valfri sträng

	3. Värdet av ditt state skall synas i <h2> taggen på rad 7

	4. Det värde som matas in i <input> taggen på rad 8 skall uppdateras till att
	   vara det värde som finns i ditt state

 */
