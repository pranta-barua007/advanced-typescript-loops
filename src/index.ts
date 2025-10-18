// Sample entrypoint to verify TypeScript build

function sumRange(n: number): number {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const n = 10;
console.log(`sum of 1..${n} =`, sumRange(n));

export { sumRange };
