import axios from 'axios';

import { CustomMap} from './CustomMap';

const customMap = new CustomMap('map');

// Gets circuits
const getCircuits = (year: number) => {
    let url = `http://ergast.com/api/f1/${year}/circuits.json`;

    axios.get(url).then(res => {
        const circuits = res.data.MRData.CircuitTable.Circuits;
        circuits.forEach(circuit => {
            customMap.addMarker(circuit)
        });
    });
}

// Gets driver standings
const getStandings = (year: number) => {
    let url = `http://ergast.com/api/f1/${year}/driverStandings.json`;

    axios.get(url).then(res => {
        const standings = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        populateStandings(standings);
    });
}

// Dynamically populates the driver standings based on user input
const populateStandings = (result) => {
    removeElements('driver');
    const table = document.getElementById("standingsTable");

    // helper function        
    function addCell(tr, text) {
        var td = tr.insertCell();
        td.textContent = text;
        return td;
    }

    // insert data
    result.forEach(function (item) {
        var row = table.insertRow();
        row.className = "driver";
        addCell(row, item.position);
        addCell(row, `${item.Driver.givenName} ${item.Driver.familyName}`);
        addCell(row, item.points);
    });
}

// Deletes old drivers from the table
const removeElements = (className: string) => {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Gets circuits and standings based on user input
var selectYear =  document.getElementById('selectYear');
if (typeof(selectYear) != 'undefined' && selectYear != null) {
    selectYear.onchange = (e) => {
        getCircuits(e.target.value);
        getStandings(e.target.value);
    }
}

// Gets current year circuits and standings on load
getCircuits(new Date().getFullYear());
getStandings(new Date().getFullYear());