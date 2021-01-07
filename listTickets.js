const unirest = require('unirest')

const key = '0MhfKobMCwxYiQrViVad'

const url = `https://loupendemo.freshdesk.com/api/v2/tickets?per_page=10`

var Request = unirest.get(url)

Request.auth({
    user: key,
    pass: 'X',
    sendImmediately: true
})
.then(function(response){
    console.log(response.body)
})