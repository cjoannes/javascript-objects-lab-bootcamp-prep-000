var recipes = new Object({ recipe: 'cake' })
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, { [key]: value }) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { recipes.prop = 1, recipes.prop2 = 2; return recipes }
function deleteFromObjectByKey(object, key) { return delete Object.key }
function destructivelyDeleteFromObjectByKey(object, key) { delete Object.key; return Object }