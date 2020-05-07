function submitExpense(e) {
    // EDIT THIS VALUE WHEN DEPLOYING
    var api_key = ""
    var data = e.namedValues

    // Do nothing if expense is a concur expense
    if (data['PCard or Concur?'] == 'Concur') return

    // Submit expense report
    var formData = {
        'name': data['Name'][0],
        'email': data['Email Address'][0],
        'supplier': data['Supplier'][0],
        'date': data['Expense Date'][0],
        'amount': data['Cost'][0],
        'description': data['Description'][0],
        'receipt_id': data['Receipt'][0]
    };
    var headers = {
        'Authorization': 'Token ' + api_key
    }
    var options = {
        'method': 'post',
        'headers': headers,
        'payload': formData
    };

    // Send request
    var response = UrlFetchApp.fetch('https://expensabot.pennlabs.org/submit', options);
    Logger.log(response)
}
