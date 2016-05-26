var RequirementsFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		var RequirementSchema = new this.Schema({
			name: String,
			identifier: String,
			description: String,
			flowup: String
		});
		this.requirement = mongoose.model('requirement', RequirementSchema);
	}

	this.getAll = function(query, res) {
		this.requirement.find(query, function(error, output) {
			res.json(output);
		});
	};

	this.getPartById = function(query, res) {
		this.requirement.find({identifier: query.params.identifier}, function(error,output) {
			res.json(output);
		});
	};

	this.putPart = function(req, res) {
		var newpart = new this.requirement({
			name: req.body.name,
			identifier: req.body.identifier,
			description: req.body.description,
			flowup: req.body.flowup
    	});
		newpart.save(function (error, output) {
			res.json(output);
		});
	};

	this.updatePart = function(req, res) {
		this.requirement.update(
 		{
      		_id: req.params._id
    	}, 
    	{
			name: req.body.name,
			identifier: req.body.identifier,			
			description: req.body.description,
			flowup: req.body.flowup
    	}, 
    	function(error, output) {
      		res.json(output);
    	});
	};

	this.removePart = function(query, res) {
		this.requirement.remove({_id: query.params._id}, function(err, output) {
			if (err)
				res.send(outout);
			res.json({message: 'Successfully deleted'});
		});
	};

	this.removeAll = function(req, res) {
		this.requirement.remove({}, function(err, output) {
			res.json({message: 'Successfully deleted'});
		});
	}
}

module.exports = RequirementsFactory;