import { useStyle } from 'uni-comps-vue3/hooks'
import type { IConfig } from 'uni-comps-vue3'

const config: IConfig = {
  size: {
    mini: '40rpx',
    small: '56rpx',
    normal: '72rpx',
    large: '88rpx',
  },

  fontSize: {
    mini: '24rpx',
    small: '28rpx',
    normal: '32rpx',
    large: '36rpx',
  },

  style: {
    ...useStyle({
      paddingLeft: '20rpx',
      paddingRight: '20rpx',
    }, ['button']),
  },
}

export default config
