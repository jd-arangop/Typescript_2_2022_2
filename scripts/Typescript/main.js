import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var cardDescription = document.getElementById("card");
renderSeriesInTable(dataSeries);
renderAverageSeasons(getAverageSeasons(dataSeries));
function renderSeriesInTable(dataSeries) {
    dataSeries.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>\n                                    <button type=\"button\" class=\"btn btn-link\" id=\"button-serie-").concat(serie.id, "\">").concat(serie.nombre, "</button>\n                                </td>\n                                <td>").concat(serie.canal, "</td>\n                                <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        var btnSerie = document.getElementById("button-serie-" + serie.id);
        btnSerie.onclick = function () { return renderCardDescription(serie); };
    });
}
function getAverageSeasons(dataSeries) {
    var averageSeasons = 0;
    dataSeries.forEach(function (serie) {
        averageSeasons = averageSeasons + serie.temporadas;
    });
    averageSeasons = averageSeasons / dataSeries.length;
    return averageSeasons;
}
function renderAverageSeasons(seasons) {
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Temporadas promedio: ".concat(seasons, "</td>");
    seriesTbody.appendChild(trElement);
}
function renderCardDescription(serie) {
    cardDescription.innerHTML = "<img class=\"card-img-top\" src=".concat(serie.imagen, " alt=").concat(serie.imagen, ">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                                    <p class=\"card-text\">").concat(serie.sinopsis, "</p>\n                                </div>\n                                <div class=\"card-body\">\n                                    <a href=").concat(serie.web, " class=\"card-link\">Ver en ").concat(serie.canal, "</a>\n                                </div>");
}
