
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, category: 'Mountain', sub_category:'Downhill', model_high: 'Santa Cruz V10cc 29 Reserve, $10,500.00', model_mid: 'Specialized Demo Race', model_budget:''},
        {id: 2, category: 'Mountain', sub_category:'Freeride', model_high: '', model_mid: '', model_budget:''},
        {id: 3, category: 'Mountain', sub_category:'Enduro', model_high: '', model_mid: '', model_budget:''},
        {id: 4, category: 'Mountain', sub_category:'All Mountain', model_high: '', model_mid: '', model_budget:''},
        {id: 5, category: 'Mountain', sub_category:'Trail', model_high: '', model_mid: '', model_budget:''},
        {id: 6, category: 'Mountain', sub_category:'Trail Hardtail', model_high: '', model_mid: '', model_budget:''},
        {id: 7, category: 'Mountain', sub_category:'Down Country', model_high: '', model_mid: '', model_budget:''},
        {id: 8, category: 'Mountain', sub_category:'Cross Country Race', model_high: '', model_mid: '', model_budget:''},
        {id: 9, category: 'Mountain', sub_category:'Cross Country Race Hardtail', model_high: '', model_mid: '', model_budget:''},
        {id: 10, category: 'Mountain', sub_category:'Slope Style', model_high: '', model_mid: '', model_budget:''},
        {id: 11, category: 'Mountain', sub_category:'Dirt Jump', model_high: '', model_mid: '', model_budget:''},
        {id: 12, category: 'Touring', sub_category:'Road Touring', model_high: '', model_mid: '', model_budget:''},
        {id: 13, category: 'Touring', sub_category:'Dirt Road Touring', model_high: '', model_mid: '', model_budget:''},
        {id: 14, category: 'Touring', sub_category:'Expidition Touring', model_high: '', model_mid: '', model_budget:''},
        {id: 15, category: 'Touring', sub_category:'Ultra Marathon', model_high: '', model_mid: '', model_budget:''},
        {id: 16, category: 'Road', sub_category:'Time Trial / Triathalon', model_high: '', model_mid: '', model_budget:''},
        {id: 17, category: 'Road', sub_category:'Competitive Road', model_high: '', model_mid: '', model_budget:''},
        {id: 18, category: 'Road', sub_category:'Aero Road', model_high: '', model_mid: '', model_budget:''},
        {id: 19, category: 'Road', sub_category:'Critirum Race', model_high: '', model_mid: '', model_budget:''},
        {id: 20, category: 'Road', sub_category:'Gravel / Adventure', model_high: '', model_mid: '', model_budget:''},
        {id: 21, category: 'Road', sub_category:'Comfort Road', model_high: '', model_mid: '', model_budget:''},
        {id: 22, category: 'Road', sub_category:'Cyclocross Race', model_high: '', model_mid: '', model_budget:''},
        {id: 23, category: 'Road', sub_category:'Track', model_high: '', model_mid: '', model_budget:''},
        {id: 24, category: 'Active', sub_category:'Comfort', model_high: '', model_mid: '', model_budget:''},
        {id: 25, category: 'Active', sub_category:'Fitness', model_high: '', model_mid: '', model_budget:''},
        {id: 26, category: 'Active', sub_category:'Single Speed', model_high: '', model_mid: '', model_budget:''},
        {id: 27, category: 'Active', sub_category:'Cargo Front Load', model_high: '', model_mid: '', model_budget:''},
        {id: 28, category: 'Active', sub_category:'Cargo Rear load', model_high: '', model_mid: '', model_budget:''},
        {id: 29, category: 'BMX', sub_category:'Big BMX', model_high: '', model_mid: '', model_budget:''},
        {id: 30, category: 'BMX', sub_category:'Freestyle BMX Dirt / Park', model_high: '', model_mid: '', model_budget:''},
        {id: 31, category: 'BMX', sub_category:'Freestyle BMX Street', model_high: '', model_mid: '', model_budget:''},
        {id: 32, category: 'BMX', sub_category:'Freestyle BMX Flatland', model_high: '', model_mid: '', model_budget:''},
        {id: 33, category: 'BMX', sub_category:'BMX Race Pro Class', model_high: '', model_mid: '', model_budget:''},
        {id: 34, category: 'BMX', sub_category:'BMX Race Crusier', model_high: '', model_mid: '', model_budget:''},
      ]);
    });
};
