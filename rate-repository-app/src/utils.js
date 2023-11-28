
export const digitChanger = (digitOld) => {
    let digit = Number(digitOld)
    if (digit > 1000) {
        return (String(Math.round(digit/100)/10)).concat("k")
    } 
    return digitOld
}