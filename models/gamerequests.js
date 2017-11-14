module.exports = function(sequelize, DataTypes){
	var GameRequests = sequelize.define("GameRequests", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		game_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		city: {
			allowNull: false,
			type: DataTypes.STRING
		}
	});

	GameRequests.associate = function(models){
		GameRequests.belongsTo(models.Games);
		GameRequests.belongsTo(models.User);
	};

	return GameRequests;
}