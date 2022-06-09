import React, { useEffect, useState } from 'react'
import { Text } from '@tarojs/components'
import Taro from '@tarojs/taro';

function Items() {
    const initItems:any = {};
    const [items, setItems] = useState(initItems);

    useEffect(()=>{
        Taro.request({
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
            success: (res) => {
                setItems(res.data)
            },
            fail: () => {setItems({time: 'no data'})}
        })
    },[])
    
    
        
    return (
        <>
        <Text>time</Text>
        <Text>{items?.time?.updated}</Text>
        </>
    )
    
}

export default Items;