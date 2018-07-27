var recipes = new Object({ prop: 1 })
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, { [key]: value }) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { newOject.prop2 = 2; return recipes }
function deleteFromObjectByKey(object, key) { return delete Object.key }
function destructivelyDeleteFromObjectByKey(object, key) { delete recipes.prop; return recipes }