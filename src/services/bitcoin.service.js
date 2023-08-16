import axios from 'axios'
import { utilService } from './util.service'


const CACHE_KEY = 'cacheDB'
let cache = utilService.loadFromStorage(CACHE_KEY) || {}

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
  getTradeVolume,
  getAvgBlockSize,
  getChartsData
}

async function getChartsData() {
 
  const transactions = getConfirmedTransactions()
  const marketPrice = getMarketPrice()
  const tradeVolume = getTradeVolume()
  const avgBlockSize = getAvgBlockSize()
  // return Promise.all(transactions,marketPrice,tradeVolume,avgBlockSize)
  //   .then(res=>res.data)
  const responses = await Promise.all([
    transactions,marketPrice,tradeVolume,avgBlockSize
  ])
  
  return responses
}

async function getRate() {

  // CACHING
  if (cache.rate) {
    console.log('No need to fetch, retrieving from Cache')
    return Promise.resolve(cache.rate)
  }
  try {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    const { data } = await axios.get(url)
    cache.rate = data
    utilService.saveToStorage(CACHE_KEY, cache)
    return Promise.resolve(data)
  } catch (err) {
    console.log('failed to retrieve bitcoin rate:', err)
  }
}


async function getConfirmedTransactions() {
  // return new Promise((resolve, reject) => {
  //   resolve("Hi! ");
  // });
    // CACHING
    if (cache.transaction) {
      console.log('No need to fetch, retrieving from Cache')
    return Promise.resolve(cache.transaction)
  }
  try {
    const url = 'https://api.blockchain.info/charts/n-transactions?timespan=6months&format=json&cors=true'
    const res = await axios.get(url)
    cache.transaction = res.data
    utilService.saveToStorage(CACHE_KEY, cache)
    return Promise.resolve(res.data)
  } catch (err) {
    console.log('failed to retrieve confirmed transactions:', err)
  }

}

async function getTradeVolume() {
//   return new Promise((resolve, reject) => {
//     resolve("Hi! ");
// });
  // CACHING
  if (cache.tradeVolume) {
    console.log('No need to fetch, retrieving from Cache')
    return Promise.resolve(cache.tradeVolume)
  }
  try {
    const url = 'https://api.blockchain.info/charts/trade-volume?timespan=6months&format=json&cors=true'
    const res = await axios.get(url)
    cache.tradeVolume = res.data
    utilService.saveToStorage(CACHE_KEY, cache)
    return Promise.resolve(res.data)
  } catch (err) {
    console.log('failed to retrieve trade volume:', err)
  }
}

async function getAvgBlockSize() {
//   return new Promise((resolve, reject) => {
//     resolve("Hi! ");
// });
  // CACHING
  if (cache.avgBlockSize) {
    console.log('No need to fetch, retrieving from Cache')
    return Promise.resolve(cache.avgBlockSize)
  }
  try {
    const url = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
    const res = await axios.get(url)
    cache.avgBlockSize = res.data
    utilService.saveToStorage(CACHE_KEY, cache)
    console.log('res.data avgBlockSize:', res.data)
    return Promise.resolve(res.data)
  } catch (err) {
    console.log('failed to retrieve average block size:', err)
  }

}

async function getMarketPrice() {
//   return new Promise((resolve, reject) => {
//     resolve("Hi! ");
// });
  // CACHING
  if (cache.marketPrice) {
    console.log('No need to fetch, retrieving from Cache')
    return Promise.resolve(cache.marketPrice)
  }
  try {

    const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    cache.marketPrice = res.data
    utilService.saveToStorage(CACHE_KEY, cache)
    return Promise.resolve(res.data)
  } catch (err) {
    console.log('failed to retrieve market price:', err)
  }

}