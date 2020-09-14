var taplist = {'IPA' : 'Ex Novo'}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {key: value})
}

updateObjectWithKeyAndValue(taplist, 'Pilsner', 'Wayfinder')
