import * as React from 'react'
import { ErrorAlert, SuccessAlert } from '~/components/Alert'
import Button from '~/components/Button'
import { Input } from '~/components/Input'

export default function WritingSubscribeBox() {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState('pending')
  const [errorMessage, setErrorMessage] = React.useState('')

  function onChange(e) {
    if (status !== 'pending') setStatus('pending')
    return setEmail(e.target.value.trim())
  }

  async function submit(e) {
    e.preventDefault()

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setStatus('error')
      setErrorMessage(error)
      return
    }

    setEmail('')
    setStatus('succeeded')
  }

  return (
    <div
      className="p-8 -mx-4 space-y-4 border-t border-b border-gray-300 border-dashed md:-mx-8 dark:border-gray-700 bg-elevated"
      data-cy="writing-subscribe-box"
    >
      <div className="space-y-2 ">
        <p className="flex items-center font-semibold text-primary">
          New posts delivered to your inbox
        </p>
        <p className="text-tertiary">
          Get updates whenever I publish something new. If you're not ready to smash subscribe just yet,
          give me a test drive on{' '}
          <a
            href="https://twitter.com/jman4190/"
            className="font-normal rounded-sm px-0.5 -mx-0.5 bg-blue-500 text-primary bg-opacity-20 hover:bg-opacity-30 dark:hover:bg-opacity-100"
          >
            Twitter
          </a>
          .
        </p>
      </div>
      {status === 'succeeded' ? (
        <SuccessAlert>Thanks for subscribing!</SuccessAlert>
      ) : (
        <form
          onSubmit={submit}
          className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3"
        >
          <label className="md:col-span-2">
            <span className="sr-only">Email address</span>
            <Input
              value={email}
              disabled={status === 'loading'}
              onChange={onChange}
              placeholder="Email address"
              type="email"
              name="email"
            />
          </label>
          <Button
            onClick={submit}
            disabled={status === 'submitting' || !email}
            type="submit"
            className="w-full"
          >
            Subscribe
          </Button>
        </form>
      )}
      {status === 'error' && <ErrorAlert>{errorMessage}</ErrorAlert>}
    </div>
  )
}
