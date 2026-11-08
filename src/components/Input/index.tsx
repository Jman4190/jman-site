import * as React from 'react'

const styles =
  'w-full rounded focus:outline-none px-4 py-2 focus:border-gray-1000 text-primary placeholder:text-gray-700 dark:placeholder:text-gray-400 border-gray-200 dark:border-gray-800 dark:focus:border-gray-600 bg-gray-1000/5 dark:bg-white/5 hover:bg-gray-1000/10 dark:hover:bg-white/10 focus:ring-0'

export function Input(props) {
  return <input className={styles} {...props} />
}

export function Textarea(props) {
  return <textarea className={`${styles} block`} {...props} />
}

export function Select(props) {
  return <select className={styles} {...props} />
}
