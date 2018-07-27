var recipes = new Object({ recipe: 'cake' })
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, { [key]: value }) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { var Object = {prop: 1, prop2: 2 } ; return Object }
function deleteFromObjectByKey(object, key) { return delete Object.key }
function destructivelyDeleteFromObjectByKey(object, key) { delete Object.key; return Object }