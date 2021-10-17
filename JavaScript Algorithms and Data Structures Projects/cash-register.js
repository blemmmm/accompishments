function arrToObj(arr) {
  let obj = {}
  let copiedArr = [...arr] 
  copiedArr.reverse().forEach( item => {
    obj[item[0]] = item[1]
  })
  return obj
}

function checkCashRegister(price, cash, cid) {
  const unitAmount = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  const cidObj = arrToObj(cid)
  const unitAmtObj = arrToObj(unitAmount)
  let updatedCidObj = {}
  let change = cash - price
  let result = {status: "", change: []}

  for (let unit of Object.keys(cidObj)) {
    let tempAmt = Math.floor(change / unitAmtObj[unit])
    let currentAmt = Math.round(cidObj[unit] / unitAmtObj[unit])

    let amt = currentAmt <= tempAmt ? currentAmt : tempAmt;
    let amtVal = amt * unitAmtObj[unit]

    updatedCidObj[unit] = parseFloat((cidObj[unit] - amtVal).toFixed(2))

    if (amt > 0) {
      result.change.push([unit, amtVal])
      change = parseFloat((change - amtVal).toFixed(2))
    }
  }

  if (change > 0) {
    result = {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (Object.keys(updatedCidObj).every(unit => 0 === updatedCidObj[unit])){
    result = { status: 'CLOSED', change: cid}
  } else {
    result.status = 'OPEN'
  }

  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // {status: "INSUFFICIENT_FUNDS", change: []}