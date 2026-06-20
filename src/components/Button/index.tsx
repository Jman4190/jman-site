import * as React from 'react'

type Props = {
  className?: string
  onClick?: any
  disabled?: boolean
  children: React.ReactNode
  type?: string
} & React.ComponentPropsWithoutRef<'button'>

export default function Button({ className, ...rest }: Props) {
  return (
    <button
      className={`flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 dark:bg-white dark:bg-opacity-10 text-gray-1000 dark:text-gray-100 hover:border-gray-300 focus:border-gray-1000 focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-600 disabled:opacity-100 disabled:hover:border-gray-200 dark:disabled:bg-white/10 dark:disabled:text-gray-300 dark:disabled:border-gray-700 dark:disabled:hover:border-gray-700 ${className}`}
      {...rest}
    />
  )
}
