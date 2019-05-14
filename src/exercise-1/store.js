export function store(arr) {
	if (!arr) return null;
	let itemString = arr.map(item => Object.entries(item)
      .map(item => item.join('='))
      .join(';')
  );
  return itemString.join('\n');
}
