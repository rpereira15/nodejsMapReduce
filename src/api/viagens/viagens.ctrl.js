import ViagensDa from './viagens.da';

export default {
    getAll,
    update,
    create,
    remove,
    mapReduce
};

function mapReduce(req, res) {
    ViagensDa.mapReduce()
        .then((result) => res.status(200).json(result))
        .catch(()=>res.status(400));
}

function getAll(req, res) {
    ViagensDa.getAll()
        .then(todos => res.status(200).json(todos))
        .catch(() => res.sendStatus(422));
}

function update(req, res) {
    const { id } = req.params;
    const { name, completed } = req.body;

    ViagensDa.update(id, name, completed)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(422));
}

function create(req, res) {
    const { name } = req.body;

    ViagensDa.create(name)
        .then(todo => res.status(200).json(todo))
        .catch(() => res.sendStatus(422));
}

function remove(req, res) {
    const { id } = req.params;

    ViagensDa.remove(id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(422));
}