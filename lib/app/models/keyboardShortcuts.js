export default function(sequelize, DataTypes) {
    return sequelize.define('keyboard_shortcuts', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
            }
        },
        category: {
            type: DataTypes.STRING,
            validate: {
            }
        },
        win_key: {
            type: DataTypes.STRING,
            validate: {
            }
        },
        mac_key: {
            type: DataTypes.STRING,
            validate: {
            }
        },
        program_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
            }
        },
        votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        underscored: true
    });
}

