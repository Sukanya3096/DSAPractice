var minDepth = function(root) {
    if (!root) return 0
  
  const q = [root]
  let level = 0

  while (q.length > 0) {
      level++
      const len = q.length
      for (let i = 0; i < len; i++) {
          const node = q.pop()
          if (node.left === null && node.right === null) return level
          if (node.left) q.unshift(node.left)
          if (node.right) q.unshift(node.right)
      }
  }
  
  return level
};