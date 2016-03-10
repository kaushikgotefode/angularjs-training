var app = angular.module("myApp", ['jkuri.datepicker']);
app.controller("ExpenseController", ['$scope', function($scope) {
    $scope.name = "Kaushik";
    $scope.addDataTr = false;
    $scope.trans = {};
    $scope.typeFilter = ""
    $scope.type = "Expense"
    $scope.toggleBtnText = "Add +"
    $scope.addNew = "Add"

    $scope.reset = function() {
            $scope.trans = {};
        }
        // $scope.addNewData = function() {
        //     postdata = {
        //         id: $scope.id,
        //         payer: $scope.payer,
        //         payee: $scope.payee,
        //         amount: $scope.amount,
        //         date: $scope.date,
        //         modeOfPayment: $scope.paymentMode,
        //         notes: $scope.notes,
        //         type: $scope.type

    //     };
    //     $scope.localTransection.push(postdata)
    //     window.localStorage.setItem('transaction', angular.toJson($scope.localTransection));
    //     $scope.reset();
    // };

    $scope.addIncome = function(postdata) {
        // postdata = {
        //     id: $scope.id,
        //     payer: $scope.payer,
        //     payee: $scope.payee,
        //     amount: $scope.amount,
        //     date: $scope.date,
        //     modeOfPayment: $scope.paymentMode,
        //     notes: $scope.notes,
        //     type: "Income"

        // };
        $scope.localIncome.push(postdata);
        window.localStorage.setItem('income', angular.toJson($scope.localIncome));
        $scope.reset();
        $scope.addNew = "Add";
    };
    $scope.addExpense = function(postdata) {
        // postdata = {
        //     id: $scope.id,
        //     payer: $scope.payer,
        //     payee: $scope.payee,
        //     amount: $scope.amount,
        //     date: $scope.date,
        //     modeOfPayment: $scope.paymentMode,
        //     notes: $scope.notes,
        //     type: "Expense"

        // };
        $scope.localExpense.push(postdata);
        window.localStorage.setItem('expense', angular.toJson($scope.localExpense));
        $scope.reset();
        $scope.addNew = "Add";
    };
    $scope.editData = function(i) {
        $scope.trans = $scope.localTransection[i]
        $scope.localTransection.splice(i, 1);
        $scope.addNew = "Update";
        $scope.addDataTr = true;
    }
    // $scope.editExpense = function(i) {
    //     $scope.trans = $scope.localTransection[i]
    //     $scope.localTransection.splice(i, 1);

    // }

    $scope.showExpense = function() {
        // $scope.typeFilter = "Expense"
        $scope.type = "Expense";
        $scope.localTransection = $scope.localExpense;
        $scope.addDataTr = false;
    }

    $scope.showIncome = function() {
        // $scope.typeFilter = "Income"
        $scope.type = "Income";
        $scope.localTransection = $scope.localIncome;
        $scope.addDataTr = false;
    }
    $scope.addData = function() {
        if($scope.addDataTr){
            $scope.addDataTr = false;
            $scope.toggleBtnText = "Add +"
        }else{
            $scope.addDataTr = true;
            $scope.toggleBtnText = "Remove -"

        }

        
    }

    // $scope.showTransection = function() {
    //     $scope.typeFilter = ""
    // }


    // $scope.transactions = [{
    //     "id": 1,
    //     "payer": "Gretchen Hunter",
    //     "payee": "Isabel Saunders",
    //     "amount": "100.00",
    //     "date": "December 17, 2015",
    //     "modeOfPayment": "Cash",
    //     "notes": "Dinner Cash",
    //     "type": "Income"
    // }, {
    //     "id": 2,
    //     "payer": "Isabel Saunders",
    //     "payee": "Caroline Adkins",
    //     "amount": "50.00",
    //     "date": "December 28, 2015",
    //     "modeOfPayment": "Electronic Transfer",
    //     "notes": "Money Owed",
    //     "type": "Expense"
    // }, {
    //     "id": 3,
    //     "payer": "Isabel Saunders",
    //     "payee": "Wall-E Mart Inc.",
    //     "amount": "280.00",
    //     "date": "December 31, 2015",
    //     "modeOfPayment": "Credit Card",
    //     "notes": "New Year's Gift",
    //     "type": "Expense"
    // }, {
    //     "id": 4,
    //     "payer": "Marian Floyd",
    //     "payee": "Isabel Saunders",
    //     "amount": "98.00",
    //     "date": "January 04, 2016",
    //     "modeOfPayment": "Cash",
    //     "notes": "Dinner Share",
    //     "type": "Income"
    // }, {
    //     "id": 5,
    //     "payer": "Random Inc.",
    //     "payee": "Isabel Saunders",
    //     "amount": "2500.00",
    //     "date": "January 04, 2016",
    //     "modeOfPayment": "Electronic Transfer",
    //     "notes": "Salary",
    //     "type": "Income"
    // }, {
    //     "id": 6,
    //     "payer": "Isabel Saunders",
    //     "payee": "Gretchen Hunter",
    //     "amount": "250.00",
    //     "date": "January 05, 2016",
    //     "modeOfPayment": "Electronic Transfer",
    //     "notes": "Rent Share",
    //     "type": "Expense"
    // }, {
    //     "id": 7,
    //     "payer": "Isabel Saunders",
    //     "payee": "Wall-E Mart Inc.",
    //     "amount": "100.00",
    //     "date": "January 07, 2016",
    //     "modeOfPayment": "Credit Card",
    //     "notes": "Monthly Provisions",
    //     "type": "Expense"
    // }, {
    //     "id": 8,
    //     "payer": "BitiBank LTD.",
    //     "payee": "Isabel Saunders",
    //     "amount": "500.00",
    //     "date": "January 10, 2016",
    //     "modeOfPayment": "Electronic Transfer",
    //     "notes": "Credit Card Payment",
    //     "type": "Expense"
    // }, {
    //     "id": 9,
    //     "payer": "New Venture Inc.",
    //     "payee": "Isabel Saunders",
    //     "amount": "600.00",
    //     "date": "January 15, 2016",
    //     "modeOfPayment": "Cash",
    //     "notes": "Side Project Payment",
    //     "type": "Income"
    // }, {
    //     "id": 10,
    //     "payer": "Isabel Saunders",
    //     "payee": "Drunkards Pub",
    //     "amount": "100.00",
    //     "date": "January 15, 2016",
    //     "modeOfPayment": "Credit Card",
    //     "notes": "Night Out",
    //     "type": "Expense"
    // }]
    $scope.incomes = [{
        "id": 1,
        "payer": "Gretchen Hunter",
        "payee": "Isabel Saunders",
        "amount": "100.00",
        "date": "December 17, 2015",
        "modeOfPayment": "Cash",
        "notes": "Dinner Cash",
        "type": "Income"
    }, {
        "id": 2,
        "payer": "Marian Floyd",
        "payee": "Isabel Saunders",
        "amount": "98.00",
        "date": "January 04, 2016",
        "modeOfPayment": "Cash",
        "notes": "Dinner Share",
        "type": "Income"
    }, {
        "id": 3,
        "payer": "Random Inc.",
        "payee": "Isabel Saunders",
        "amount": "2500.00",
        "date": "January 04, 2016",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Salary",
        "type": "Income"
    }, {
        "id": 4,
        "payer": "New Venture Inc.",
        "payee": "Isabel Saunders",
        "amount": "600.00",
        "date": "January 15, 2016",
        "modeOfPayment": "Cash",
        "notes": "Side Project Payment",
        "type": "Income"
    }]

    $scope.expenses = [{
        "id": 1,
        "payer": "Isabel Saunders",
        "payee": "Caroline Adkins",
        "amount": "50.00",
        "date": "December 28, 2015",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Money Owed",
        "type": "Expense"
    }, {
        "id": 2,
        "payer": "Isabel Saunders",
        "payee": "Wall-E Mart Inc.",
        "amount": "280.00",
        "date": "December 31, 2015",
        "modeOfPayment": "Credit Card",
        "notes": "New Year's Gift",
        "type": "Expense"
    }, {
        "id": 3,
        "payer": "Isabel Saunders",
        "payee": "Gretchen Hunter",
        "amount": "250.00",
        "date": "January 05, 2016",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Rent Share",
        "type": "Expense"
    }, {
        "id": 4,
        "payer": "Isabel Saunders",
        "payee": "Wall-E Mart Inc.",
        "amount": "100.00",
        "date": "January 07, 2016",
        "modeOfPayment": "Credit Card",
        "notes": "Monthly Provisions",
        "type": "Expense"
    }, {
        "id": 5,
        "payer": "BitiBank LTD.",
        "payee": "Isabel Saunders",
        "amount": "500.00",
        "date": "January 10, 2016",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Credit Card Payment",
        "type": "Expense"
    }, {
        "id": 6,
        "payer": "Isabel Saunders",
        "payee": "Drunkards Pub",
        "amount": "100.00",
        "date": "January 15, 2016",
        "modeOfPayment": "Credit Card",
        "notes": "Night Out",
        "type": "Expense"
    }]

    // if (!window.localStorage.getItem('transaction')) {
    //     $scope.transaction = window.localStorage.setItem('transaction', JSON.stringify($scope.transactions));
    // }
    // $scope.localTransection = JSON.parse(window.localStorage.getItem('transaction'));

    if (!window.localStorage.getItem('income')) {
        $scope.income = window.localStorage.setItem('income', JSON.stringify($scope.incomes));
    }
    $scope.localIncome = JSON.parse(window.localStorage.getItem('income'));

    if (!window.localStorage.getItem('expense')) {
        $scope.expense = window.localStorage.setItem('expense', JSON.stringify($scope.expenses));
    }
    $scope.localExpense = JSON.parse(window.localStorage.getItem('expense'));

    $scope.localTransection = $scope.localExpense;
}]);
