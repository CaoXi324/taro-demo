import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    Taro.navigateTo({
      url: '/pages/items/items'
    });

  }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!hhh</Text>
        <Text onClick={this.handleClick}>items</Text>
        {/* <Navigator url='/pages/items/items'>items</Navigator> */}
      </View>
    )
  }
}
