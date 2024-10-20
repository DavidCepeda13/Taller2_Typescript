import { Serie } from "./serie.js";
import { dataSeries } from "./data.js";

let seriesRows: HTMLElement = document.getElementById("series")!;
let averageSeasons: HTMLElement = document.getElementById("avgSeasons")!;
let serieCard: HTMLElement = document.getElementById("serieCard")!;
let count: number = 0;
let sum: number = 0;

if (seriesRows) {
    seriesRows.innerHTML = '';
    console.log(dataSeries);
    renderSeriesInTable(dataSeries);
} else {
    console.error('No se encontró el elemento con ID "series".');
}

let row = document.createElement('tr');
row.innerHTML = `<td>Seasons average: ${sum/count}</td>`;
averageSeasons.appendChild(row);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((serie) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id.toString()}</td>
            <td id="name">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons.toString()}</td>
        `;
        count = count + 1;
        sum = serie.seasons + sum;

        row.addEventListener('click', () => {
            showSerieCard(serie);
        });

        seriesRows.appendChild(row);
    });
}

function showSerieCard(serie: Serie): void{
    serieCard.innerHTML = `<img src=${serie.image} class="card-img-top" alt=${serie.name}>
                            <div class="card-body">
                                <h3> ${serie.name} </h3>
                                <p class="card-text"> ${serie.descripcion} 
                                </p>
                                <p>
                                    <a id="link" href=${serie.source} target="_blank">${serie.source}</a>
                                </p>
                            </div>`
}