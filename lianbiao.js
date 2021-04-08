// function mapLinkedList(head) {
// 	let node = head;
// 	// while(node !== null) {
// 	//     console.log(node.val);
// 	//     node = node.next;
// 	// }
// 	// 倒序打印
// 	// let arr = [];
// 	// while(node !== null) {
// 	//     arr.push(node.val)
// 	//     node = node.next;
// 	// }
// 	// for(let i = arr.length-1; i >= 0; i--) {
// 	//     console.log(arr[i])
// 	// }

// 	// 倒序打印 递归写法
// 	if (node !== null) {
// 		if (node.next !== null) {
// 			// node = node.next;
// 			mapLinkedList(node.next);
// 		}
// 		console.log(node.val);
// 	}
// }
// function nodeList(val) {
// 	this.val = val;
// 	this.next = null;
// }
// let node1 = new nodeList(1);
// let node2 = new nodeList(2);
// node1.next = node2;

// let node3 = new nodeList(3);
// let node4 = new nodeList(4);
// let node5 = new nodeList(5);
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// mapLinkedList(node1);

// 链表 顺序表在js里面的表示
function Node(val) {
    this.val = val;
    this.next = null;
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// 链表 找到元素为4的节点
function find(head) {
    let node = head
    while(node.val !== 4) {
        node = node.next;
    }
    return node;
}
// console.log(find(node1));

// 遍历链表 倒序打印
function traverse(head) {
    let node = head;
    let res = [];
    while(node && node.val !== null) {
        // console.log('hhh',node.val);
        res.push(node.val);
        node = node.next;
    }
    for(let i = res.length; i > 0 ; i--) {
        // console.log('aaa',i);
    }
}
traverse(node1);





/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 正常解法
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// var kthToLast = function(head, k) {
//     let node = head;
//     let res = [];
//     while(node && node.val !== null) {
//         res.push(node.val);
//         node = node.next;
//     }
//     const len = res.length;
//     return res[len-k];
// };
// 快慢指针
var kthToLast = function(head, k) {
    let fast = slow = head;
    let n = 0;
    while(fast) {
        if(n >= k) {
            slow = slow.next;
        }
        fast = fast.next;
        n++;
    }
    return slow.val
};
// console.log('000',kthToLast(node1, 3));


/**
 * 删除中间节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// 链表反转 
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        // 把下一项暂存
        let next = curr.next;
        // 让当前项指向前一项
        curr.next = prev;
        // 把当前项存
        prev = curr;
        curr = next;
    }
    return prev;
};

// 函数柯里化 promise实现
// 项目描述 *性能优化*
// 框架原理 

  // 函数柯里化
  function curry(fn) {
    let args = arguments;
    // 获取参数的长度
    let len = fn.length;
    let idx = 0;
    if(idx < len -1) {
      console.log('len', len);
      return fn.apply(this, args[idx])
    } else {
      return
    }
  }
  function fn1(a,b,c,d) {
    return a + b + c + d
  }
  let curryFn = curry(fn1);
  console.log(curryFn(1)(2)(3)(4));