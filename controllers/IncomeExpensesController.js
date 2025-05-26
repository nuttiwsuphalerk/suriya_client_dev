var IncomeExpensesModel = require('../models/IncomeExpensesModels');
var moment = require('moment');

var Task = function (task) {
    this.task = task.task;
};

Task.calculateIncome = async function calculateIncome(data, result) {
    try {
        var response = await IncomeExpensesModel.calculateIncome(data);
        result(response);
    } catch (error) {
        result(error);
    }
}

Task.calculateExpenses = async function calculateExpenses(data, result) {
    try {
        var response = await IncomeExpensesModel.calculateExpenses(data);
        result(response);
    } catch (error) {
        result(error);
    }
}

module.exports = Task;