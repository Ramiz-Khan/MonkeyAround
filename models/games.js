module.exports = function(sequelize, DataTypes){
	var Games = sequelize.define("Games", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		user_id:{
			type: DataTypes.UUID,
			allowNull: false
		},
		creator: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sport: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			allowNull: false,
			type: DataTypes.STRING
		},
		description: {
			allowNull: false,
			type: DataTypes.STRING
		},
		totalplayers: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		currentplayers: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
		usergame: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	Games.associate = function(models){
		Games.hasMany(models.GameRequests, {
			onDelete: "cascade"
		});
		Games.belongsTo(models.User);
	};

	return Games;
}