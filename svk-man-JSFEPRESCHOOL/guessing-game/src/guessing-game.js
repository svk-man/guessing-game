class GuessingGame {
    constructor() {}

    setRange(min, max) {

    }

    guess() {

    }

    lower() {

    }

    greater() {

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        this.root = addWithin(this.root, value);

        function addWithin(node, value) {
            if (!node) {
                return new Node(value);
            }

            if (node.value === value) {
                return node;
            }

            if (value < node.value) {
                node.left = addWithin(node.left, value);
            } else {
                node.right = addWithin(node.right, value);
            }

            return node;
        }
    }

    has(value) {
        return searchWithin(this.root, value);

        function searchWithin(node, value) {
            if (!node) {
                return false;
            }

            if (node.value == value) {
                return true;
            }

            return ((value < node.value) ? searchWithin(node.left, value)
                                        : searchWithin(node.right, value));
        }
    }

    remove(value) {
        this.root = removeWithin(this.root, value);

        function removeWithin(node, value) {
            if (!node) {
                return null;
            }

            if (value < node.value) {
                node.left = removeWithin(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = removeWithin(node.right, value);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minRightValue = node.right;
                while (minRightValue.left) {
                    minRightValue = minRightValue.left;
                }

                node.value = minRightValue.value;
                
                node.right = removeWithin(node.right, minRightValue.value);

                return node;
            }
        }
    }

    min() {
        if (!this.root) {
            return;
        }

        let node = this.root;
        while (node.left) {
            node = node.left;
        }

        return node.value;
    }

    max() {
        if (!this.root) {
            return;
        }

        let node = this.root;
        while (node.right) {
            node = node.right;
        }

        return node.value;
    }

    leftTraverse(cb) {
        doLeft(this.root, cb);

        function doLeft(node, cb) {
            if (node) {
                doLeft(node.left, cb);
                cb(node.value);
                doLeft(node.right, cb);
            }
        }
    }

    rightTraverse(cb) {
        doRight(this.root, cb);

        function doRight(node, cb) {
            if (node) {
                doRight(node.right, cb);
                cb(node.value);
                doRight(node.left, cb);
            }
        }
    }
}

console.log("BST (Binary Search Tree)");
function addItems() {
    console.log('\n Add Items');
    console.log('add 16, 21, 3, 8, 7, 17, 15');

    bst.add(16);
    bst.add(21);
    bst.add(3);
    bst.add(8);
    bst.add(7);
    bst.add(17);
    bst.add(15);

    console.log(bst);

    //        16
    //      /    \
    //     3      21
    //      \     / 
    //       8   17
    //      / \ 
    //     7   15
}

function getItems() {
    console.log('\n Get Items');

    console.log('has 22', bst.has(22));
    console.log('has 17', bst.has(17));
    console.log('\n', bst);

    console.log('   Left Traverse:');
    bst.leftTraverse((val) => console.log(val));

    console.log('   Right Traverse:');
    bst.rightTraverse((val) => console.log(val));

    console.log('min:', bst.min());
    console.log('max:', bst.max());
}

function removeItem() {
    console.log('\n Remove Item');

    bst.remove(8);
    console.log('remove 8');
    console.log(bst);

    console.log('   Left Traverse:');
    bst.leftTraverse((val) => console.log(val));
}

const bst = new BinarySearchTree();

addItems();
getItems();
removeItem();

module.exports = GuessingGame;
