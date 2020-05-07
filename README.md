# Expenseabot

[![CircleCI](https://circleci.com/gh/pennlabs/expensabot.svg?style=shield)](https://circleci.com/gh/pennlabs/expensabot)

Expenseabot is a small utility we use to generate and send expense reports using an internal expense-tracking form. Expenseabot consists of a webservice and a Google Apps Script to POST to the webservice whenever our internal form is filled out.

## Deploy

The Flask portion of expensabot just needs to be deployed to some url. A few environment variables will need to be configured. See `expensabot.py` for more information.

The Javascript (Google Apps Script) needs to be added to the finances spreadsheet. When the spreadsheet is open, go to Tools->Script Editor, create a new project and paste in the contents of `expensabot.js`. Finally, add a trigger to run the `submitExpense` function after the expense form is filled out.
