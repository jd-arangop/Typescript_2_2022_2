import { Serie } from "./Serie.js";

import { dataSeries } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const cardDescription: HTMLElement = document.getElementById("card")!;

renderSeriesInTable(dataSeries);
renderAverageSeasons(getAverageSeasons(dataSeries));


function renderSeriesInTable(dataSeries: Serie[]): void {
    dataSeries.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td>
                                    <button type="button" class="btn btn-link" id="button-serie-${serie.id}">${serie.nombre}</button>
                                </td>
                                <td>${serie.canal}</td>
                                <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
        let btnSerie: HTMLElement = document.getElementById("button-serie-" + serie.id)!;
        btnSerie.onclick = () => renderCardDescription(serie);
    });
}

function getAverageSeasons(dataSeries: Serie[]): number {
    let averageSeasons: number = 0;
    dataSeries.forEach(serie => {
        averageSeasons = averageSeasons + serie.temporadas;
    });
    averageSeasons = averageSeasons / dataSeries.length;
    return averageSeasons;
}

function renderAverageSeasons(seasons: number): void {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Temporadas promedio: ${seasons}</td>`
    seriesTbody.appendChild(trElement);
}

function renderCardDescription(serie: Serie): void {
    cardDescription.innerHTML = `<img class="card-img-top" src=${serie.imagen} alt=${serie.imagen}>
                                <div class="card-body">
                                    <h5 class="card-title">${serie.nombre}</h5>
                                    <p class="card-text">${serie.sinopsis}</p>
                                </div>
                                <div class="card-body">
                                    <a href=${serie.web} class="card-link">Ver en ${serie.canal}</a>
                                </div>`;
}
