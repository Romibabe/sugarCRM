module.exports = function(sequelize, DataTypes){
	var Employees = sequelize.define("Employees", {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			user_name: {
				type: DataTypes.STRING
			},
			password: {
				type: DataTypes.STRING
			},
			photo: {
				type: DataTypes.STRING
			},
			name: {
				type: DataTypes.STRING
			},
			gender: {
				type: DataTypes.STRING
			},
			sales: {
				type: DataTypes.INTEGER
			},
			sales_goals: {
				type: DataTypes.INTEGER
			}
	   	},{
	   		timestamps:false
	   	});

    
	Employees.prototype.associate = function(models) {
	  // An Author (foreignKey) is required or a Post can't be made
	  Employees.hasMany(models.Clients, {
	    foreignKey: {
	      allowNull: false
	     
	    }
	  });
	}
 

    Employees.prototype.associate = function(models) {
	  // An Author (foreignKey) is required or a Post can't be made
	  Employees.hasMany(models.Invoices, {
	    foreignKey: {
	      allowNull: false
	     
	    }
	  });
	}

	
	return Employees;
}

