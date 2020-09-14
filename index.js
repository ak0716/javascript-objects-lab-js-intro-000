var taplist = {'IPA' : 'Ex Novo'}
var newTaplist = Object.assign({}, taplist)

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] : value})
}

updateObjectWithKeyAndValue(taplist, 'Pilsner', 'Wayfinder')
console.log(taplist)


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key] : value})
}

destructivelyUpdateObjectWithKeyAndValue(taplist, 'Stout', 'Prairie')
console.log(taplist)


function deleteFromObjectByKey(obj, key) {
  delete newTaplist.key
  return newTaplist
}

deleteFromObjectByKey(newTaplist, 'IPA')
