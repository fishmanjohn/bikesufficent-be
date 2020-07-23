
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, category: 'Mountain', sub_category:'Downhill', model_high: 'Santa Cruz V10cc 29 Reserve, $10,500', model_mid: 'Specialized Demo Expert, $5,000', model_budget:'YT Tues Comp, $3,500'},
        {id: 2, category: 'Mountain', sub_category:'Freeride', model_high: 'Yeti SB165 T3 AXS, $10,700', model_mid: 'YT Capra Pro Race, $5,500', model_budget:'Commencal Clash Essential, $3,500'},
        {id: 3, category: 'Mountain', sub_category:'Enduro', model_high: 'Specialized S-Works Enduro, $9,750', model_mid: 'Raaw Madonna V2, $5,200', model_budget:'Privateer 161, $3,100'},
        {id: 4, category: 'Mountain', sub_category:'All Mountain', model_high: 'Santa Cruz Bronson cc Reserve $8,300', model_mid: 'Specialized Stumpjumper Expert Carbon, $5,920', model_budget:'Ibis Ripmo AF Deore, $3,200'},
        {id: 5, category: 'Mountain', sub_category:'Trail', model_high: 'Uno Dash Race, $9,200', model_mid: 'Santa Cruz Tallboy c XT, $6,000', model_budget:'Diamond Back Release 29 2, $2,800'},
        {id: 6, category: 'Mountain', sub_category:'Trail Hardtail', model_high: 'Norco Torrent HT S1, $3,150', model_mid: 'Santa Cruz Chameleon C R, $2,700', model_budget:'Kona Honzo, $1,500'},
        {id: 7, category: 'Mountain', sub_category:'Down Country', model_high: 'Specialized S-Works Epic EVO, $11,550', model_mid: 'Transition Spur XO1, $6,000', model_budget:'Kona Hei Hei, $2,600'},
        {id: 8, category: 'Mountain', sub_category:'Cross Country Race', model_high: 'SCOTT SPARK RC 900 SL AXS, $12,000', model_mid: 'Trek Supercaliber 9.8 $5,900', model_budget:'Giant Anthem 29 2, $3,000'},
        {id: 9, category: 'Mountain', sub_category:'Cross Country Race Hardtail', model_high: 'Specialized S-Works Epic Hardtail AXS, $9,520', model_mid: 'Santa Cruz Highball C S, $3,500', model_budget:'Specialized Chisel Comp, $1,620'},
        {id: 10, category: 'Mountain', sub_category:'Slope Style', model_high: 'Specialized P.Slope, $2,500', model_mid: 'Canyon Stitched 720, $2,103', model_budget:'Polygon Trid ZZ, $2,000'},
        {id: 11, category: 'Mountain', sub_category:'Dirt Jump', model_high: 'YT Dirt Love, $1,400', model_mid: 'Kona Shonky, $1,400', model_budget:'NS Metroplis 3, $849'},
        {id: 12, category: 'Touring', sub_category:'Road Touring', model_high: 'Bombtrack Hook EXT-C, $3,300', model_mid: 'Kona Sutra LTD, $2,200', model_budget:'Trek 520 Disc, $1,700'},
        {id: 13, category: 'Touring', sub_category:'Bikepacking', model_high: 'All City Electric Queen, $2,400', model_mid: 'Salsa Timberjack XT, $2,000', model_budget:'Surly ECR, $1,900'},
        {id: 14, category: 'Touring', sub_category:'Expidition Touring', model_high: 'Salsa Blackborow, $3,300', model_mid: 'Jones Plus LWB, $2,050', model_budget:'Surly Pugsley, $1,900'},
        {id: 15, category: 'Touring', sub_category:'Ultra Marathon', model_high: 'Salsa Cutthroat GRX Di2, $5,799', model_mid: 'Salsa Fargo Apex1, $2,200', model_budget:'Surly Ogre, $1,500'},
        {id: 16, category: 'Road', sub_category:'Time Trial / Triathalon', model_high: 'Specialized S-Works Shiv Disc, $13,000', model_mid: 'Quintana Roo PRSIX, $5,200', model_budget:'Felt IA Rim Brake, $3,300'},
        {id: 17, category: 'Road', sub_category:'Competitive Road', model_high: 'Pinarello Dogma F12, $12,000', model_mid: 'Specialized Tarmac SL6 Disc Pro, $6,700', model_budget:''},
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
