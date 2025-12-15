
'use client'

import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { motion, type Variants } from 'motion/react'
import IconifyIcon from '@/modules/client/common/components/IconifyIcon'
import productDetail from '../mocks/product-detail.json'

type Tone = 'blue' | 'green' | 'purple' | 'orange'

type ProductDetailData = {
  name: string
  tagline: string
  annualYield: { value: number; unit: string; label: string }
  highlights: Array<{ label: string; value: string; icon: string; tone: Tone }>
  strategy: { title: string; description: string }
  portfolio: {
    title: string
    items: Array<{
      name: string
      subtitle: string
      allocationPct: number
      yieldPct: number
      color: string
    }>
  }
  performance12m: { title: string; points: Array<{ label: string; value: number }> }
  riskAnalysis: {
    title: string
    items: Array<{ label: string; level: string; value: number; color: string }>
    note: string
  }
  feesTerms: { title: string; rows: Array<{ label: string; value: string }> }
  documents: {
    title: string
    items: Array<{ title: string; subtitle: string; icon: string; href: string }>
  }
  team: {
    title: string
    members: Array<{ name: string; role: string; meta: string }>
  }
}

const toneClasses: Record<
  Tone,
  { wrap: string; iconWrap: string; icon: string; label: string; value: string }
> = {
  blue: {
    wrap: 'bg-[#EFF6FF]',
    iconWrap: 'bg-blue-100',
    icon: 'text-[#2563EB]',
    label: 'text-[#1E3A8A]',
    value: 'text-[#1E3A8A]',
  },
  green: {
    wrap: 'bg-[#F0FDF4]',
    iconWrap: 'bg-emerald-100',
    icon: 'text-[#16A34A]',
    label: 'text-[#14532D]',
    value: 'text-emerald-900',
  },
  purple: {
    wrap: 'bg-[#FAF5FF]',
    iconWrap: 'bg-purple-100',
    icon: 'text-[#9333EA]',
    label: 'text-purple-700',
    value: 'text-purple-900',
  },
  orange: {
    wrap: 'bg-[#FFF7ED]',
    iconWrap: 'bg-orange-100',
    icon: 'text-[#EA580C]',
    label: 'text-[#7C2D12]',
    value: 'text-[#7C2D12]',
  },
}

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const EChartsLineChart = ({
  points,
}: {
  points: Array<{ label: string; value: number }>
}) => {
  const elRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    if (!elRef.current) return

    if (!chartRef.current) {
      chartRef.current = echarts.init(elRef.current)
    }

    const chart = chartRef.current
    const labels = points.map((p) => p.label)
    const values = points.map((p) => p.value)

    const minVal = Math.min(...values)
    const maxVal = Math.max(...values)
    const step = 0.5
    const yMin = Math.floor(minVal / step) * step
    const yMax = Math.ceil(maxVal / step) * step

    chart.setOption(
      {
        backgroundColor: '#FFFFFF',
        grid: { left: 44, right: 22, top: 28, bottom: 56, containLabel: true },
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: { type: 'line' },
        },
        xAxis: {
          type: 'category',
          data: labels,
          boundaryGap: false,
          axisTick: { show: false },
          axisLine: { lineStyle: { color: '#E5E7EB' } },
          axisLabel: { color: '#6B7280', fontSize: 11, rotate: -45, margin: 16 },
        },
        yAxis: {
          type: 'value',
          min: yMin,
          max: yMax,
          interval: step,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: '#6B7280', fontSize: 11 },
          splitLine: { lineStyle: { color: '#EEF2F7' } },
        },
        series: [
          {
            type: 'line',
            data: values,
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: true,
            lineStyle: { width: 2.5, color: '#1D4ED8' },
            itemStyle: {
              color: '#1D4ED8',
              borderColor: '#FFFFFF',
              borderWidth: 2,
            },
          },
        ],
      },
      { notMerge: true }
    )

    const ro = new ResizeObserver(() => chart.resize())
    ro.observe(elRef.current)

    return () => {
      ro.disconnect()
      chart.dispose()
      chartRef.current = null
    }
  }, [points])

  return <div ref={elRef} className="w-full h-[260px] sm:h-[300px]" />
}

const initialsFromName = (name: string) => {
  const parts = name
    .split(/\s+/)
    .map((p) => p.trim())
    .filter(Boolean)
  const first = parts[0]?.[0] ?? 'U'
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : ''
  return (first + last).toUpperCase()
}

