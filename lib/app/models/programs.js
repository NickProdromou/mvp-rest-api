export default function (sequelize, DataTypes) {
    return sequelize.define('programs', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            }
        },
        short_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            }
        }
    }, {
        classMethods: {
            getColumns() {
                return Object.keys(this.attributes);
            }
        },
        underscored: true
    });

}

