'use client'
import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import IconifyIcon from '@/modules/client/common/components/IconifyIcon'

type FundingSource = 'cash' | 'bank'

const formatUsd = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

const parseUsdInput = (raw: string) => {
  const cleaned = raw.replace(/[^0-9]/g, '')
  if (!cleaned) return 0
  const n = Number(cleaned)
  return Number.isFinite(n) ? n : 0
}

const DetailInvest = () => {
  const product = useMemo(
    () => ({
      name: 'US Treasury Fund',
      subtitle: 'Quỹ trái phiếu chính phủ Mỹ',
      annualProfitPct: 4.2,
      managementFeePct: 0.15,
      minInvest: 1000,
      lockup: 'Không có',
    }),
    []
  )

  const availableBalance = 5000
  const [step] = useState<1 | 2>(1)
  const [amountText, setAmountText] = useState('1500')
  const [fundingSource, setFundingSource] = useState<FundingSource>('cash')

  const amount = useMemo(() => parseUsdInput(amountText), [amountText])
  const isAmountValid = amount >= product.minInvest && amount <= availableBalance
  const estimatedTxFee = 0
  const total = amount + estimatedTxFee

  return (
    <section className="relative py-8 sm:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        <nav className="text-xs sm:text-sm text-[#6B7280] mb-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/product/all" className="hover:text-[#111827] transition-colors">
              Danh mục đầu tư
            </Link>
            <span className="text-[#9CA3AF]">›</span>
            <Link
              href="/product/us-treasury-fund"
              className="hover:text-[#111827] transition-colors"
            >
              {product.name}
            </Link>
            <span className="text-[#9CA3AF]">›</span>
            <span className="text-[#111827] font-medium">Đầu tư</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827]">
                Đầu tư vào {product.name}
              </h1>
              <p className="text-sm sm:text-base text-[#4B5563]">
                Hoàn tất thông tin để thực hiện giao dịch đầu tư
              </p>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={
                      step === 1
                        ? 'w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-semibold'
                        : 'w-8 h-8 rounded-full bg-gray-200 text-[#111827] flex items-center justify-center text-xs font-semibold'
                    }
                  >
                    1
                  </div>
                  <div
                    className={
                      step === 1
                        ? 'text-sm font-semibold text-[#2563EB]'
                        : 'text-sm font-medium text-[#6B7280]'
                    }
                  >
                    Nhập số tiền
                  </div>
                </div>

                <div className="flex-1 h-px bg-gray-200" />

                <div className="flex items-center gap-2">
                  <div
                    className={
                      step === 2
                        ? 'w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-semibold'
                        : 'w-8 h-8 rounded-full bg-gray-200 text-[#111827] flex items-center justify-center text-xs font-semibold'
                    }
                  >
                    2
                  </div>
                  <div
                    className={
                      step === 2
                        ? 'text-sm font-semibold text-[#2563EB]'
                        : 'text-sm font-medium text-[#6B7280]'
                    }
                  >
                    Xem lại &amp; Xác nhận
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-[#374151] mb-2">Số tiền đầu tư</div>
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 flex items-center gap-2">
                <div className="text-[#6B7280] font-semibold">$</div>
                <input
                  value={amountText}
                  onChange={(e) => setAmountText(e.target.value)}
                  inputMode="numeric"
                  className="w-full outline-none text-base sm:text-lg font-semibold text-[#111827] placeholder:text-[#9CA3AF]"
                  placeholder="1,500"
                  aria-label="Số tiền đầu tư"
                />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="text-[#EF4444]">
                  Đầu tư tối thiểu: {formatUsd(product.minInvest)}
                </div>
                <div className="text-[#6B7280]">
                  Số dư khả dụng: {formatUsd(availableBalance)}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-[#111827] mb-3">Nguồn tiền</div>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setFundingSource('cash')}
                  className={
                    fundingSource === 'cash'
                      ? 'w-full text-left rounded-xl border border-[#2563EB] bg-[#EFF6FF] p-4 flex items-center justify-between gap-3'
                      : 'w-full text-left rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors'
                  }
                >
                  <div className="flex items-start gap-3">
                    <div className="pt-0.5">
                      <div
                        className={
                          fundingSource === 'cash'
                            ? 'w-4 h-4 rounded-full border-4 border-[#2563EB] bg-white'
                            : 'w-4 h-4 rounded-full border-2 border-gray-300 bg-white'
                        }
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#111827]">Số dư tiền mặt</div>
                      <div className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                        Khả dụng: {formatUsd(availableBalance)}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-gray-200 shrink-0">
                    <IconifyIcon icon="mdi:wallet" width={18} height={18} className="text-[#6B7280]" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFundingSource('bank')}
                  className={
                    fundingSource === 'bank'
                      ? 'w-full text-left rounded-xl border border-[#2563EB] bg-[#EFF6FF] p-4 flex items-center justify-between gap-3'
                      : 'w-full text-left rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors'
                  }
                >
                  <div className="flex items-start gap-3">
                    <div className="pt-0.5">
                      <div
                        className={
                          fundingSource === 'bank'
                            ? 'w-4 h-4 rounded-full border-4 border-[#2563EB] bg-white'
                            : 'w-4 h-4 rounded-full border-2 border-gray-300 bg-white'
                        }
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#111827]">Chuyển khoản ngân hàng</div>
                      <div className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                        Nạp tiền từ tài khoản ngân hàng
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-gray-200 shrink-0">
                    <IconifyIcon icon="mdi:bank" width={18} height={18} className="text-[#6B7280]" />
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="w-full sm:w-1/2 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gray-100 text-[#374151] hover:bg-gray-200 transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                disabled={!isAmountValid}
                className={
                  isAmountValid
                    ? 'w-full sm:w-1/2 py-3 rounded-lg font-semibold text-sm sm:text-base bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm'
                    : 'w-full sm:w-1/2 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gray-200 text-[#9CA3AF] cursor-not-allowed'
                }
              >
                Tiếp tục
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 sm:p-6 h-fit">
            <div className="text-base sm:text-lg font-semibold text-[#111827]">Thông tin đầu tư</div>

            <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4 flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-[#DBEAFE] shrink-0">
                <IconifyIcon
                  icon="fluent:building-bank-24-filled"
                  width={18}
                  height={18}
                  className="text-[#2563EB]"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#111827] truncate">{product.name}</div>
                <div className="text-xs sm:text-sm text-[#6B7280] mt-0.5">{product.subtitle}</div>
              </div>
            </div>

            <div className="mt-4 divide-y divide-gray-100">
              <div className="py-3 flex items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-[#6B7280]">Lợi nhuận hàng năm</div>
                <div className="text-xs sm:text-sm font-semibold text-[#16A34A]">{product.annualProfitPct}%</div>
              </div>
              <div className="py-3 flex items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-[#6B7280]">Phí quản lý</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111827]">{product.managementFeePct}%</div>
              </div>
              <div className="py-3 flex items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-[#6B7280]">Đầu tư tối thiểu</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111827]">{formatUsd(product.minInvest)}</div>
              </div>
              <div className="py-3 flex items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-[#6B7280]">Thời gian khóa</div>
                <div className="text-xs sm:text-sm font-semibold text-[#111827]">{product.lockup}</div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-100">
              <div className="text-sm font-semibold text-[#111827]">Dự kiến đầu tư</div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm text-[#6B7280]">Số tiền</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#111827]">{formatUsd(amount)}</div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm text-[#6B7280]">Phí giao dịch</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#111827]">{formatUsd(estimatedTxFee)}</div>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm font-semibold text-[#111827]">Tổng cộng</div>
                  <div className="text-xs sm:text-sm font-bold text-[#111827]">{formatUsd(total)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailInvest
