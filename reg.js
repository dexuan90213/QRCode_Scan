let reg = /^((\w{2}\d{8})(\d{2,3})(\d{2})(\d{2})(\d{4})(\w{8})(\w{8})(\d{8})(\d{8})(.{24}):(.{10}|\*{10}))|:([^a-zA-z0-9\:]*\w*[^a-zA-z0-9\:\*]*|[^a-zA-z0-9\:])|\*\*/g

// (:(\d+):(\d+):(\d+))\:([^a-zA-z0-9\:]*\w+[^a-zA-z0-9\:]*)

// \:(\w+[^a-zA-z0-9\:]*)

// ^((\w{2}\d{8})(\d{2,3})(\d{2})(\d{2})(\d{4})(\w{8})(\w{8})(\d{8})(\d{8})(.{24}):(.{10}|\*{10}))|:([^a-zA-z0-9\:]*\w*[^a-zA-z0-9\:\*]*|[^a-zA-z0-9\:])|\*\*

let str = "**"

let ary = []

let ccc = reg.exec(str)
while ((reg.exec(str)) !== null) {
  ccc.push()
}

console.log(ccc)

const distinct = (value, index, self) => {
    return self.indexOf(value) === index
}

let yy = ["WY6676515110812114293000000E2000000E200000000164502779hE3V2B9IKtPWHT/eP3XwA==:**********:8:16:1:卡啦雞腿堡XL餐:1:175:加點-雞米花(大)$39:1:39**:kiosk贈品-雞米花(小):1:0:-------------------:1:0:一般交易:1:0:交易日期 2019-12-11:1:0:信用卡 226:1:0:收單機構 聯卡中心:1:0", "**:kiosk贈品-雞米花(小):1:0:-------------------:1:0:一般交易:1:0:交易日期 2019-12-11:1:0:信用卡 226:1:0:收單機構 聯卡中心:1:0", "WY6676515110812114293000000E2000000E200000000164502779hE3V2B9IKtPWHT/eP3XwA==:**********:8:16:1:卡啦雞腿堡XL餐:1:175:加點-雞米花(大)$39:1:39**:kiosk贈品-雞米花(小):1:0:-------------------:1:0:一般交易:1:0:交易日期 2019-12-11:1:0:信用卡 226:1:0:收單機構 聯卡中心:1:0"]

let ff = yy.filter(distinct).join('')
console.log(ff)

