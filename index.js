var recipes = new Object({ key: 'value' })
recipes.prop = '1'
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({}, object, { [key]: value }) }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { Object.prop2 = '2'; return recipes }
function deleteFromObjectByKey(object, key) { return delete Object.key }
function destructivelyDeleteFromObjectByKey(object, key) { return delete recipes.prop }