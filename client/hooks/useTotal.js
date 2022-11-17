import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getCoupon } from '../api/checkout'

const useTotal = cart => {
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  const [error, setError] = useState('')

  const makesubTotal = () => {
    let subtotal = 0
    cart?.map(item => {
      subtotal += item.quentity * item.price
      return subtotal
    })
    setSubTotal(subtotal)
  }

  const { isError, data, mutate } = useMutation(getCoupon, {
    onSuccess: data => {
      let date1 = new Date()

      if (!data[0]) {
        return toast('NO Coupon Found')
      }

      if (date1.toISOString() <= data[0]?.attributes.validity) {
        let discount = (subTotal * parseInt(data[0].attributes.value)) / 100
        setDiscount(discount)
      } else {
        setError('Coupon is Expired')
        toast('Coupon is Expired')
      }
    },
    onError: error => {
      setError(error.message)
      toast(error.response.data.error.message)
    }
  })

  const makeTotal = () => {
    if (discount == 0) {
      setTotal(subTotal)
    } else {
      setTotal(subTotal - discount)
    }
  }

  return {
    checkCoupon: mutate,
    discount,
    subTotal,
    total,
    makesubTotal,
    makeTotal
  }
}

export default useTotal
