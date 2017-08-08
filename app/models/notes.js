module.exports = function(sequelize, DataTypes){
	var Notes = sequelize.define("Notes", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		things_to_do: {
			type: DataTypes.STRING
		},
		customer_id: {
			type: DataTypes.INTEGER
		}		
	});

	return Notes;
}