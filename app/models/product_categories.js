
module.exports = function(sequelize, DataTypes){
var Product_Categories = sequelize.define("Product_Categories", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
	}
},
    {
	   		timestamps:false
	   	}
);

return Product_Categories;
}