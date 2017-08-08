

module.exports = function(sequelize, DataTypes){
var Products = sequelize.define("Products", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	category_id: {
		type: DataTypes.INTEGER
	},
	sku: {
		type: DataTypes.INTEGER
	},
	serial_number: {
		type: DataTypes.INTEGER
	},
	name: {
		type: DataTypes.STRING
	},
	designer: {
		type: DataTypes.STRING
	},
	cost: {
		type: DataTypes.DECIMAL
	},
	price: {
		type: DataTypes.DECIMAL
	},
	quantity: {
		type: DataTypes.INTEGER
	},
	materials: {
		type: DataTypes.STRING
	},
	size: {
		type: DataTypes.INTEGER
	},
	description: {
		type: DataTypes.STRING
	},
	image_url: {
		type: DataTypes.STRING
	}
},
    {
    timestamps:false
    }
);

return Products;
}
