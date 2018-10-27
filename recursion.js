function recursion(node, level = 0) {
  if (recursion.array === undefined) recursion.array = [];
  if (recursion.array[level] === undefined) recursion.array[level] = [];
  recursion.array[level].push(node.value);
  if (node.left) recursion(node.left, level + 1);
  if (node.right) recursion(node.right, level + 1);
  return recursion.array;
}