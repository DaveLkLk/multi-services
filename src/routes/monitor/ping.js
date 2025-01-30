// const {fetch} = require('node-fetch')

const WEBS_URL = [
    'https://api-sunat-cyia.onrender.com',
    'https://netchat-io.onrender.com'
]

function PingWebsite(req, res){
    const msg = {
        message: 'Ping recibido',
        timestamp: new Date().toISOString(),
        data: WEBS_URL
    }
    res.status(200).json(msg)
}
const UptimeRobot = async ()=>{
    await Promise.all(WEBS_URL.map(async (url)=> {
        try{
            const response = await fetch(url)
            if(response.ok){
                console.log('ping exitoso a: '+ url);
            }else{
                console.log('error al hacer ping al website: '+ url);
            }
        }catch(err){
            console.error(err.message);
        } 

    }))
}
module.exports = {PingWebsite, UptimeRobot}