import { useMutation } from '@tanstack/react-query'

export const apiTest = async (body: any) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE}/test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json())

export const useApiTest = () => {
  type TData = {
    result: string
  }
  type TError = unknown
  type TVariables = {
    foo: string
    bar: number
  }
  type TContext = unknown

  const mutation = useMutation<TData, TError, TVariables, TContext>({
    mutationFn: ({ foo, bar }) => apiTest({ foo, bar }),
    onSuccess: (data) => {
      console.log('useApi /test success', data)
    },
    onError: (error) => {
      console.log('useApi /test error', error)
    },
  })

  return mutation
}
