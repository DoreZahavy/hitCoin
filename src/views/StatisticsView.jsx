import React, { useState, useEffect } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { Line } from 'react-chartjs-2'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import { Loader } from '../cmps/Loader'
export function StatisticsView() {
  const [chartsData, setChartsData] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  useEffectUpdate(() => {
    // getData()
    if (!data) return
    console.log('data', data)
    const mappedData = data.map((d, idx) => {
      const dataMap = {
        labels: [],
        datasets: [{ label: d.name, id: idx, data: [] }],
      }
      d.values.forEach((t, idx) => {
        dataMap.labels.push(new Date(t.x * 1000).toLocaleDateString('en-CA'))
        dataMap.datasets[0].data.push(t.y)
      })
      console.log('')
      return dataMap
    })
    console.log('mappedData', mappedData)
    setChartsData(mappedData)
  }, [data])

  const getData = async () => {
    // const data = await bitcoinService.getMarketPrice()
    const data = await bitcoinService.getChartsData()
    console.log('data', data)
    setData(data)
  }

  if (!chartsData) return <Loader />
  return (
    <section className="statistics-view">
      {chartsData.map(chartData => {
        return <Line data={chartData} />
      })}
    </section>
  )
}
