export function getFormattedDate(date) {
    console.log(`date`, date)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}