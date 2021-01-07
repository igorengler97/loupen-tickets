const unirest = require('unirest')

const key = '0MhfKobMCwxYiQrViVad'

var id = 13177
const url = `https://loupendemo.freshdesk.com/api/v2/tickets/${id}`

var Request = unirest.delete(url)

Request.auth({
    user: key,
    pass: 'X',
    sendImmediately: true
})
.then(function(response){
    console.log(response.body)
})