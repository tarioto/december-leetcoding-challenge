import { cherryPickup } from "../problems/19-12-20";

test('cherryPickup of grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]] to equal 24', () => {
  expect(cherryPickup([[3,1,1],[2,5,1],[1,5,5],[2,1,1]])).toStrictEqual(24);
});

test('cherryPickup of grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]] to equal 28', () => {
  expect(cherryPickup([[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]])).toStrictEqual(28);
});

test('cherryPickup of grid = [[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]] to equal 22', () => {
  expect(cherryPickup([[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]])).toStrictEqual(22);
});

test('cherryPickup of grid = [[1,1],[1,1]] to equal 4', () => {
  expect(cherryPickup([[1,1],[1,1]])).toStrictEqual(4);
});
