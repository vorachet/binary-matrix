const BinaryMatrix = require('./bm')

let bm = new BinaryMatrix(15)
bm
 .relate(1, 1)
 .relate(2, 2)
 .relate(3, 1).relate(3, 2).relate(3, 3).relate(3, 4).relate(3, 5).relate(3, 8).relate(3, 9)
 .relate(4, 1).relate(4, 2).relate(4, 4).relate(4, 5).relate(4, 9)
 .relate(5, 2).relate(5, 5)
 .relate(6, 2).relate(6, 6)
 .relate(7, 1).relate(7, 2).relate(7, 3).relate(7, 4).relate(7, 5).relate(7, 7).relate(7, 8).relate(7, 9)
 .relate(8, 1).relate(8, 2).relate(8, 3).relate(8, 4).relate(8, 5).relate(8, 8).relate(8, 9)
 .relate(9, 1).relate(9, 2).relate(9, 4).relate(9, 5).relate(9, 9)
 .relate(10, 2).relate(10, 5).relate(10, 6).relate(10, 10)
 .relate(11, 1).relate(11, 2).relate(11, 3).relate(11, 4).relate(11, 5).relate(11, 7).relate(11, 8).relate(11, 9).relate(11, 11)
 .relate(12, 1).relate(12, 2).relate(12, 3).relate(12, 4).relate(12, 5).relate(12, 7).relate(12, 8).relate(12, 9).relate(12, 11).relate(12, 12)
 .relate(13, 1).relate(13, 2).relate(13, 4).relate(13, 5).relate(13, 9).relate(13, 13)
 .relate(14, 2).relate(14, 5).relate(14, 6).relate(14, 5).relate(14, 10).relate(14, 14)
 .relate(15, 2).relate(15, 5).relate(15, 6).relate(15, 5).relate(15, 10).relate(15, 15)

bm.printMatrixEquation()

bm.printReachabilityMatrix()