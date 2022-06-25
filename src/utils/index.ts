import React, { useEffect, useRef, useState } from 'react'

export const isFalsy = (value: any) => value === 0 ? false : !value

export const isVoid = (value: any) => value === undefined || value === null || value === ''

/**
 * 清除空值 
 */
export const cleanObject = (obj: {
    [key: string]: unknown }) => {
    const result: any = { ...obj }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isVoid(value)) {
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
// 利用闭包特性
// export const useDocumentTitle = (title: string, keepShow: boolean = true) => {
//     console.log(title);
//     const oldTitle = document.title
//     useEffect(() => {
//         document.title = title
//     }, [title])
//     useEffect(() => {
//         return () => {
//             if (!keepShow) {
//                 document.title = oldTitle
//             }
//         }
//     }, [])

// }

// 使用useRef
export const useDocumentTitle = (title: string, keepShow: boolean = true) => {
    console.log(title);
    const oldTitle = useRef(document.title).current
    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(() => {
        return () => {
            if (!keepShow) {
                document.title = oldTitle
            }
        }
    }, [])

}
export const resetRoute=()=>window.location.href=window.location.origin