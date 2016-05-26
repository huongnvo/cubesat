var ProductsFactory = function(Schema,mongoose,tree) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		var ProductSchema = new this.Schema({
			name: String,
			identifier: String,
			prodlevel: String
		});
		ProductSchema.plugin(tree);
		this.product = mongoose.model('product', ProductSchema);
	}

	this.insertPart = function() {
		this.object = new this.product({
			name: 'root',
			identifier: 'none',
		});

		var tier0 = new this.product({
			name: 'DUBSAT-1',
			identifier: 'dubs1', 
		});

		var part2 = new this.product({
			name: 'ADCS',
			identifier: 'adcs1',
		});

		var adcssubpart1 = new this.product({
			name: 'Attitude Determination',
			identifier: 'adcs2',
		});

		var adcssubpart2 = new this.product({
			name: 'Attitude Control',
			identifier: 'adcs2',
		});

		var adcsssubpart1 = new this.product({
			name: 'Positioning Sensor',
			identifier: 'adcs3',
		});

		var adcsssubpart2 = new this.product({
			name: 'Attitude Sensors',
			identifier: 'adcs3',
		});

		var adcsssubpart3 = new this.product({
			name: 'Estimation Algorithm',
			identifier: 'adcs3',
		});

		var adcsssubpart4 = new this.product({
			name: 'Magnetorquers',
			identifier: 'adcs3',
		});

		var adcsssubpart6 = new this.product({
			name: 'Control Algorithm',
			identifier: 'adcs3',
		});

		var adcsssubpart5 = new this.product({
			name: "Reaction Wheels",
			identifier: 'adcs3',
		});

		var adcssssubpart1 = new this.product({
			name: 'Magnetometers',
			identifier: 'adcs4',
		});

		var adcssssubpart2 = new this.product({
			name: 'Photodiodes',
			identifier: 'adcs4',
		});

		var adcssssubpart3 = new this.product({
			name: 'Sun Sensors',
			identifier: 'adcs4',
		});

		var adcssssubpart4 = new this.product({
			name: 'Actuator', 
			identifier: 'adcs4',
		});

		var adcssssubpart5 = new this.product({
			name: 'Driver',
			identifier: 'adcs4',
		});

		var adcssssubpart6 = new this.product({
			name: 'Motor',
			identifier: 'adcs4',
		});

		var adcssssubpart7 = new this.product({
			name: 'Controller',
			identifier: 'adcs4',
		});

		var part1 = new this.product({
			name: 'CDH',
			identifier: 'cdh1',
		});

		var cdhsubpart1 = new this.product({
			name: 'Main Flight Computer',
			identifier: 'cdh2', 
		});

		var cdhsubpart2 = new this.product({
			name: 'Health Monitoring',
			identifier: 'cdh2',
		});

		var cdhssubpart1 = new this.product({
			name: 'Non-Volatile Memory',
			identifier: 'cdh3',
		});

		var cdhssubpart1b = new this.product({
			name: 'Main Processor',
			identifier: 'cdh3',
		});

		var cdhssubpart2 = new this.product({
			name: 'Microcontrollers',
			identifier: 'cdh3',
		});

		var cdhssubpart3 = new this.product({
			name: 'Sensors',
			identifier: 'cdh3',
		});

		var cdhssubpart4 = new this.product({
			name: 'I2C Bus Line',
			identifier: 'cdh3',
		});

		var cdhsssubpart1 = new this.product({
			name: 'PPT Controller',
			identifier: 'cdh4',
		});

		var cdhsssubpart2 = new this.product({
			name: 'Communication Controller',			
			identifier: 'cdh4',
		});

		var cdhsssubpart3 = new this.product({
			name: 'ADCS Controller',
			identifier: 'cdh4',
		});

		var part3 = new this.product({
			name: 'PS',
			identifier: 'ps1',
		});

		var pssubpart1 = new this.product({
			name: 'Electrodes',
			identifier: 'ps2',
		});

		var pssubpart2 = new this.product({
			name: 'Discharge Electronics',
			identifier: 'ps2',
		});

		var pssubpart3 = new this.product({
			name: 'Fuel Source',
			identifier: 'ps2',
		});

		var pssubpart4 = new this.product({
			name: 'Frame/Body',
			identifier: 'ps2',
		});

		var pssubpart5 = new this.product({
			name: 'Igniter Electronics',
			identifier: 'ps2',
		});

		var pssubpart6 = new this.product({
			name: 'Energy Storage System',
			identifier: 'ps2',
		});

		var part4 = new this.product({
			name: 'TS',
			identifier: 'ts1',
		});

		var tssubpart1 = new this.product({
			name: 'Thermal/Electrical Management',
			identifier: 'ts2',
		});

		var tssubpart2 = new this.product({
			name: 'CubeSat Chassis',
			identifier: 'ts2',
		});

		var tssubpart3 = new this.product({
			name: 'Deployables',
			identifier: 'ts2',
		});

		var tsssubpart1 = new this.product({
			name: 'Antennas',
			identifier: 'ts3',
		});

		var tsssubpart2 = new this.product({
			name: 'Solar Panels',
			identifier: 'ts3',
		});

		var part5 = new this.product({
			name: 'COM',
			identifier: 'com1',
		});

		var comsubpart1 = new this.product({
			name: 'Low-Freq (Comm1)',
			identifier: 'com2',
		});

		var comsubpart2 = new this.product({
			name: 'High-Freq (Comm2)',
			identifier: 'com2',
		});

		var comssubpart1 = new this.product({
			name: 'Antenna',
			identifier: 'com3',
		});

		var comssubpart2 = new this.product({
			name: 'Transceiver',
			identifier: 'com3',
		});

		var comssubpart3 = new this.product({
			name: 'K-Band Patch Antenna',
			identifier: 'com3',
		});

		var comssubpart4 = new this.product({
			name: 'RF Electronics',
			identifier: 'com3',
		});

		var comssubpart5 = new this.product({
			name: 'Reflectarray',
			identifier: 'com3',
		});

		var comsssubpart1 = new this.product({
			name: 'Analog PCB',
			identifier: 'com4',
		});

		var comsssubpart2 = new this.product({
			name: 'RF Baseband PCB',
			identifier: 'com4',
		});

		var comsssubpart3 = new this.product({
			name: 'Control PCB',
			identifier: 'com4',
		});

		var part6 = new this.product({
			name: 'EPS',
			identifier: 'eps1',
		});

		var epssubpart1 = new this.product({
			name: 'Power Collection',
			identifier: 'eps2',
		});

		var epssubpart2 = new this.product({
			name: 'Power Distribution',
			identifier: 'eps2',
		});

		var epssubpart3 = new this.product({
			name: 'Power Storage',
			identifier: 'eps2',
		});

		var epsssubpart1 = new this.product({
			name: 'Solar Panels',
			identifier: 'eps3',
		});

		var epsssubpart2 = new this.product({
			name: 'Solar Panel Regulators',
			identifier: 'eps3',
		});

		var epsssubpart3 = new this.product({
			name: 'DC/DC Converters',
			identifier: 'eps3',
		});

		var epsssubpart4 = new this.product({
			name: 'Power Rail',
			identifier: 'eps3',
		});

		var epsssubpart5 = new this.product({
			name: 'Batteries',
			identifier: 'eps3',
		});

		var epsssubpart6 = new this.product({
			name: 'MPPT',
			identifier: 'eps3',
		});

		var epssssubpart1 = new this.product({
			name: 'Relay/Switches',
			identifier: 'eps4',
		});

		var epssssubpart2 = new this.product({
			name: 'Fuses',
			identifier: 'eps4',
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