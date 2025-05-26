
var IncomeExpensesController = require('../controllers/IncomeExpensesController');
var incomeExpenses_model = require('../models/IncomeExpensesModels');

module.exports = function (app) {
    const key = '/api/v1';

    app.get(`${key}/incomeExpenses/calculateIncome`, function (req, res) {
        IncomeExpensesController.calculateIncome(req.body, function (err, task) {
            try {
                if (err) {
                    return res.send(err);
                }
                return res.send(task);
            } catch (error) {
                return res.send(error);
            }
        });
    });

    app.get(`${key}/incomeExpenses/calculateExpenses`, function (req, res) {
        IncomeExpensesController.calculateExpenses(req.body, function (err, task) {
            try {
                if (err) {
                    return res.send(err);
                }
                return res.send(task);
            } catch (error) {
                return res.send(error);
            }
        });
    });

}