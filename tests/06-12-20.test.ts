import { connect, Node } from "../problems/06-12-20";

test('connect of [1,2,3,4,5,null,7] to equal [1,#,2,3,#,4,5,7,#]', () => {
  const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, undefined, new Node(7)))
  let seven = new Node(7)
  let three = new Node(3, undefined, seven)
  let five = new Node(5, undefined, undefined, seven)
  const result = new Node(1, new Node(2, new Node(4, undefined, undefined, five), five, three), three, undefined)
  expect(connect(root)).toEqual(result);
});
