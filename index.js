var recipes = new Object({ recipe: 'cake' })
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, { [key]: value }) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { Object.prop = [1]; return Object }
function deleteFromObjectByKey(object, key) { return delete Object.key }
function destructivelyDeleteFromObjectByKey(object, key) { delete Object.key; return Object }