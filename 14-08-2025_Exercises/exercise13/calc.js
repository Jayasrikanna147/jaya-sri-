import { multiply, divide } from './operations.js';

try {
  console.log("Multiply 6 * 7 =", multiply(6, 7));

  console.log("Divide 42 / 7 =", divide(42, 7));

  console.log("Divide 10 / 0 =", divide(10, 0));
} catch (error) {
  console.error(error.message);
  document.body.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
}
