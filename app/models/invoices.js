module.exports = function(sequelize, DataTypes){
var Invoices = sequelize.define("Invoices", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	employee_id: {
		type: DataTypes.INTEGER
	},
	customer_id: {
		type: DataTypes.INTEGER
	},
	date_created: {
		type: DataTypes.DATE
	},
	subtotal: {
		type: DataTypes.FLOAT
	},
	taxes: {
		type: DataTypes.FLOAT
	},
	total: {
		type: DataTypes.FLOAT
	},
	payment_amount: {
		type: DataTypes.FLOAT
	},
	payment_type: {
		type: DataTypes.STRING
	}
 },
    {
	   		timestamps:false
	   	}
);


Invoices.prototype.associate = function(models){
  Invoices.belongsTo(models.Employees, {
    foreignKey: {
      allowNull: false
    }
  });
 }

  Invoices.prototype.associate = function(models){
   Invoices.hasMan(models.Clients, {
   foreignKey: {
     allowNull: false
   }
 });
 }

return Invoices;
}