
import * as okex from 'okex-v3'

import log4js, { Logger } from 'log4js'

log4js.configure({
    appenders: {
        console: { type: 'console' }
    },
    categories: { default: { appenders: ['console'], level: 'all' } }
})
let loggger = log4js.getLogger()


let restWalletApi = new okex.RestWalletApi("https://www.okex.com", "", "", "")

restWalletApi.getCurrencies().then(function (res) {
    res.json().then(function (json) {
        loggger.debug(json)
    })
})

let restSpotApi = new okex.RestSpotApi("https://www.okex.com", "", "", "")

restSpotApi.getAccounts().then(function (res) {
    res.json().then(function (json) {
        loggger.debug(json)
    })
})

let restMarginApi = new okex.RestMarginApi("https://www.okex.com", "", "", "")

restMarginApi.getMarginAccounts().then(function (res) {
    res.json().then(function (json) {
        loggger.debug(json)
    })
})

let restFuturesApi = new okex.RestFuturesApi("https://www.okex.com", "", "", "")

restFuturesApi.getFuturesPosition().then(function (res) {
    res.json().then(function (json) {
        loggger.debug(json)
    })
})

let restEttApi = new okex.RestEttApi("https://www.okex.com", "", "", "")

restEttApi.getEttAccounts().then(function (res) {
    res.json().then(function (json) {
        loggger.debug(json)
    })
})