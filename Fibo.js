function fibo(n) {
  var serie = [0, 1];
  for (var i = 2; i <= n; i++) {
    var siguiente = serie[i - 1] + serie[i - 2];
    serie.push(siguiente);
  }
  return serie;
}
var fibo = fibo(20);
console.log(fibo);