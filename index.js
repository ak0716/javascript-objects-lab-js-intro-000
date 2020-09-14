var taplist = {'IPA' : 'Ex Novo'}

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

var newTaplist

function deleteFromObjectByKey(obj, key) {
  newTaplist = Object.assign({}, obj)
  delete newTaplist.key
  return newTaplist
}

deleteFromObjectByKey(newTaplist, 'IPA')
