import React, { useEffect, useState } from 'react'
import { Text } from '@tarojs/components'
import Taro from '@tarojs/taro';

function Items() {
    const initItems:any = {};
    const [items, setItems] = useState(initItems);

    useEffect(()=>{
        Taro.request({
            url: 'http://127.0.0.1:8000/home',
            success: (res) => {
                setItems(res.data)
            },
            fail: () => {setItems({})}
        })
    },[])

    return (
        <>
        <Text>current time</Text>
        <Text>{items?.time?.updated}</Text>
        </>
    )

}

export default Items;
