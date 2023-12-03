const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  function validateChartType(chartData) {
    if (chartData && typeof chartData.chartType !== 'string') {
      throw new Error('chart.chartType must be a string');
    }
  }

  const Queries = sequelize.define(
    'Queries',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      connectionId: {
        type: DataTypes.STRING,
      },
      queryText: {
        type: DataTypes.TEXT,
      },

      chart: {
        type: DataTypes.JSON,
        validate: {
          matchesShape(value) {
            validateChartType(chartData);
          },
        },
      },
      // createdBy used to be email address, but now stores userId as of v5
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // updatedBy used to be email address, but now stores userId as of v5
      updatedBy: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'queries',
      underscored: true,
    }
  );

  return Queries;
};
