import { db } from './index.js';

/**
 * 
 * @param {num} num: Integer
 * @return: Boolean 
 */
const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

/**
 * 
 * @param {date} num: Integer
 * @return {result} result:Array of Objects 
 */
async function process(params) {
    const { date } = params;
    if (isPrime(date)) {
        const collection = db.collection('weather')
        const result = await collection.find().toArray();
        return result;
    }
    return [];
}

export {
    isPrime,
    process
}