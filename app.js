var ctx = document.getElementById('myChart').getContext('2d');

const pokeCart = [
    {
        id: 'Charizard',
        captured: 12
    },
    {
        id: 'Squirtle',
        captured: 19
    },
    {
        id: 'Butterfree',
        captured: 15
    },
    {
        id: 'Weedle',
        captured: 9
    },
    {
        id: 'Kakuna',
        captured: 12
    },
    {
        id: 'Bulbasaur',
        captured: 9
    }
];

// munging / data wrangling
// const pokemonNumbers = [];
// const labels = [];

// for (let i = 0; i < pokeCart.length; i++) {
//     const cartItem = pokeCart[i];

//     pokemonNumbers.push(cartItem.captured);
//     labels.push(cartItem.id);
// }

// .map is an array method that 'munges' our arrays for us

const pokemonNumbers = pokeCart.map(cartItem => cartItem.captured);

const labels = pokeCart.map(cartItem => cartItem.id);

const colors = [
    'lavender',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
const borders = [
    'orange',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        // labels: labels,
        labels,
        datasets: [{
            label: '# of Pokemo Caught',
            data: pokemonNumbers,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});