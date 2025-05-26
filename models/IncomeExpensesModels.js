var client = require('./BaseModel');
var Task = function (task) {
    this.task = task.task;
};

Task.calculateIncome = async function calculateIncome(data) {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT  sum(deposit) as total_deposit, sum(net_balance) as total_net_balance, sum(total) as total_income FROM tb_invoice
        LEFT JOIN tb_mas_payment ON tb_invoice.payment_id = tb_mas_payment.id
        GROUP BY  tb_invoice.status_invoice;`;
        client.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
};

Task.calculateExpenses = async function calculateExpenses(data) {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT expense_type_name, sum(amount) as total_expense FROM tb_expense 
        LEFT JOIN tb_mas_expense_type ON tb_expense.expense_type_id = tb_mas_expense_type.id
        GROUP BY tb_expense.expense_type_id, tb_mas_expense_type.expense_type_name;`;
        client.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
};

module.exports = Task;