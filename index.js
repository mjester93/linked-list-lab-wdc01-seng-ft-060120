const getName = (node) => {
  return node.name
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const next = (node, collection) => {
  return collection[`${node.next}`]
}

const nodeAt = (index, linkedList, collection) => {
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }

  return currentNode;
}

const addressAt = (index, linkedList, collection) => {
  if(index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    console.log(node.next)
    return node.next
  }
}
