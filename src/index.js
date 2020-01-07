const app = require('./app.js')

const main = async  ()=>{
         await app.listen(app.get('port'))
         console.log('port on server ', app.get('port'))
}
main()
