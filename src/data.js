export const columns = [
  {
    field: 'flightNumber',
    label: 'Flight Number',
    sortable: true,
    draggable: true,
  },
  {
    field: 'airline',
    label: 'Airline',
    sortable: true,
    draggable: true,
  },
  {
    field: 'destination',
    label: 'Destination',
    sortable: true,
    draggable: true,
  },
  {
    field: 'scheduled',
    label: 'Scheduled',
    sortable: true,
    draggable: true,
  },
];

export const rows = [
  {
    flightNumber: 'BD674',
    airline: 'Turkish Airlines',
    destination: 'Istanbul-Ankara',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'BA1326',
    airline: 'American Airlines',
    destination: 'Washington-Los Angeles',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'BA1476',
    airline: 'United Airlines',
    destination: 'Manchester-Istanbul',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'GF5232',
    airline: 'Delta Air Lines',
    destination: 'London-Paris',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'AA8025',
    airline: 'Qatar Airways',
    destination: 'Doha-Istanbul',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'AA7991',
    airline: 'Ryanair',
    destination: 'Milano-Paris',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'AA8017',
    airline: 'Lufthansa',
    destination: 'Berlin-London',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'BA1442',
    airline: 'Malaysia Airlines',
    destination: 'Pekin-Istanbul',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'BA1388',
    airline: 'Iberia Express',
    destination: 'Barcelona-Madrid',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'LN3211',
    airline: 'Alba Star',
    destination: 'Madrid-Barcelona',
    scheduled: getRandomDate(),
  },
  {
    flightNumber: 'TK3946',
    airline: 'Air Europa',
    destination: 'Prag-Atina',
    scheduled: getRandomDate(),
  },
];

function getRandomDate() {
  const date = new Date();
  const randomDay = Math.random() * 100;
  date.setDate(new Date().getDate() + randomDay);
  return new Date(date).toDateString();
}
