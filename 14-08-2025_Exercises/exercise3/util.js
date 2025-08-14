class Util {
  static getDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }
  static getPIValue() {
    return Math.PI;
  }
  static convertC2F(celsius) {
    return (celsius * 9/5) + 32;
  }
  static getFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
}
document.getElementById('date').textContent = Util.getDate();
document.getElementById('pi').textContent = Util.getPIValue();
document.getElementById('fahrenheit').textContent = Util.convertC2F(30);
document.getElementById('fibonacci').textContent = Util.getFibonacci(5).join(', ');
