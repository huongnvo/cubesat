var RequirementsFactory = function(Schema,mongoose,tree) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		var ProductSchema = new this.Schema({
			name: String,
			description: String
		});
		ProductSchema.plugin(tree);
		this.product = mongoose.model('product', ProductSchema);
	}

	var object;
	this.insertPart = function() {
		object = new this.product({
			name: 'root',
			description: ''
		});

		var tier0 = new this.product({
			name: 'CubeSat',
			description: 'Low-Earth Orbit CubeSat',
		});

		var part1 = new this.product({
			name: 'CDH',
			description: 'Command & Data Handling Subsystem'
		});

		var cdhsubpart1 = new this.product({
			name: 'Main Flight Computer',
			description: ''
		});

		var cdhsubpart2 = new this.product({
			name: 'Peripheral Subsystem Monitoring',
			description: ''
		});

		var cdhssubpart1 = new this.product({
			name: 'Non-Volatile Memory',
			description: ''
		});

		var cdhssubpart1b = new this.product({
			name: 'Main Processor',
			description: ''
		});

		var cdhssubpart2 = new this.product({
			name: 'Peripheral Microcontrollers',
			description: ''
		});

		var cdhssubpart3 = new this.product({
			name: 'Health-Monitoring Sensors',
			description: ''
		});

		var cdhssubpart4 = new this.product({
			name: 'I2C Bus Line',
			description: ''
		});

		var cdhsssubpart1 = new this.product({
			name: 'PPT Controller',
			description: ''
		});

		var cdhsssubpart2 = new this.product({
			name: 'Communication Controller',
			description: ''
		});

		var cdhsssubpart3 = new this.product({
			name: 'ADCS Controller',
			description: ''
		});

		var part2 = new this.product({
			name: 'ADCS',
			description: 'Attitude Determination & Control Subsystem'
		});

		var adcssubpart1 = new this.product({
			name: 'Attitude Determination',
			description: ''
		});

		var adcssubpart2 = new this.product({
			name: 'Attitude Control',
			description: ''
		});

		var adcsssubpart1 = new this.product({
			name: 'Positioning Sensor',
			description: ''
		});

		var adcsssubpart2 = new this.product({
			name: 'Attitude Sensors',
			description: ''
		});

		var adcsssubpart3 = new this.product({
			name: 'Estimation Algorithm',
			description: ''
		});

		var adcsssubpart4 = new this.product({
			name: 'Magnetorquers',
			description: ''
		});

		var adcsssubpart5 = new this.product({
			name: "Reaction Wheels",
			description: ''
		});

		var adcsssubpart6 = new this.product({
			name: 'Control Algorithm',
			description: ''
		});

		var adcssssubpart1 = new this.product({
			name: 'Magnetometers',
			description: ''
		});

		var adcssssubpart2 = new this.product({
			name: 'Photodiodes',
			description: ''
		});

		var adcssssubpart3 = new this.product({
			name: 'Sun Sensors',
			description: ''
		});

		var adcssssubpart4 = new this.product({
			name: 'Actuator', 
			description: ''
		});

		var adcssssubpart5 = new this.product({
			name: 'Driver',
			description: ''
		});

		var adcssssubpart6 = new this.product({
			name: 'Motor',
			description: ''
		});

		var adcssssubpart7 = new this.product({
			name: 'Controller',
			description: ''
		});

		var part3 = new this.product({
			name: 'PS',
			description: 'Propulsion Subsystem'
		});

		var pssubpart1 = new this.product({
			name: 'Electrodes',
			description: ''
		});

		var pssubpart2 = new this.product({
			name: 'Primary Discharge Electronics',
			description: ''
		});

		var pssubpart3 = new this.product({
			name: 'Fuel Source',
			description: ''
		});

		var pssubpart4 = new this.product({
			name: 'Frame/Body',
			description: ''
		});

		var pssubpart5 = new this.product({
			name: 'Igniter Electronics',
			description: ''
		});

		var pssubpart6 = new this.product({
			name: 'Energy Storage System',
			description: ''
		});

		var part4 = new this.product({
			name: 'TS',
			description: 'Thermal & Structures'
		});

		var tssubpart1 = new this.product({
			name: 'Thermal and Electrical Management',
			description: ''
		});

		var tssubpart2 = new this.product({
			name: 'CubeSat Chassis',
			description: ''
		});

		var tssubpart3 = new this.product({
			name: 'Deployables',
			description: ''
		});

		var tsssubpart1 = new this.product({
			name: 'Antennas',
			description: ''
		});

		var tsssubpart2 = new this.product({
			name: 'Solar Panels',
			description: ''
		});

		var part5 = new this.product({
			name: 'COM',
			description: 'Communication Subsystem'
		});

		var comsubpart1 = new this.product({
			name: 'Low-Freq (Comm1)',
			description: ''
		});

		var comsubpart2 = new this.product({
			name: 'High-Freq (Comm2)',
			description: ''
		});

		var comssubpart1 = new this.product({
			name: 'Antenna',
			description: ''
		});

		var comssubpart2 = new this.product({
			name: 'Transceiver',
			description: ''
		});

		var comssubpart3 = new this.product({
			name: 'K-Band Patch Antenna',
			description: ''
		});

		var comssubpart4 = new this.product({
			name: 'RF Electronics',
			description: ''
		});

		var comssubpart5 = new this.product({
			name: 'Reflectarray',
			description: ''
		});

		var comsssubpart1 = new this.product({
			name: 'Analog PCB',
			description: ''
		});

		var comsssubpart2 = new this.product({
			name: 'RF Baseband PCB',
			description: ''
		});

		var comsssubpart3 = new this.product({
			name: 'Control PCB',
			description: ''
		});

		var part6 = new this.product({
			name: 'EPS',
			description: 'Electrical Power Subsystem'
		});

		var epssubpart1 = new this.product({
			name: 'Power Collection',
			description: ''
		});

		var epssubpart2 = new this.product({
			name: 'Power Distribution',
			description: ''
		});

		var epssubpart3 = new this.product({
			name: 'Power Storage',
			description: ''
		});

		var epsssubpart1 = new this.product({
			name: 'Solar Panels',
			description: ''
		});

		var epsssubpart2 = new this.product({
			name: 'Solar Panel Regulators',
			description: ''
		});

		var epsssubpart3 = new this.product({
			name: 'DC/DC Converters',
			description: ''
		});

		var epsssubpart4 = new this.product({
			name: 'Power Rail/Spacecraft Bus',
			description: ''
		});

		var epsssubpart5 = new this.product({
			name: 'Batteries',
			description: ''
		});

		var epsssubpart6 = new this.product({
			name: 'Maximum Power Point Tracker',
			description: ''
		});

		var epssssubpart1 = new this.product({
			name: 'Relay/Switches',
			description: ''
		});

		var epssssubpart2 = new this.product({
			name: 'Fuses',
			description: ''
		});		

		tier0.parent = object;
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
		epsssubpart1.parent = epssubpart1;
		epsssubpart1.parent = epssubpart2;
		epsssubpart1.parent = epssubpart2;
		epsssubpart1.parent = epssubpart3;
		epsssubpart1.parent = epssubpart3;
		epssssubpart1.parent = epsssubpart4;
		epssssubpart2.parent = epsssubpart4;

		object.save(function() {
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

	this.getPartByName = function(query, res) {
		var args = [{
						filters: {'name': 'CubeSat'},
						recursive: true,
						minLevel: 5
					}];
		object.getChildrenTree(args, function(err, users) {
			res.json(users);
		});
	};

	this.putPart = function(req, res) {
	};

	this.updatePart = function(req, res) {
	};

	this.removePart = function(req, res) {
	};
}

module.exports = RequirementsFactory;