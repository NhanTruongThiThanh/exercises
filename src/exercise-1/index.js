import data from '../json/ex-1.json';
import { store } from './store';
import { load } from './load';

function main() {
    const text = store(data);
    const a = load(text);
    console.log(text);
    console.log(a);
}

main();