const ProductDetail = () => {
  const data = productDetail as ProductDetailData

  return (
    <section className="relative py-8 sm:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
                {data.name}
              </h1>
              <p className="text-sm sm:text-base text-[#4B5563] mt-1">{data.tagline}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold text-[#16A34A] leading-none">
                {data.annualYield.value}
                {data.annualYield.unit}
              </div>
              <div className="text-sm sm:text-base text-[#6B7280] mt-1">
                {data.annualYield.label}
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-5"
          >
            {data.highlights.map((h) => {
              const c = toneClasses[h.tone]
              return (
                <motion.div
                  key={h.label}
                  variants={fadeUp}
                  className={`rounded-lg ${c.wrap} p-4 grid grid-cols-[auto,1fr] grid-rows-[auto,auto] gap-x-3 gap-y-1`}
                >
                  <div className="rounded-lg row-start-1 col-start-1 self-center">
                    <IconifyIcon icon={h.icon} width={16} height={16} className={c.icon} />
                  </div>
                  <div className={`text-sm sm:text-base font-medium ${c.label} row-start-1 col-start-2 self-center`}>{h.label}</div>
                  <div className={`text-base sm:text-xl font-bold ${c.value} row-start-2 col-start-2`}>{h.value}</div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="text-lg font-semibold text-[#111827]">{data.strategy.title}</div>
            <p className="text-sm sm:text-base text-[#374151] mt-2 leading-relaxed">
              {data.strategy.description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6"
          >
            <div className="text-xl font-semibold text-[#111827]">{data.portfolio.title}</div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-4 space-y-3"
            >
              {data.portfolio.items.map((it) => (
                <motion.div
                  key={it.name}
                  variants={fadeUp}
                  className="rounded-xl bg-gray-50 border border-gray-100 p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span
                      className="mt-1.5 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: it.color }}
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#111827] truncate">
                        {it.name}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#6B7280] mt-0.5">
                        {it.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#111827]">{it.allocationPct}%</div>
                    <div className="text-[11px] sm:text-xs text-[#22C55E] mt-0.5">
                      {it.yieldPct}% yield
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-7"
          >
            <div className="text-xl sm:text-2xl font-semibold text-[#111827]">{data.performance12m.title}</div>
            <div className="mt-5">
              <EChartsLineChart points={data.performance12m.points} />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-7"
          >
            <div className="text-xl sm:text-2xl font-semibold text-[#111827]">{data.riskAnalysis.title}</div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-5 space-y-4"
            >
              {data.riskAnalysis.items.map((r) => (
                <motion.div
                  key={r.label}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
                >
                  <div className="text-sm text-[#374151]">{r.label}</div>
                  <div className="w-full sm:w-auto flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: r.color }}
                      aria-hidden="true"
                    />
                    <div className="flex-1 sm:flex-none w-full sm:w-[96px] h-1.5 rounded-full bg-[#E5E7EB] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${clamp(r.value, 0, 100)}%`, backgroundColor: r.color }}
                      />
                    </div>
                    <div
                      className="text-sm font-medium whitespace-nowrap"
                      style={{ color: r.color }}
                    >
                      {r.level}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-6 rounded-xl bg-[#EFF6FF] p-4 flex items-start gap-2.5">
              <div className="mt-0.5 shrink-0">
                <IconifyIcon
                  icon="mdi:information-outline"
                  width={16}
                  height={16}
                  className="text-[#2563EB]"
                />
              </div>
              <div className="text-sm text-[#1E3A8A] leading-relaxed">
                {data.riskAnalysis.note}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-7"
          >
            <div className="text-xl sm:text-2xl font-semibold text-[#111827]">{data.feesTerms.title}</div>
            <div className="mt-5 divide-y divide-gray-100">
              {data.feesTerms.rows.map((row) => (
                <div
                  key={row.label}
                  className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-4"
                >
                  <div className="text-sm text-[#6B7280]">{row.label}</div>
                  <div className="text-sm font-semibold text-[#111827] sm:text-right">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-7 mt-5"
        >
          <div className="text-xl sm:text-2xl font-semibold text-[#111827]">{data.documents.title}</div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {data.documents.items.map((doc) => (
              <motion.a
                key={doc.title}
                variants={fadeUp}
                href={doc.href}
                className="rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors p-4 sm:p-5 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-white border border-gray-100 shrink-0">
                  <IconifyIcon icon={doc.icon} width={24} height={24} className="text-[#2563EB]" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#111827] truncate">{doc.title}</div>
                  <div className="text-[11px] sm:text-xs text-[#6B7280] mt-0.5 truncate">
                    {doc.subtitle}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="text-xl sm:text-2xl font-semibold text-[#111827]">{data.team.title}</div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mt-5 space-y-3"
            >
              {data.team.members.map((m) => (
                <motion.div key={m.name} variants={fadeUp} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold">
                    {initialsFromName(m.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#111827]">{m.name}</div>
                    <div className="text-xs text-[#6B7280]">
                      {m.role} - {m.meta}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductDetail
