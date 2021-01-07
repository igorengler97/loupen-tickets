const unirest = require('unirest')

const key = '0MhfKobMCwxYiQrViVad'

const url = 'https://loupendemo.freshdesk.com/api/v2/tickets'

var ticket = {
    'email': 'email@email.com',
    'subject': 'bla bla',
    'description': 'description',
    'status': 2,
    'priority': 1
}

var Request = unirest.post(url)

Request.auth({
    user: key,
    pass: 'X',
    sendImmediately: true
})
.type('json') 
.send(ticket)
.then(function(response){
    console.log(response)
})



