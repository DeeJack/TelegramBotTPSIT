const { Sequelize, DataTypes, Model } = require('sequelize')
/** @constant @type {Sequelize} */
const sequelize = require('../database').connection
const Group = require('./Group')
const GroupMember = require('./GroupMember')

const Mute = sequelize.define('Mute', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    groupID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Group,
            key: 'id'
        }
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: GroupMember,
            key: 'id'
        }
    },
    adminID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: GroupMember,
            key: 'id'
        }
    },
    untilDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {

})

module.exports = Mute