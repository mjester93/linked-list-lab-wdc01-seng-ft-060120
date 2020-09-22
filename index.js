const getName = (node) => {
  return node.name
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const next = (node, collection) => {
  return collection[`${node.next}`]
}

const nodeAt (index, linkedList, collection) => {
  return collection[index]
}
