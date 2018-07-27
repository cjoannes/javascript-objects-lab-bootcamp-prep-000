var recipes = new Object({ key: value })
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, { ['prop']: 1 }) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { recipes['prop2'] = 2; return recipes }
function deleteFromObjectByKey(object, key) { return delete Object.key }
function destructivelyDeleteFromObjectByKey(object, key) { delete recipes.prop; return recipes }