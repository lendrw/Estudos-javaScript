export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 500
) {
  let timer: number | undefined;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}
