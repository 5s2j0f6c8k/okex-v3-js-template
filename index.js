
import * as okex from 'okex-v3'

import log4js, { Logger } from 'log4js'

log4js.configure({
    appenders: {
        console: { type: 'console' }
    },
    categories: { default: { appenders: ['console'], level: 'all' } }
})
let loggger = log4js.getLogger()
loggger.debug("hello world")


let restWalletApi = new okex.RestWalletApi("https://www.okex.com", "", "", "")

restWalletApi.getCurrencies().then(function (res) {
    res.json().then(function (json) {
        loggger.debug(json)
    })
})