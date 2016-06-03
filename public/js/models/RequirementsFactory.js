var RequirementsFactory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {
		var RequirementSchema = new this.Schema({
			name: String,            /* name of requirement */
			product: String,		 /* product requirement belongs to */
			identifier: Number,		 /* id of requirement i.e., the number in which it was created */
			subsystem: String,		 /* subsystem it belongs to */
			type: String,			 /* functional or non-functional */
			description: String,	 /* description of requirement */
			rationalization: String, /* rationalization of requirement */
			verification: String 	 /* verification of requirement */
		});
		this.requirement = mongoose.model('requirement', RequirementSchema);
	}

	this.getAll = function(query, res) {
		this.requirement.find(query, function(error, output) {
			res.json(output);
		});
	};

	this.getPartById = function(query, res) {
		this.requirement.find({_id: query.params._id}, function(error,output) {
			res.json(output);
		});
	};

	this.getPartByProduct = function(query, res) {
		this.requirement.find({product: query.params.product}, function(error,output) {
			res.json(output);
		});
	};

	this.putPart = function(req, res) {
		var newpart = new this.requirement({
			name: req.body.name,                		/* name of requirement */
			product: req.body.product,		 	 		/* product requirement belongs to */
			identifier: req.body.identifier,     		/* id of requirement */
			subsystem: req.body.subsystem,		 		/* subsystem it belongs to */
			type: req.body.type,			 	 		/* functional or non-functional */
			description: req.body.description,	 		/* description of requirement */
			rationalization: req.body.rationalization,  /* rationalization of requirement */
			verification: req.body.verification 	    /* verification of requirement */
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
			name: req.body.name,                		/* name of requirement */
			product: req.body.product,		 	 		/* product requirement belongs to */
			identifier: req.body.identifier,     		/* id of requirement */
			subsystem: req.body.subsystem,		 		/* subsystem it belongs to */
			type: req.body.type,			 	 		/* functional or non-functional */
			description: req.body.description,	 		/* description of requirement */
			rationalization: req.body.rationalization,  /* rationalization of requirement */
			verification: req.body.verification 	    /* verification of requirement */
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