

module.exports = function(sequelize, DataTypes){
var Clients = sequelize.define("Clients", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	employee_id: {
		type: DataTypes.INTEGER
	},
	photo_url: {
		type: DataTypes.STRING
	},
	salutation: {
		type: DataTypes.STRING
	},
	first_name: {
		type: DataTypes.STRING
	},
	last_name: {
		type: DataTypes.STRING
	},
	
	gender: {
		type: DataTypes.STRING
	},
	birthday: {
		type: DataTypes.DATE
	},
	
		age: {
		type: DataTypes.INTEGER
	},
	marital_status: {
		type: DataTypes.STRING
	},
	
	anniversary: {
		type: DataTypes.DATE
	},
	phone_number: {
		type: DataTypes.STRING
	},
	email_address: {
		type: DataTypes.STRING
	},
	billing_address: {
		type: DataTypes.STRING
	},
	shipping_address: {
		type: DataTypes.STRING
	},
	
	favorites: {
		type: DataTypes.STRING
	},
    things_to_do:{
      type:DataTypes.STRING
	 }
},
	 {
	   		timestamps:false
	   	}
);

Clients.prototype.associate = function(models){
  Clients.belongsTo(models.Employees, {
    foreignKey: {
      allowNull: false
    }
  });
 }

Clients.prototype.associate = function(models){
  Clients.hasMany(models.Invoices, {
    foreignKey: {
      allowNull: false
    }
  });
 }


 return Clients;
}

