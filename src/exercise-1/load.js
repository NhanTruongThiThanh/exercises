export function load(text) {
    if (!text) return null;
    let newArr = text.split('\n').map(item => {
        let obj = {};
        let value = item.split(';');
        if (value.length > 1){
            value.map(it => {
                const keyValue = it.split('=');
                obj = Object.assign(obj, { [`${keyValue[0]}`]: keyValue[1] });
            });
        } else {
            const keyValue = item.split('=');
            obj = Object.assign(obj, { [`${keyValue[0]}`]: keyValue[1] });
        }
        return obj;
  });
  return newArr;
}