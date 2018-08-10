import Q from 'q';
import Viagens from './viagens.model';
import mapReduceProcessor from './viagens.mapreduce';

export default {
    mapReduce,
    update,
    create,
    remove,
    getAll
};

function mapReduce() {
    const deferred = Q.defer();
    var result = mapReduceProcessor.mapReduce();
    result.then((resp)=>{
        deferred.resolve(resp.results);
    });
    return deferred.promise;
}

function getAll() {
    const deferred = Q.defer();

    Viagens.find({}, (err, todos) => {
        if (err) deferred.reject(err);
        deferred.resolve(todos);
    });

    return deferred.promise;
}

function update(id, name, completed) {
    const deferred = Q.defer();
    const query = {};

    if (name) query.name = name;
    if (completed) query.completed = completed;

    if (Object.keys(query).length > 0) {
        Viagens.update({ _id: id }, { $set: query }, (err, todo) => {
            if (err) deferred.reject(err);

            deferred.resolve(todo);
        });
    } else {
        // reject promise if name and completed information is missing
        deferred.reject({});
    }

    return deferred.promise;
}

function create(name) {
    const deferred = Q.defer();
    const todo = new Viagens({ name });
    todo.save((err, savedTodo) => {
        if (err) deferred.reject(err);

        deferred.resolve(savedTodo);
    });

    return deferred.promise;
}

function remove(id) {
    const deferred = Q.defer();
    Viagens.remove({ _id: id }, (err, todo) => {
        if (err) deferred.reject(err);

        deferred.resolve(todo);
    });

    return deferred.promise;
}