
module.exports = {
    models: new Map(),
    get(name) {
        return this.models.get(name);
    },
    set(name, model) {
        return this.models.set(name, model);
    }
}