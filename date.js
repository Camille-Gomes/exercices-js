/*

Pour chaque date n dans une liste, on veut avoir ces résultats affichés en fonction des dates de la liste :

la date qui correspond au dernier jour du mois précédant
la date avec les heures et minutes mises à 0
la date au format DD/MM/YYYY hh:mm
le nombre de la semaine dans l’année 

*/

/** la date qui correspond au dernier jour du mois précédant
 * @param {Date} date
 *
 * @returns {String}
 */
function getLastDayOfPreviousMonth(date) {
    var lastDayOfPreviousMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        0,
    );

    return lastDayOfPreviousMonth.toLocaleDateString();
}

/**la date courante
 *
 * @param {Date} date
 *
 * @returns {String}
 */
function getCurrentDate(date) {
    return (
        ("0" + date.getDate()).slice(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        date.getFullYear()
    );
}

/** la date avec les heures et minutes mises à 0
 * @param {Date} date
 *
 * @returns {String}
 */
function getDateHours0(date) {
    var currentDate = getCurrentDate(date);

    var date_0 = new Date(date.getTime());
    date_0.setHours(0, 0);

    var setTime = date_0.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return currentDate + " " + setTime;
}

/** la date au format DD/MM/YYYY hh:mm
 *
 * @param {Date} date
 *
 * @returns {String}
 */
function getFormat(date) {
    var currentDate = getCurrentDate(date);

    var currentTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    return currentDate + " " + currentTime;
}

/** le nombre de la semaine dans l’année
 * @param {Date} date
 *
 * @returns {String}
 */
function getWeek(date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    return (
        Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7) - 1
    );
}

/** convertir date FR en date US
 * @param {String} date
 *
 * @returns {String}
 */
function convertToUs(date) {
    var maDateStr = date.split(" ")[0];
    var time = date.split(" ")[1];

    var dateElement = maDateStr.split("/");
    var day = dateElement[0];
    var month = dateElement[1];
    var year = dateElement[2];

    return month + "/" + day + "/" + year + " " + time;
}

/** Récupérer la date en format US
 *
 * @param {String} date
 *
 * @returns {Date}
 */
function getDateUs(date) {
    return new Date(convertToUs(date));
}

var dateArray = [
    "23/10/2020 14:38:06",
    "16/12/2021 15:30:47",
    "02/07/2021 17:25:32",
    "03/02/2021 09:08:12",
];

/** afficher les différents résultats d'une date
 *
 * @param {String} maDate
 */
function displayInfoDate(maDate) {
    var date = new Date(maDate);

    console.log(getLastDayOfPreviousMonth(date));
    console.log(getDateHours0(date));
    console.log(getFormat(date));
    console.log(getWeek(date));
}

/** afficher les différents résultats de toutes les dates du tableau
 *
 * @param {Array} dateArray
 *
 * @param {void}
 */
function displayInfoDateArray(dateArray) {
    dateArray.map((date) => displayInfoDate(convertToUs(date)));
}

displayInfoDateArray(dateArray);

function test() {
    var date1 = new Date(convertToUs("23/10/2020 14:38:06"));

    console.log(getLastDayOfPreviousMonth(date1) == "30/09/2020");
    console.log(getDateHours0(date1) == "23/10/2020 00:00");
    console.log(getFormat(date1) == "23/10/2020 14:38");
    console.log(getWeek(date1) == "42");

    var date2 = new Date(convertToUs("16/12/2021 15:30:47"));

    console.log(getLastDayOfPreviousMonth(date2) == "30/11/2021");
    console.log(getDateHours0(date2) == "16/12/2021 00:00");
    console.log(getFormat(date2) == "16/12/2021 15:30");
    console.log(getWeek(date2) == "50");

    var date3 = new Date(convertToUs("02/07/2021 17:25:32"));

    console.log(getLastDayOfPreviousMonth(date3) == "30/06/2021");
    console.log(getDateHours0(date3) == "02/07/2021 00:00");
    console.log(getFormat(date3) == "02/07/2021 17:25");
    console.log(getWeek(date3) == "26");

    var date4 = new Date(convertToUs("03/02/2021 09:08:12"));

    console.log(getLastDayOfPreviousMonth(date4) == "31/01/2021");
    console.log(getDateHours0(date4) == "03/02/2021 00:00");
    console.log(getFormat(date4) == "03/02/2021 09:08");
    console.log(getWeek(date4) == "5");
}

test();
