
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { id: 1, coordinates: '37.862360, -119.532533', name: 'Yosemite' },
        { id: 2, coordinates: '-25.347388, 131.032444', name: 'Ayers rock' },
        { id: 3, coordinates: '26.650019, 15.120538', name: 'Sahara Desert' },
        { id: 4, coordinates: '40.714595, -74.000863', name: 'New York' },
        { id: 5, coordinates: '-40.624116, 175.284702', name: 'Levin' },
        { id: 6, coordinates: '35.729569, 139.723029', name: 'Tokyo' },
        { id: 7, coordinates: '-17.923647, 25.854105', name: 'Victoria Falls' },
        { id: 8, coordinates: '-41.126072, 175.057639', name: 'Upper Hut' },
        { id: 9, coordinates: '-44.396954, 171.254369', name: 'Timaru' },
        { id: 10, coordinates: '7.952409, 98.336862', name: 'Phuket' }
      ]);
    });
};
