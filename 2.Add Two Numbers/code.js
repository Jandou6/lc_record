/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var addList = (l1, l2, need_add_1=false) => {
      var sum = (l1.val || 0) + (l2.val || 0) + ~~need_add_1;
      var nlist = new ListNode(sum % 10)
      if (l1.next || l2.next) {
          nlist.next = addList((l1 && l1.next)||0, (l2 && l2.next)||0, sum>=10);
      } else if (sum>=10) {
          nlist.next = new ListNode(1);
      }
      return nlist;
  }

  return addList(l1, l2)
};

// 考察内容是链表的基本使用。