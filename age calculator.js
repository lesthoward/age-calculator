const calculateButton = document.querySelector('#age__calculate');
calculateButton.addEventListener('click', () => ageCalculator())

function ageCalculator () {
    let birthYear, birthMonth
    const datePicker = new Date(document.querySelector('.age__date').value)
    // Tiempo actual
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth() + 1
    const currentDay = today.getDate()
    
    // Detalles elegidos del input type="date"
    const birthDetails = {
        year: datePicker.getFullYear(),
        month: datePicker.getMonth() + 1,
        day: datePicker.getDate() + 1
    }
    
    // Validar si las fecha está por debajo de la actual
    if (
        birthDetails.year > currentYear || 
        (birthDetails.year === currentYear && birthDetails.month > currentMonth) ||
        (birthDetails.year == currentYear && birthDetails.month === currentMonth && birthDetails.day > currentDay)
        
        ) {
            alert('Not born yet');
        }
        
        // Esto para que el input no salté de mes en la fecha 1 sino en la del día actual. Porque los input date cuando es fecha 01 me señala en código que es 31 o 30 etc.
        if (currentDay < birthDetails.day) {
            birthDetails.month += 1
        }
        
        // Esto es para luego añadir la funcionalidad de cuanto tiempo ha pasado, incluso si supera la fecha del año actual.
        if (birthDetails.year < currentYear) {
            birthYear = currentYear - birthDetails.year
    } else {
        birthYear = Math.abs(birthDetails.year - currentYear)
    }
    // La diferencia de años matemáticamente es mayor a 0 por ejemplo: 2020 - 2021, sin embargo, estoy en agosto y pudo haber nacido en septiembre. Si esto sucede voy a restar un año y sumo la cantidad del mes actual con la diferencia faltante del año de nacimiento para llegar 12, así se completan las cifras del mes.
    const diffYear = currentYear - birthDetails.year
    if (diffYear > 0 && currentMonth < birthDetails.month) {
        birthYear--
        birthMonth = currentMonth + (12 - birthDetails.month)
    } else {    
        birthMonth = currentMonth - birthDetails.month
    }

    document.querySelector('#age__year').textContent = birthYear
    document.querySelector('#age__months').textContent = birthMonth
}











// function calculateTheTime () {
//     const hereToday = new Date()
//     const currentYear = hereToday.getFullYear()
//     // Es más sencillo si le sumo uno a los meses, así lo comparo con los meses reales y no sea 0 = enero, sino 1 igual a enero
//     const currentMonth = hereToday.getMonth() 
//     const currentDay = hereToday.getDate()

//     const datePicker = document.querySelector('.age__date').value
//     const today = new Date(datePicker)

//     const birthYear = today.getFullYear(datePicker)
//     let birthMonth = today.getMonth(datePicker)
//     const birthDay = today.getDate(datePicker) 

//     birthDatails = {
//         year: currentYear - birthYear,
//         month: currentMonth - birthMonth,
//         // Cuando tomo los datos del input y selecciono 01 de enero 2021, me señala que el valor del día uno es 31, por eso sumo un dígito
//         day: currentDay - birthDay
//     }

//     const diffYear = currentYear - birthYear 

//     // La diferencia de años matemáticamente es mayor a 0 por ejemplo: 2020 - 2021, sin embargo, estoy en agosto y pudo haber nacido en septiembre. Si esto sucede voy a restar un año y sumo la cantidad del mes actual con la diferencia faltante del año de nacimiento para llegar 12, así se completan las cifras del mes. No obstante la regla escrita abajo no aplica si los meses del mes actual no son mayores a los del nacimiento, por lo que no podria existir una resta en esta ecuación.
//     if (diffYear > 0 && currentMonth < birthMonth) {
//         console.log('Incluido');
//         birthDatails.year -= 1
//         birthDatails.month =  currentMonth + (12 - birthMonth)  
//     }


//     document.querySelector('#age__year'). textContent = birthDatails.year
//     document.querySelector('#age__months'). textContent = birthDatails.month
// }