/** Format amounts in Indian Rupees (en-IN grouping). */
export function formatINR(
  amount: number,
  options?: { minimumFractionDigits?: number; maximumFractionDigits?: number },
) {
  const min = options?.minimumFractionDigits ?? 2;
  const max = options?.maximumFractionDigits ?? 2;
  return `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  })}`;
}
