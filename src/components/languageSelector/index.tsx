import React from "react";
import { Radio, RadioGroup, View } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_LANGUAGE } from "../../constants/index";

function LanguageSelector() {
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();


    const languages = [

        {
            value: '中文',
            text: '中文',
            checked: false
        },
        {
            value: 'English',
            text: 'English',
            checked: true
        },
    ]

    return (
        <View>
            <RadioGroup onChange={(event) => {dispatch({type: CHANGE_LANGUAGE, payload: event.detail.value})}}>
            {languages.map(((item) => {
                return <Radio value={item.value} key={item.value} checked={item.checked}>{item.text}</Radio>;
            }))}
            </RadioGroup>
        </View>
    )
}

export default LanguageSelector
