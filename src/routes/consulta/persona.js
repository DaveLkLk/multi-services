async function ConsultaPersonaRoute(req, res){
    const {tipoDoc, numDoc} = req.body;
    console.log(numDoc);
    const lTDoc = tipoDoc.toLowerCase();
    const lnDoc = numDoc.toLowerCase();
    const url = `https://api.apis.net.pe/v1/${lTDoc}?numero=${lnDoc}`;
    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        if(!contentType || !contentType.includes('application/json')){
            const errorBody = await response.text();
            console.error('--------------ERROR GO--------------');
            console.error('La API devolvió no devolvió un JSON: ', contentType);
            console.error('La API devolvió la siguiente respuesta: ');
            console.error(errorBody);
            console.error('--------------ERROR END--------------');
            return res.status(500).json({ msg: 'La API devolvió un formato no esperado', data: null, error: true });
        }
        const data = await response.json();
        // console.log('*************************');
        // console.log(data);
        // console.log('*************************');
        return res.status(200).json({data, msg: '', error: false})
    } catch (error) {
        console.error('--------------CATCH ERROR GO--------------');
        console.error('Error fetching data:', error);
        console.error('--------------CATCH ERROR END--------------');
        res.status(500).json({ msg: 'Failed to fetch data', data: null, error: true });
    }
}
module.exports = ConsultaPersonaRoute;