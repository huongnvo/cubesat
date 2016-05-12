var RequirementsFactory = function(Schema,mongoose,tree) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		var ProductSchema = new this.Schema({
			name: String,
		});
		ProductSchema.plugin(tree);
		this.product = mongoose.model('product', ProductSchema);
	}

	this.insertPart = function() {
		this.object = new this.product({
			name: 'root',
		});

		var tier0 = new this.product({
			name: 'HuskySat',
		});

		var part1 = new this.product({
			name: 'CDH',
		});

		var cdhsubpart1 = new this.product({
			name: 'Main Flight Computer',
		});

		var cdhsubpart2 = new this.product({
			name: 'Peripheral Subsystem Monitoring',
		});

		var cdhssubpart1 = new this.product({
			name: 'Non-Volatile Memory',
		});

		var cdhssubpart1b = new this.product({
			name: 'Main Processor',
		});

		var cdhssubpart2 = new this.product({
			name: 'Peripheral Microcontrollers',
		});

		var cdhssubpart3 = new this.product({
			name: 'Health-Monitoring Sensors',
		});

		var cdhssubpart4 = new this.product({
			name: 'I2C Bus Line',
		});

		var cdhsssubpart1 = new this.product({
			name: 'PPT Controller',
		});

		var cdhsssubpart2 = new this.product({
			name: 'Communication Controller',
		});

		var cdhsssubpart3 = new this.product({
			name: 'ADCS Controller',
		});

		var part2 = new this.product({
			name: 'ADCS',
		});

		var adcssubpart1 = new this.product({
			name: 'Attitude Determination',
		});

		var adcssubpart2 = new this.product({
			name: 'Attitude Control',
		});

		var adcsssubpart1 = new this.product({
			name: 'Positioning Sensor',
		});

		var adcsssubpart2 = new this.product({
			name: 'Attitude Sensors',
		});

		var adcsssubpart3 = new this.product({
			name: 'Estimation Algorithm',
		});

		var adcsssubpart4 = new this.product({
			name: 'Magnetorquers',
		});

		var adcsssubpart5 = new this.product({
			name: "Reaction Wheels",
		});

		var adcsssubpart6 = new this.product({
			name: 'Control Algorithm',
		});

		var adcssssubpart1 = new this.product({
			name: 'Magnetometers',
		});

		var adcssssubpart2 = new this.product({
			name: 'Photodiodes',
		});

		var adcssssubpart3 = new this.product({
			name: 'Sun Sensors',
		});

		var adcssssubpart4 = new this.product({
			name: 'Actuator', 
		});

		var adcssssubpart5 = new this.product({
			name: 'Driver',
		});

		var adcssssubpart6 = new this.product({
			name: 'Motor',
		});

		var adcssssubpart7 = new this.product({
			name: 'Controller',
		});

		var part3 = new this.product({
			name: 'PS',
		});

		var pssubpart1 = new this.product({
			name: 'Electrodes',
		});

		var pssubpart2 = new this.product({
			name: 'Primary Discharge Electronics',
		});

		var pssubpart3 = new this.product({
			name: 'Fuel Source',
		});

		var pssubpart4 = new this.product({
			name: 'Frame/Body',
		});

		var pssubpart5 = new this.product({
			name: 'Igniter Electronics',
		});

		var pssubpart6 = new this.product({
			name: 'Energy Storage System',
		});

		var part4 = new this.product({
			name: 'TS',
		});

		var tssubpart1 = new this.product({
			name: 'Thermal and Electrical Management',
		});

		var tssubpart2 = new this.product({
			name: 'CubeSat Chassis',
		});

		var tssubpart3 = new this.product({
			name: 'Deployables',
		});

		var tsssubpart1 = new this.product({
			name: 'Antennas',
		});

		var tsssubpart2 = new this.product({
			name: 'Solar Panels',
		});

		var part5 = new this.product({
			name: 'COM',
		});

		var comsubpart1 = new this.product({
			name: 'Low-Freq (Comm1)',
		});

		var comsubpart2 = new this.product({
			name: 'High-Freq (Comm2)',
		});

		var comssubpart1 = new this.product({
			name: 'Antenna',
		});

		var comssubpart2 = new this.product({
			name: 'Transceiver',
		});

		var comssubpart3 = new this.product({
			name: 'K-Band Patch Antenna',
		});

		var comssubpart4 = new this.product({
			name: 'RF Electronics',
		});

		var comssubpart5 = new this.product({
			name: 'Reflectarray',
		});

		var comsssubpart1 = new this.product({
			name: 'Analog PCB',
		});

		var comsssubpart2 = new this.product({
			name: 'RF Baseband PCB',
		});

		var comsssubpart3 = new this.product({
			name: 'Control PCB',
		});

		var part6 = new this.product({
			name: 'EPS',
		});

		var epssubpart1 = new this.product({
			name: 'Power Collection',
		});

		var epssubpart2 = new this.product({
			name: 'Power Distribution',
		});

		var epssubpart3 = new this.product({
			name: 'Power Storage',
		});

		var epsssubpart1 = new this.product({
			name: 'Solar Panels',
		});

		var epsssubpart2 = new this.product({
			name: 'Solar Panel Regulators',
		});

		var epsssubpart3 = new this.product({
			name: 'DC/DC Converters',
		});

		var epsssubpart4 = new this.product({
			name: 'Power Rail/Spacecraft Bus',
		});

		var epsssubpart5 = new this.product({
			name: 'Batteries',
		});

		var epsssubpart6 = new this.product({
			name: 'Maximum Power Point Tracker',
		});

		var epssssubpart1 = new this.product({
			name: 'Relay/Switches',
		});

		var epssssubpart2 = new this.product({
			name: 'Fuses',
		});		

		tier0.parent = this.object;
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

		part2.parent = tier0;
		adcssubpart1.parent = part2;
		adcssubpart2.parent = part2;
		adcsssubpart1.parent = adcssubpart1;
		adcsssubpart2.parent = adcssubpart1;
		adcsssubpart3.parent = adcssubpart1;
		adcsssubpart4.parent = adcssubpart2;
		adcsssubpart5.parent = adcssubpart2;
		adcsssubpart6.parent = adcssubpart2;
		adcssssubpart1.parent = adcsssubpart2;
		adcssssubpart2.parent = adcsssubpart2;
		adcssssubpart3.parent = adcsssubpart2;
		adcssssubpart4.parent = adcsssubpart4;
		adcssssubpart5.parent = adcsssubpart4;
		adcssssubpart6.parent = adcsssubpart5;
		adcssssubpart7.parent = adcsssubpart5;

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
			minLevel: 5
		}];
		this.object.save(function() {
			tier0.save(function() {
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
						adcsssubpart5.save(function() {
							adcssssubpart6.save();
							adcssssubpart7.save();
						});
						adcsssubpart6.save();
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
						minLevel: 5
					}];
		this.object.getChildrenTree(args, function(err, users) {
			res.json(users);
		});
	};

	this.getPartById = function(query, res) {
		this.attitude_parts.find({_id: query.params._id}, function(error,output) {
			res.json(output);
		});
	};

	this.putPart = function(req, res) {
		var args = [{
			filters: {'name': 'CubeSat'},
			recursive: true,
			minLevel: 5
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

module.exports = RequirementsFactory;