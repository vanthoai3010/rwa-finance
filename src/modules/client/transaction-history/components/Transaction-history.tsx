'use client'
import React, { useMemo, useState } from 'react'
import { Icon } from '@iconify/react'

type TxStatus = 'pending' | 'completed'
type TxType = 'buy' | 'sell' | 'dividend'

type TxRow = {
  id: string
  date: string
  time: string
  type: TxType
  fundName: string
  fundCode: string
  amountText: string
  secondaryText: string
  status: TxStatus
}

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState<'tx' | 'earnings' | 'deposit'>('tx')
  const [range, setRange] = useState<'all' | '30d' | '7d'>('all')
  const [search, setSearch] = useState('')

  const stats = useMemo(
    () => [
      {
        label: 'Total Transactions',
        value: '247',
        icon: 'mdi:file-document-outline',
        iconBg: 'bg-[#DBEAFE]',
        iconColor: 'text-[#2563EB]',
      },
      {
        label: 'Total Invested',
        value: '$125,430',
        icon: 'mdi:arrow-up',
        iconBg: 'bg-[#DCFCE7]',
        iconColor: 'text-[#16A34A]',
      },
      {
        label: 'Total Earnings',
        value: '$8,247',
        icon: 'mdi:cash-multiple',
        iconBg: 'bg-[#F3E8FF]',
        iconColor: 'text-[#7C3AED]',
      },
      {
        label: 'Pending Orders',
        value: '3',
        icon: 'mdi:clock-outline',
        iconBg: 'bg-[#FFEDD5]',
        iconColor: 'text-[#EA580C]',
      },
    ],
    []
  )

  const rows = useMemo<TxRow[]>(
    () => [
      {
        id: '1',
        date: 'Nov 5, 2024',
        time: '10:30 AM',
        type: 'buy',
        fundName: 'US Treasury Fund',
        fundCode: '$OUSG',
        amountText: '$5,000.00',
        secondaryText: '125.5 units',
        status: 'pending',
      },
      {
        id: '2',
        date: 'Nov 4, 2024',
        time: '2:15 PM',
        type: 'sell',
        fundName: 'Real Estate Fund',
        fundCode: '$RWRE',
        amountText: '$2,500.00',
        secondaryText: '50.2 units',
        status: 'completed',
      },
      {
        id: '3',
        date: 'Nov 3, 2024',
        time: '9:45 AM',
        type: 'buy',
        fundName: 'Technology Fund',
        fundCode: '$TECH',
        amountText: '$10,000.00',
        secondaryText: '185.3 units',
        status: 'completed',
      },
      {
        id: '4',
        date: 'Nov 1, 2024',
        time: '4:20 PM',
        type: 'dividend',
        fundName: 'Real Estate Fund',
        fundCode: '$RWRE',
        amountText: '+$125.50',
        secondaryText: 'Monthly distribution',
        status: 'completed',
      },
    ],
    []
  )

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) => {
      return (
        r.fundName.toLowerCase().includes(q) ||
        r.fundCode.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q)
      )
    })
  }, [rows, search])

  const tabBtn = (key: 'tx' | 'earnings' | 'deposit', label: string, icon: string) => {
    const isActive = activeTab === key
    return (
      <button
        type="button"
        onClick={() => setActiveTab(key)}
        className={
          isActive
            ? 'relative inline-flex items-center gap-1.5 sm:gap-2 px-1 pb-3 text-xs sm:text-sm font-semibold text-[#2563EB] whitespace-nowrap'
            : 'relative inline-flex items-center gap-1.5 sm:gap-2 px-1 pb-3 text-xs sm:text-sm font-medium text-[#6B7280] hover:text-[#111827] whitespace-nowrap'
        }
      >
        <Icon icon={icon} width={14} height={14} className="sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden">{label.split(' ')[0]}</span>
        {isActive ? <span className="absolute left-0 -bottom-px h-0.5 w-full bg-[#2563EB]" /> : null}
      </button>
    )
  }

  const typeBadge = (type: TxType) => {
    if (type === 'buy') {
      return (
        <div className="w-6 h-6 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
          <Icon icon="mdi:plus" width={14} height={14} />
        </div>
      )
    }
    if (type === 'sell') {
      return (
        <div className="w-6 h-6 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center">
          <Icon icon="mdi:minus" width={14} height={14} />
        </div>
      )
    }
    return (
      <div className="w-6 h-6 rounded-full bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center">
        <Icon icon="mdi:cash" width={14} height={14} />
      </div>
    )
  }

  const statusPill = (status: TxStatus) => {
    if (status === 'pending') {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#FEF9C3] px-2.5 py-1 text-xs font-semibold text-[#A16207]">
          <span className="w-2 h-2 rounded-full bg-[#CA8A04]" />
          Pending
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-xs font-semibold text-[#15803D]">
        <Icon icon="mdi:check" width={14} height={14} />
        Completed
      </span>
    )
  }

  return (
    <section className="w-full py-4 px-4 sm:py-6 md:py-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-[#111827]">Transaction History</div>
            <div className="mt-1 text-xs sm:text-sm text-[#6B7280]">Complete record of all your trading activities and fund flows</div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="relative flex-1 sm:flex-none">
              <select
                value={range}
                onChange={(e) => setRange(e.target.value as typeof range)}
                className="h-9 w-full sm:w-auto appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-10 text-sm text-[#111827] shadow-sm outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              >
                <option value="all">All Time</option>
                <option value="30d">Last 30 days</option>
                <option value="7d">Last 7 days</option>
              </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#6B7280]">
                <Icon icon="mdi:chevron-down" width={18} height={18} />
              </div>
            </div>

            <button
              type="button"
              className="h-9 flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-colors"
            >
              <Icon icon="mdi:download" width={16} height={16} />
              <span className="hidden xs:inline">Export</span>
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
          <div className="flex items-center gap-6 sm:gap-8 min-w-max sm:min-w-0">
            {tabBtn('tx', 'Transaction History', 'mdi:swap-horizontal')}
            {tabBtn('earnings', 'Earnings History', 'mdi:chart-line')}
            {tabBtn('deposit', 'Deposits & Withdrawals', 'mdi:bank')}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm flex items-center justify-between gap-2 sm:gap-3">
              <div className="min-w-0">
                <div className="text-xs text-[#6B7280] truncate">{s.label}</div>
                <div className="mt-1 text-lg sm:text-xl font-bold text-[#111827] truncate">{s.value}</div>
              </div>
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0`}>
                <Icon icon={s.icon} width={16} height={16} className={`sm:w-[18px] sm:h-[18px] ${s.iconColor}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden -mx-4 sm:mx-0">
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold text-[#111827]">Recent Transactions</div>
            <div className="flex items-center gap-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="h-9 flex-1 sm:w-48 md:w-64 rounded-lg border border-gray-200 bg-white px-3 text-sm text-[#111827] outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
              <button
                type="button"
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50 shrink-0"
                aria-label="Filter"
              >
                <Icon icon="mdi:filter-variant" width={18} height={18} />
              </button>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="block lg:hidden divide-y divide-gray-100">
            {filteredRows.map((r) => {
              const typeLabel = r.type === 'buy' ? 'Buy' : r.type === 'sell' ? 'Sell' : 'Dividend'
              const canCancel = r.status === 'pending'

              return (
                <div key={r.id} className="px-4 sm:px-5 py-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {typeBadge(r.type)}
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#111827]">{typeLabel}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5 truncate">{r.fundName}</div>
                      </div>
                    </div>
                    {statusPill(r.status)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs text-[#6B7280]">Amount</div>
                      <div className={`mt-1 font-semibold ${r.amountText.startsWith('+') ? 'text-[#16A34A]' : 'text-[#111827]'}`}>
                        {r.amountText}
                      </div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{r.secondaryText}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6B7280]">Date</div>
                      <div className="mt-1 text-[#111827] font-medium text-sm">{r.date}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{r.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                    <button type="button" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
                      View Details
                    </button>
                    {canCancel ? (
                      <button type="button" className="text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C]">
                        Cancel
                      </button>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-xs font-semibold text-[#6B7280]">
                  <th className="px-5 py-3 text-left">Date &amp; Time</th>
                  <th className="px-5 py-3 text-left">Type</th>
                  <th className="px-5 py-3 text-left">Fund</th>
                  <th className="px-5 py-3 text-left">Amount</th>
                  <th className="px-5 py-3 text-left">Status</th>
                  <th className="px-5 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRows.map((r) => {
                  const typeLabel = r.type === 'buy' ? 'Buy' : r.type === 'sell' ? 'Sell' : 'Dividend'
                  const canCancel = r.status === 'pending'

                  return (
                    <tr key={r.id} className="text-sm">
                      <td className="px-5 py-4">
                        <div className="text-[#111827] font-medium">{r.date}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5">{r.time}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {typeBadge(r.type)}
                          <div className="text-[#111827] font-semibold">{typeLabel}</div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-[#111827] font-medium">{r.fundName}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5">{r.fundCode}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className={r.amountText.startsWith('+') ? 'text-[#16A34A] font-semibold' : 'text-[#111827] font-semibold'}>
                          {r.amountText}
                        </div>
                        <div className="text-xs text-[#6B7280] mt-0.5">{r.secondaryText}</div>
                      </td>
                      <td className="px-5 py-4">{statusPill(r.status)}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-4">
                          <button type="button" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
                            View
                          </button>
                          {canCancel ? (
                            <button type="button" className="text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C]">
                              Cancel
                            </button>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-[#6B7280] text-center sm:text-left">Showing 1-10 of 247</div>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <button
                type="button"
                className="h-8 w-8 sm:h-9 sm:w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50"
                aria-label="Previous"
              >
                <Icon icon="mdi:chevron-left" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>

              <button type="button" className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#2563EB] text-white text-xs sm:text-sm font-semibold">1</button>
              <button type="button" className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-gray-200 bg-white text-[#374151] text-xs sm:text-sm font-semibold hover:bg-gray-50">2</button>
              <button type="button" className="hidden xs:block h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-gray-200 bg-white text-[#374151] text-xs sm:text-sm font-semibold hover:bg-gray-50">3</button>
              <div className="px-1 text-[#9CA3AF] text-xs sm:text-sm">…</div>
              <button type="button" className="hidden xs:block h-8 w-8 sm:h-9 sm:w-9 rounded-lg border border-gray-200 bg-white text-[#374151] text-xs sm:text-sm font-semibold hover:bg-gray-50">25</button>

              <button
                type="button"
                className="h-8 w-8 sm:h-9 sm:w-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-[#6B7280] hover:bg-gray-50"
                aria-label="Next"
              >
                <Icon icon="mdi:chevron-right" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionHistory