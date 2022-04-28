import React, { useEffect, useState } from 'react'

export const isFalsy = (value: any) => value === 0 ? false : !value

/**
 * 清除空值 
 */
export const cleanObject = (obj: Object) => {
    const result: any = { ...obj }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    });
    return result

}
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = < V > (value: V, delay ? : number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return debounceValue
}