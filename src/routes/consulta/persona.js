let count = 0;
const EMP_WARNING = Object.freeze({
    condicion: {
        state: true,
        value: 'NO HABIDO',
        message: 'La persona consultada no se encuentra habida'
    },
    estado: {
        state: true,
        value: 'BAJA DE OFICIO',
        message: 'La persona consultada se encuentra en estado de baja de oficio'
    }
})
async function ConsultaPersonaRoute(req, res){
    const {tipoDoc, numDoc} = req.body;
    const lTDoc = tipoDoc.toLowerCase();
    const lnDoc = numDoc.toLowerCase();
    const url = `https://api.apis.net.pe/v1/${lTDoc}?numero=${lnDoc}`;
    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        if(!contentType || !contentType.includes('application/json')){
            const errorBody = await response.text();
            console.log('*************************');
            console.error('--------------ERROR GO--------------');
            console.error('La API devolvió no devolvió un JSON: ', contentType);
            console.error('La API devolvió la siguiente respuesta: ');
            console.error(errorBody);
            console.error('--------------ERROR END--------------');
            console.log('*************************');
            return res.status(500).json({ msg: 'La API devolvió un formato no esperado', data: null, error: true });
        }
        const data = await response.json();
        count++
        console.log('*************************');
        console.log(`Se envia resultado ${count} para: `+ data.numeroDocumento);
        console.log('*************************');
        // console.log(data);
        const { condicion, estado } = data
        let warningRUC = null
        if( String(condicion).toLowerCase() === EMP_WARNING.condicion.value.toLowerCase() && 
            String(estado).toLowerCase() === EMP_WARNING.estado.value.toLowerCase()){
                warningRUC = EMP_WARNING
        }
        return res.status(200).json({data, msg: '', error: false, warning: warningRUC})
    } catch (error) {
        console.error('--------------CATCH ERROR GO--------------');
        console.error(error);
        console.error('--------------CATCH ERROR END--------------');
        res.status(500).json({ msg: 'Failed to fetch data', data: null, error: true });
    }
}
module.exports = ConsultaPersonaRoute;