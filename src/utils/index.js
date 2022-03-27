export const calcLoan = (sum, period, percentage, method) => {
  const res = []
  let givenSum = 0
  let totalPercent = 0

  for (let i = 1; i <= period; i++) {
    const monthSums =
      method === 0
        ? calcWithEqualRepaymentsOfThePrincipalAmount(
            period,
            percentage,
            sum,
            i
          )
        : calcWithEqualRepayments(period, percentage, sum, i, givenSum)
    res.push(monthSums)
    givenSum += monthSums.capitalSum
    totalPercent += monthSums.percentSum
  }
  return {
    totalMainSum: sum,
    totlaPercentSum: parseFloat(totalPercent.toFixed(2)),
    totalSum: parseFloat(sum + totalPercent),
    result: res,
  }
}

const calcWithEqualRepaymentsOfThePrincipalAmount = (
  period,
  percent,
  sum,
  monthIndex
) => {
  const manthPerc = percent / 12 / 100
  const middleSum = parseFloat((sum / period).toFixed(2))
  const percentSum = parseFloat(
    ((sum - (monthIndex - 1) * middleSum) * manthPerc).toFixed(2)
  )

  return {
    month: monthIndex,
    capitalSum: middleSum,
    percentSum,
    totalSum: (middleSum + percentSum).toFixed(2),
  }
}

const calcWithEqualRepayments = (
  period,
  percent,
  sum,
  monthIndex,
  givenSum
) => {
  const manthPerc = percent / 12 / 100
  const avrg =
    (manthPerc * Math.pow(1 + manthPerc, period)) /
    (Math.pow(1 + manthPerc, period) - 1)
  const avrgSum = (avrg * sum).toFixed(2)
  const percentSum = parseFloat(((sum - givenSum) * manthPerc).toFixed(2))
  const capitalSum = avrgSum - percentSum
  return {
    month: monthIndex,
    capitalSum,
    percentSum,
    totalSum: avrgSum,
  }
}
