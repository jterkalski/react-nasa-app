export const subtractDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
};

export const getIso8601Date = (date) => {
    if (date == null) date = new Date();

    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return year + '-' + month + '-' + day;
};