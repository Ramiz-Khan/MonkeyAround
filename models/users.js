module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		bio: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			isEmail: true,
			allowNull: false
		}
	});

	User.associate = function(models){
		User.hasMany(models.Games, {
			onDelete: "cascade"
		});
		User.hasMany(models.GameRequests, {
			onDelete: "cascade"
		});
	};

	return User;
}