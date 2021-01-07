const unirest = require('unirest')

const key = '0MhfKobMCwxYiQrViVad'

var id = 13177
const url = `https://loupendemo.freshdesk.com/api/v2/tickets/${id}`

var ticket = {
    'email': 'email2@email.com',
    'subject': 'testesss',
    'description': 'descssription',
    'status': 2,
    'priority': 1
}

var Request = unirest.put(url)

Request.auth({
    user: key,
    pass: 'X',
    sendImmediately: true
})
.type('json')
.send(ticket)
.then(function(response){
    console.log(response.body)
})