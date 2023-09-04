function preOrder(root) {
  let res = [];
  let stk = [];
  
  while (root || stk.length) {
    while (root) {
      res.push(root);
      stk.push(root);
      root = root.left;
    }
    if (stk.length) {
      root = stk.pop();
      root = root.right;
    }
  }
  return res;
}

function midOrder(root) {
  let res = [];
  let stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    if (stk.length) {
      root = stk.pop();
      res.push(root);
      if (root.right) root = root.right;
    }
  }

  return res;
}
