var BinaryMatrix = function (size) {
   this.size = size
   this.m = size
   this.n = size
   this.reachabilities = {}
   this.antecedents = {}
   this.matrix = Array(size).fill(null).map(() => Array(size).fill(0))
}

BinaryMatrix.prototype.validateSetInputs = function(m, n, val) {
   if (val !== 0 && val !== 1) throw new Error('val of binary matrix must be 0 or 1 ')
   if (m > this.m || m <= 0) throw new Error('m must be one of these: {' +
       Array(this.m).fill().map((e,i) => i+1) + '}')
   if (n > this.n || n <= 0) throw new Error('n must be one of these: {' +
       Array(this.n).fill().map((e,i) => i+1) + '}')
}

BinaryMatrix.prototype.relate = function(m, n) {
   this.validateSetInputs(m, n, 1)
   this.matrix[m-1][n-1] = 1
   if (this.reachabilities[n] === undefined) this.reachabilities[n] = {}
   if (this.antecedents[m] === undefined) this.antecedents[m] = {}
   let r = this.reachabilities[n]
   r[m] = 1
   let a = this.antecedents[m]
   a[n] = 1
   return this
}

BinaryMatrix.prototype.reachability = function(element) {
   return  Object.keys(this.reachabilities[element])
}

BinaryMatrix.prototype.antecedent = function(element) {
   return  Object.keys(this.antecedents[element])
}

BinaryMatrix.prototype.printMatrixEquation = function(element) {
   console.log(this.matrix)
}

BinaryMatrix.prototype.printReachabilityMatrix = function(element) {
   console.log('element | reachability| antecedent')
   for (var i = 1; i <= this.size ; i++) {
       console.log('%d | %s | %s', i, this.reachability(i), this.antecedent(i))
   }
}

module.exports = BinaryMatrix