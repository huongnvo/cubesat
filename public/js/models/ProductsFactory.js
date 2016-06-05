var ProductsFactory = function(Schema,mongoose,tree) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		var ProductSchema = new this.Schema({
			name: String, 			/* name of product */
			identifier: Number,		/* number of product */
			subsystem: String, 		/* subsystem of product */
			description: String 	/* short description of product */
		});
		ProductSchema.plugin(tree);
		this.product = mongoose.model('product', ProductSchema);
	}

	this.insertPart = function() {
		this.object = new this.product({
			name: 'root',
			identifier: 0,
			subsystem: 'none', 
			description: 'none' 
		});

		var tier0 = new this.product({
			name: 'DUBSAT-1',
			identifier: 1, 
			subsystem: 'dubs',
			description: 'none'
		});

		var part2 = new this.product({
			name: 'ADCS',
			identifier: 2,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssubpart1 = new this.product({
			name: 'Attitude Determination',
			identifier: 3,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssubpart2 = new this.product({
			name: 'Attitude Control',
			identifier: 4,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart1 = new this.product({
			name: 'Positioning Sensor',
			identifier: 5,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart2 = new this.product({
			name: 'Estimation Algorithm',
			identifier: 6,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart3 = new this.product({
			name: 'Magnetometers',
			identifier: 7,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart4 = new this.product({
			name: 'Photodiodes',
			identifier: 8,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart5 = new this.product({
			name: 'Sun Sensors',
			identifier: 9,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart6 = new this.product({
			name: 'Magnetorquers',
			identifier: 10,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart7 = new this.product({
			name: 'Control Algorithm',
			identifier: 11,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart8 = new this.product({
			name: "Reaction Wheels",
			identifier: 12,
			subsystem: 'adcs',
			description: 'none'
		});

		var part1 = new this.product({
			name: 'CDH',
			identifier: 13,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsubpart1 = new this.product({
			name: 'Main Flight Computer',
			identifier: 14, 
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsubpart2 = new this.product({
			name: 'Peripheral Subsystems',
			identifier: 15,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart1 = new this.product({
			name: 'Non-Volatile Memory',
			identifier: 16,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart2 = new this.product({
			name: 'Main Processor',
			identifier: 17,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart3 = new this.product({
			name: 'PPT Microcontroller',
			identifier: 18,
			subsystem: 'cdh',
			description: 'none'
		});


		var cdhssubpart4 = new this.product({
			name: 'ADCS Microcontroller',
			identifier: 19,
			subsystem: 'cdh',
			description: 'none'
		});


		var cdhssubpart5 = new this.product({
			name: 'COM1 Microcontroller',
			identifier: 20,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart6 = new this.product({
			name: 'COM2 Microcontroller',
			identifier: 21,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart7 = new this.product({
			name: 'EPS Microcontroller',
			identifier: 22,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart8 = new this.product({
			name: 'Sensors',
			identifier: 23,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart9 = new this.product({
			name: 'I2C Bus Line',
			identifier: 24,
			subsystem: 'cdh',
			description: 'none'
		});

		var part3 = new this.product({
			name: 'PS',
			identifier: 25,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart1 = new this.product({
			name: 'PPT',
			identifier: 26,
			subsystem: 'ps',
			description: 'none'
		});

		var psssubpart1 = new this.product({
			name: 'Electrodes',
			identifier: 27,
			subsystem: 'ps',
			description: 'none'
		});

		var psssubpart2 = new this.product({
			name: 'Discharge Electronics',
			identifier: 28,
			subsystem: 'ps',
			description: 'none'
		});

		var psssubpart3 = new this.product({
			name: 'Fuel Source',
			identifier: 29,
			subsystem: 'ps',
			description: 'none'
		});

		var psssubpart4 = new this.product({
			name: 'Frame/Body',
			identifier: 30,
			subsystem: 'ps',
			description: 'none'
		});

		var psssubpart5 = new this.product({
			name: 'Igniter Electronics',
			identifier: 31,
			subsystem: 'ps',
			description: 'none'
		});

		var psssubpart6 = new this.product({
			name: 'Energy Storage System',
			identifier: 32,
			subsystem: 'ps',
			description: 'none'
		});

		var part4 = new this.product({
			name: 'TS',
			identifier: 33,
			subsystem: 'ts',
			description: 'none'
		});

		var tssubpart1 = new this.product({
			name: 'Internal Management',
			identifier: 34,
			subsystem: 'ts',
			description: 'none'
		});

		var tssubpart2 = new this.product({
			name: 'Structures',
			identifier: 35,
			subsystem: 'ts',
			description: 'none'
		});

		var tssubpart3 = new this.product({
			name: 'Deployables',
			identifier: 36,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart1 = new this.product({
			name: 'Thermal Management',
			identifier: 37,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart2 = new this.product({
			name: 'Electrical Management',
			identifier: 38,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart3 = new this.product({
			name: 'CubeSat Chassis',
			identifier: 39,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart4 = new this.product({
			name: 'Antennas',
			identifier: 40,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart5 = new this.product({
			name: 'Solar Panels',
			identifier: 41,
			subsystem: 'ts',
			description: 'none'
		});

		var part5 = new this.product({
			name: 'COM',
			identifier: 42,
			subsystem: 'com',
			description: 'none'
		});

		var comsubpart1 = new this.product({
			name: 'Low-Freq (Comm1)',
			identifier: 43,
			subsystem: 'com',
			description: 'none'
		});

		var comsubpart2 = new this.product({
			name: 'High-Freq (Comm2)',
			identifier: 44,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart1 = new this.product({
			name: 'Antenna',
			identifier: 45,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart2 = new this.product({
			name: 'Transceiver',
			identifier: 46,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart3 = new this.product({
			name: 'K-Band Patch Antenna',
			identifier: 47,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart4 = new this.product({
			name: 'Reflectarray',
			identifier: 48,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart5 = new this.product({
			name: 'Analog PCB',
			identifier: 49,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart6 = new this.product({
			name: 'RF Baseband PCB',
			identifier: 50,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart7 = new this.product({
			name: 'Control PCB',
			identifier: 51,
			subsystem: 'com',
			description: 'none'
		});

		var part6 = new this.product({
			name: 'EPS',
			identifier: 52,
			subsystem: 'eps',
			description: 'none'
		});

		var epssubpart1 = new this.product({
			name: 'Power Collection',
			identifier: 53,
			subsystem: 'eps',
			description: 'none'
		});

		var epssubpart2 = new this.product({
			name: 'Power Distribution',
			identifier: 54,
			subsystem: 'eps',
			description: 'none'
		});

		var epssubpart3 = new this.product({
			name: 'Power Storage',
			identifier: 55,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart1 = new this.product({
			name: 'Solar Panels',
			identifier: 56,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart2 = new this.product({
			name: 'Energy Extraction Method',
			identifier: 57,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart3 = new this.product({
			name: 'DC/DC Converters',
			identifier: 58,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart4 = new this.product({
			name: 'Power Rail',
			identifier: 59,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart5 = new this.product({
			name: 'Batteries',
			identifier: 60,
			subsystem: 'eps',
			description: 'none'
		});

		tier0.parent = this.object;
		part2.parent = tier0;
		adcssubpart1.parent = part2;
		adcssubpart2.parent = part2;
		adcsssubpart1.parent = adcssubpart1;
		adcsssubpart2.parent = adcssubpart1;
		adcsssubpart3.parent = adcssubpart1;
		adcsssubpart4.parent = adcssubpart1;
		adcsssubpart5.parent = adcssubpart1;
		adcsssubpart6.parent = adcssubpart2;
		adcsssubpart7.parent = adcssubpart2;
		adcsssubpart8.parent = adcssubpart2;


		part1.parent = tier0;
		cdhsubpart1.parent = part1;
		cdhsubpart2.parent = part1;
		cdhssubpart1.parent = cdhsubpart1;
		cdhssubpart2.parent = cdhsubpart1;
		cdhssubpart3.parent = cdhsubpart2;
		cdhssubpart4.parent = cdhsubpart2;
		cdhssubpart5.parent = cdhsubpart2;
		cdhssubpart6.parent = cdhsubpart2;
		cdhssubpart7.parent = cdhsubpart2;
		cdhssubpart8.parent = cdhsubpart2;		
		cdhssubpart9.parent = cdhsubpart2;

		part3.parent = tier0;
		pssubpart1.parent = part3;
		psssubpart1.parent = pssubpart1;		
		psssubpart2.parent = pssubpart1;
		psssubpart3.parent = pssubpart1;
		psssubpart4.parent = pssubpart1;
		psssubpart5.parent = pssubpart1;
		psssubpart6.parent = pssubpart1;

		part4.parent = tier0;		
		tssubpart1.parent = part4;
		tssubpart2.parent = part4;
		tssubpart3.parent = part4;
		tsssubpart1.parent = tssubpart1;
		tsssubpart2.parent = tssubpart1;
		tsssubpart3.parent = tssubpart2;
		tsssubpart4.parent = tssubpart3;
		tsssubpart5.parent = tssubpart3;

		part5.parent = tier0;
		comsubpart1.parent = part5;
		comsubpart2.parent = part5;
		comssubpart1.parent = comsubpart1;
		comssubpart2.parent = comsubpart1;
		comssubpart3.parent = comsubpart2;
		comssubpart4.parent = comsubpart2;
		comssubpart5.parent = comsubpart2;
		comssubpart6.parent = comsubpart2;
		comssubpart7.parent = comsubpart2;

		part6.parent = tier0;
		epssubpart1.parent = part6;
		epssubpart2.parent = part6;
		epssubpart3.parent = part6;
		epsssubpart1.parent = epssubpart1;
		epsssubpart2.parent = epssubpart1;
		epsssubpart3.parent = epssubpart2;
		epsssubpart4.parent = epssubpart2;
		epsssubpart5.parent = epssubpart3;

		var args = [{
			filters: {'name': 'CubeSat'},
			recursive: true,
			minprodlevel: 5
		}];

		this.object.save(function() {
			tier0.save(function() {
				part1.save(function() {
					cdhsubpart1.save(function() {
						cdhssubpart1.save();
						cdhssubpart2.save();
					});
					cdhsubpart2.save(function() {
						cdhssubpart3.save();
						cdhssubpart4.save();
						cdhssubpart5.save();
						cdhssubpart6.save();
						cdhssubpart7.save();
						cdhssubpart8.save();
						cdhssubpart9.save();
					});
				});

				part2.save(function() {
					adcssubpart1.save(function() {
						adcsssubpart1.save();
						adcsssubpart2.save();
						adcsssubpart3.save();
						adcsssubpart4.save();
						adcsssubpart5.save();
					});
					adcssubpart2.save(function() {
						adcsssubpart6.save();
						adcsssubpart7.save();
						adcsssubpart8.save();
					});
				});

				part3.save(function() {
					pssubpart1.save(function() {
						psssubpart1.save();
						psssubpart2.save();
						psssubpart3.save();
						psssubpart4.save();
						psssubpart5.save();
						psssubpart6.save();
					});
				});

				part4.save(function() {
					tssubpart1.save(function() {
						tsssubpart1.save();
						tsssubpart2.save();
					});
					tssubpart2.save(function() {
						tsssubpart3.save();
					});
					tssubpart3.save(function() {
						tsssubpart4.save();
						tsssubpart5.save();
					});
				});

				part5.save(function() {
					comsubpart1.save(function() {
						comssubpart1.save();
						comssubpart2.save();
					});
					comsubpart2.save(function() {
						comssubpart3.save();
						comssubpart4.save();
						comssubpart5.save();
						comssubpart6.save();
						comssubpart7.save();
					});
				});

				part6.save(function() {
					epssubpart1.save(function() {
						epsssubpart1.save();
						epsssubpart2.save();
					});
					epssubpart2.save(function() {
						epsssubpart3.save();
						epsssubpart4.save();
					});
					epssubpart3.save(function() {
						epsssubpart5.save();
					});
				});
			});
		});	
	};

	this.getAll = function(query, res) {
		this.product.find(query, function(error, output) {
			res.json(output);
		});
	};

	this.getRoot = function(query, res) {
		var args = [{
						filters: {'name': 'root'},
						recursive: true,
						minprodlevel: 5
					}];
		this.object.getChildrenTree(args, function(err, users) {
			res.json(users);
		});
	};

	this.getPartById = function(query, res) {
		this.product.find({_id: query.params._id}, function(error,output) {
			res.json(output);
		});
	};

	this.putPart = function(req, res) {
		var args = [{
			filters: {'name': 'CubeSat'},
			recursive: true,
			minprodlevel: 5
		}];
		this.object.getChildrenTree(args, function(err, users) {
			console.log(JSON.stringify(users));
			res.json(users);
		}) 
	};

	this.updatePart = function(req, res) {
	};

	this.removePart = function(req, res) {
		this.product.remove({_id: query.params._id}, function(err, output) {
			if (err)
				res.send(outout);
			res.json({message: 'Successfully deleted'});
		});
	};

	this.removeAll = function() {
		this.product.remove({}, function(err, output) {
		});
	}
}

module.exports = ProductsFactory;