var distanceK = function(root, target, k) {
    const parent = new Map(); // children: parent
	
	// map children to parent
	// this is so we can traverse "up" from our given target node
	const traverse = root => {
		if (!root) return;

		if (root.left) {
			parent.set(root.left, root);
			traverse(root.left);
		}

		if (root.right) {
			parent.set(root.right, root);
			traverse(root.right);
		}
};

	const output = [];
	const visited = new Set();
	const findNodes = (root, distance) => {
		if (!root) return;
		if (visited.has(root)) return;
		if (distance === k) output.push(root.val); // k-distance node found

		visited.add(root); // mark visited
		
		// traverse left/right and "up" parent
		findNodes(root.left, distance + 1); // left
		findNodes(root.right, distance + 1); // right
		findNodes(parent.get(root), distance + 1); // parent
	};

	traverse(root);
	findNodes(target, 0);
	return output;
}