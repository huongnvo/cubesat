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
			name: 'Attitude Sensors',
			identifier: 6,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart3 = new this.product({
			name: 'Estimation Algorithm',
			identifier: 7,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart4 = new this.product({
			name: 'Magnetorquers',
			identifier: 8,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart6 = new this.product({
			name: 'Control Algorithm',
			identifier: 9,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcsssubpart5 = new this.product({
			name: "Reaction Wheels",
			identifier: 10,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart1 = new this.product({
			name: 'Magnetometers',
			identifier: 11,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart2 = new this.product({
			name: 'Photodiodes',
			identifier: 12,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart3 = new this.product({
			name: 'Sun Sensors',
			identifier: 13,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart4 = new this.product({
			name: 'Actuator', 
			identifier: 14,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart5 = new this.product({
			name: 'Driver',
			identifier: 15,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart6 = new this.product({
			name: 'Motor',
			identifier: 16,
			subsystem: 'adcs',
			description: 'none'
		});

		var adcssssubpart7 = new this.product({
			name: 'Controller',
			identifier: 17,
			subsystem: 'adcs',
			description: 'none'
		});

		var part1 = new this.product({
			name: 'CDH',
			identifier: 18,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsubpart1 = new this.product({
			name: 'Main Flight Computer',
			identifier: 19, 
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsubpart2 = new this.product({
			name: 'Health Monitoring',
			identifier: 20,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart1 = new this.product({
			name: 'Non-Volatile Memory',
			identifier: 21,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart1b = new this.product({
			name: 'Main Processor',
			identifier: 22,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart2 = new this.product({
			name: 'Microcontrollers',
			identifier: 23,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart3 = new this.product({
			name: 'Sensors',
			identifier: 24,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhssubpart4 = new this.product({
			name: 'I2C Bus Line',
			identifier: 25,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsssubpart1 = new this.product({
			name: 'PPT Controller',
			identifier: 26,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsssubpart2 = new this.product({
			name: 'Communication Controller',			
			identifier: 27,
			subsystem: 'cdh',
			description: 'none'
		});

		var cdhsssubpart3 = new this.product({
			name: 'ADCS Controller',
			identifier: 28,
			subsystem: 'cdh',
			description: 'none'
		});

		var part3 = new this.product({
			name: 'PS',
			identifier: 29,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart1 = new this.product({
			name: 'Electrodes',
			identifier: 30,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart2 = new this.product({
			name: 'Discharge Electronics',
			identifier: 31,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart3 = new this.product({
			name: 'Fuel Source',
			identifier: 32,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart4 = new this.product({
			name: 'Frame/Body',
			identifier: 33,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart5 = new this.product({
			name: 'Igniter Electronics',
			identifier: 34,
			subsystem: 'ps',
			description: 'none'
		});

		var pssubpart6 = new this.product({
			name: 'Energy Storage System',
			identifier: 35,
			subsystem: 'ps',
			description: 'none'
		});

		var part4 = new this.product({
			name: 'TS',
			identifier: 36,
			subsystem: 'ts',
			description: 'none'
		});

		var tssubpart1 = new this.product({
			name: 'Thermal/Electrical Management',
			identifier: 37,
			subsystem: 'ts',
			description: 'none'
		});

		var tssubpart2 = new this.product({
			name: 'CubeSat Chassis',
			identifier: 38,
			subsystem: 'ts',
			description: 'none'
		});

		var tssubpart3 = new this.product({
			name: 'Deployables',
			identifier: 39,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart1 = new this.product({
			name: 'Antennas',
			identifier: 40,
			subsystem: 'ts',
			description: 'none'
		});

		var tsssubpart2 = new this.product({
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
			name: 'RF Electronics',
			identifier: 48,
			subsystem: 'com',
			description: 'none'
		});

		var comssubpart5 = new this.product({
			name: 'Reflectarray',
			identifier: 49,
			subsystem: 'com',
			description: 'none'
		});

		var comsssubpart1 = new this.product({
			name: 'Analog PCB',
			identifier: 50,
			subsystem: 'com',
			description: 'none'
		});

		var comsssubpart2 = new this.product({
			name: 'RF Baseband PCB',
			identifier: 51,
			subsystem: 'com',
			description: 'none'
		});

		var comsssubpart3 = new this.product({
			name: 'Control PCB',
			identifier: 52,
			subsystem: 'com',
			description: 'none'
		});

		var part6 = new this.product({
			name: 'EPS',
			identifier: 53,
			subsystem: 'eps',
			description: 'none'
		});

		var epssubpart1 = new this.product({
			name: 'Power Collection',
			identifier: 54,
			subsystem: 'eps',
			description: 'none'
		});

		var epssubpart2 = new this.product({
			name: 'Power Distribution',
			identifier: 55,
			subsystem: 'eps',
			description: 'none'
		});

		var epssubpart3 = new this.product({
			name: 'Power Storage',
			identifier: 56,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart1 = new this.product({
			name: 'Solar Panels',
			identifier: 57,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart2 = new this.product({
			name: 'Solar Panel Regulators',
			identifier: 58,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart3 = new this.product({
			name: 'DC/DC Converters',
			identifier: 59,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart4 = new this.product({
			name: 'Power Rail',
			identifier: 60,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart5 = new this.product({
			name: 'Batteries',
			identifier: 61,
			subsystem: 'eps',
			description: 'none'
		});

		var epsssubpart6 = new this.product({
			name: 'MPPT',
			identifier: 62,
			subsystem: 'eps',
			description: 'none'
		});

		var epssssubpart1 = new this.product({
			name: 'Relay/Switches',
			identifier: 63,
			subsystem: 'eps',
			description: 'none'
		});

		var epssssubpart2 = new this.product({
			name: 'Fuses',
			identifier: 64,   
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
		adcsssubpart4.parent = adcssubpart2;
		adcsssubpart6.parent = adcssubpart2;
		adcsssubpart5.parent = adcssubpart2;
		adcssssubpart1.parent = adcsssubpart2;
		adcssssubpart2.parent = adcsssubpart2;
		adcssssubpart3.parent = adcsssubpart2;
		adcssssubpart4.parent = adcsssubpart4;
		adcssssubpart5.parent = adcsssubpart4;
		adcssssubpart6.parent = adcsssubpart5;
		adcssssubpart7.parent = adcsssubpart5;

		part1.parent = tier0;
		cdhsubpart1.parent = part1;
		cdhsubpart2.parent = part1;
		cdhssubpart1.parent = cdhsubpart1;
		cdhssubpart1b.parent = cdhsubpart1;
		cdhssubpart2.parent = cdhsubpart2;
		cdhssubpart3.parent = cdhsubpart2;
		cdhssubpart4.parent = cdhsubpart2;
		cdhsssubpart1.parent = cdhssubpart2;
		cdhsssubpart2.parent = cdhssubpart2;
		cdhsssubpart3.parent = cdhssubpart2;

		part3.parent = tier0;
		pssubpart1.parent = part3;
		pssubpart2.parent = part3;
		pssubpart3.parent = part3;
		pssubpart4.parent = part3;
		pssubpart5.parent = part3;
		pssubpart6.parent = part3;

		part4.parent = tier0;		
		tssubpart1.parent = part4;
		tssubpart2.parent = part4;
		tssubpart3.parent = part4;
		tsssubpart1.parent = tssubpart3;
		tsssubpart2.parent = tssubpart3;

		part5.parent = tier0;
		comsubpart1.parent = part5;
		comsubpart2.parent = part5;
		comssubpart1.parent = comsubpart1;
		comssubpart2.parent = comsubpart1;
		comssubpart3.parent = comsubpart2;
		comssubpart4.parent = comsubpart2;
		comssubpart5.parent = comsubpart2;
		comsssubpart1.parent = comssubpart4;
		comsssubpart2.parent = comssubpart4;
		comsssubpart3.parent = comssubpart4;

		part6.parent = tier0;
		epssubpart1.parent = part6;
		epssubpart2.parent = part6;
		epssubpart3.parent = part6;
		epsssubpart1.parent = epssubpart1;
		epsssubpart2.parent = epssubpart1;
		epsssubpart3.parent = epssubpart2;
		epsssubpart4.parent = epssubpart2;
		epsssubpart5.parent = epssubpart3;
		epsssubpart6.parent = epssubpart3;
		epssssubpart1.parent = epsssubpart4;
		epssssubpart2.parent = epsssubpart4;

		var args = [{
			filters: {'name': 'CubeSat'},
			recursive: true,
			minprodlevel: 5
		}];

		this.object.save(function() {
			tier0.save(function() {
				part2.save(function() {
					adcssubpart1.save(function() {
						adcsssubpart1.save();
						adcsssubpart2.save(function() {
							adcssssubpart1.save();
							adcssssubpart2.save();
							adcssssubpart3.save();
						});
						adcsssubpart3.save();
					});
					adcssubpart2.save(function() {
						adcsssubpart4.save(function() {
							adcssssubpart4.save();
							adcssssubpart5.save();
						});
						adcsssubpart6.save();
						adcsssubpart5.save(function() {
							adcssssubpart6.save();
							adcssssubpart7.save();
						});
					});
				});
				part1.save(function() {
					cdhsubpart1.save(function() {
						cdhssubpart1.save();
						cdhssubpart1b.save();
					});
					cdhsubpart2.save(function() {
						cdhssubpart2.save(function() {
							cdhsssubpart1.save();
							cdhsssubpart2.save();
							cdhsssubpart3.save();
						});
						cdhssubpart3.save();
						cdhssubpart4.save();
					});
				});
				part3.save(function() {
					pssubpart1.save();
					pssubpart2.save();
					pssubpart3.save();
					pssubpart4.save();
					pssubpart5.save();
					pssubpart6.save();
				});
				part4.save(function() {
					tssubpart1.save();
					tssubpart2.save();
					tssubpart3.save(function() {
						tsssubpart1.save();
						tsssubpart2.save();
					});
				});
				part5.save(function() {
					comsubpart1.save(function() {
						comssubpart1.save();
						comssubpart2.save();
					});
					comsubpart2.save(function() {
						comssubpart3.save();
						comssubpart4.save(function() {
							comsssubpart1.save();
							comsssubpart2.save();
							comsssubpart3.save();
						});
						comssubpart5.save();
					});
				});
				part6.save(function() {
					epssubpart1.save(function() {
						epsssubpart1.save();
						epsssubpart2.save();
					});
					epssubpart2.save(function() {
						epsssubpart3.save();
						epsssubpart4.save(function() {
							epssssubpart1.save();
							epssssubpart2.save();
						});
					});
					epssubpart3.save(function() {
						epsssubpart5.save();
						epsssubpart6.save();
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