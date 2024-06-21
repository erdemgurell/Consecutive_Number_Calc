function calculateConsecutiveNumbers() {
  const startNumber = parseInt(document.getElementById('startNumber').value);
  const count = parseInt(document.getElementById('count').value);
  const includeEdgeNumbers  = document.getElementById('includeEdgeNumbers').checked;
  let result = 0;
  let printer = "";

  if (isNaN(startNumber) || isNaN(count) || count <= 0) {
      result = 'Please enter valid numbers';
  } else {
      const start = includeEdgeNumbers ? startNumber : startNumber + 1;
      const end = includeEdgeNumbers ? count + 1 : count;

      for (let i = start; i < end; i++) {
          result += i;
          if (i + 1 === end){
              printer += i
          } else {
              printer += i + " + ";
          }
      }

  }

  document.getElementById('result').textContent = result;
  document.getElementById('printer').textContent = printer;
}