import viagens from './viagens.model';

export default {
    mapReduce
};
const command = {};
command.map = function (){
    emit(this.orgaoSuperior, this.valor);
};
command.reduce = function (keys, values) {
    return Array.sum(values);
};

command.out= { "inline" : 1};
command.query= {"situacao" : {$eq:"Realizada"}};

function mapReduce() {
     var promise = viagens.mapReduce(command);
    return promise
        .then((err, result)=>{
            if(err){
                return err;
            }
            console.log(result);
            return result;
        });
}
