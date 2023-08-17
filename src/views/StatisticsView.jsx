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
  defaults,
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
// ChartJS.legend.display = false;
import { Loader } from '../cmps/Loader'
export function StatisticsView() {
  const [chartsData, setChartsData] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  useEffectUpdate(() => {
    if (!data) return
    const mappedData = data.map((d, idx) => {
      const dataMap = {
        labels: [],
        datasets: [
          {
            fill: false,
            borderColor: '#61DBFB',
            label: d.name,
            id: idx,
            data: [],
          },
        ],
      }
      d.values.forEach((t, idx) => {
        dataMap.labels.push(new Date(t.x * 1000).toLocaleDateString('en-CA'))
        // dataMap.labels.push(new Date(t.x * 1000).getMonth())
        dataMap.datasets[0].data.push(t.y)
      })
      return dataMap
    })
    setChartsData(mappedData)
  }, [data])

  const getData = async () => {
    const data = await bitcoinService.getChartsData()
    setData(data)
  }
  let prevMonth = ''
  const options = {
    plugins: {
      legend: {
        labels: {
          boxHeight: 0,
          color: '#fff',
          font: {
            size: 16,
          },
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        border: {
          // color:'#fff',
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#fff',
          callback: function (value, index, ticks) {
            const months = [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ]
            const monthIdx = new Date(this.getLabelForValue(value)).getMonth()
            if (prevMonth === months[monthIdx]) return null
            prevMonth = months[monthIdx]
            return months[monthIdx]
          },
        },
      },
      y: {
        border: {
          // color:'#fff',
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#fff',
          callback: function (value, index, ticks) {
            if (this.getLabelForValue(value).length >= 8)
              return this.getLabelForValue(value).split(',')[0] + 'm'
            if (this.getLabelForValue(value).length >= 4)
              return this.getLabelForValue(value).split(',')[0] + 'k'
            return this.getLabelForValue(value)
          },
        },
      },
    },
  }

  if (!chartsData) return <Loader />
  return (
    <section className="statistics-view">
      {chartsData.map((chartData) => {
        return <Line className='line-chart' data={chartData} options={options} />
      })}
    </section>
  )
}
//options={options}
