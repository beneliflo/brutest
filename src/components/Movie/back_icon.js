import React from 'react'

const BackIcon = () => (
  <svg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <defs>
      <path d='M13.8133333,27.6733333 C6.20666667,27.6733333 0.0466666667,21.5133333 0.0466666667,13.9066667 C0.0466666667,6.3 6.20666667,0.14 13.8133333,0.14 C21.42,0.14 27.58,6.3 27.58,13.9066667 C27.58,21.5133333 21.3733333,27.6733333 13.8133333,27.6733333 L13.8133333,27.6733333 Z'
      id='path-1' />
      <filter x='-25.4%' y='-18.2%' width='150.8%' height='150.8%' filterUnits='objectBoundingBox'
      id='filter-2'>
        <feOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur stdDeviation='2' in='shadowOffsetOuter1' result='shadowBlurOuter1'
        />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08203125 0'
        in='shadowBlurOuter1' />
      </filter>
    </defs>
    <g id='Page-1' fill='none' fillRule='evenodd'>
      <g id='Inner' transform='translate(-9 -23)'>
        <g id='back_icon' transform='translate(13 25)'>
          <g id='Shape' opacity='0.9' fill='#000'>
            <use filter='url(#filter-2)' xlinkHref='#path-1' />
            <use xlinkHref='#path-1' />
          </g>
          <path d='M20.3,13.02 L9.84666667,13.02 L13.3,9.56666667 C13.58,9.28666667 13.58,8.77333333 13.3,8.49333333 C13.02,8.21333333 12.5066667,8.21333333 12.2266667,8.49333333 L7.79333333,12.9266667 C7.32666667,13.3933333 7.32666667,14.14 7.79333333,14.6066667 L12.2266667,19.04 C12.3666667,19.18 12.5533333,19.2733333 12.7866667,19.2733333 C13.02,19.2733333 13.16,19.18 13.3466667,19.04 C13.6266667,18.76 13.6266667,18.2466667 13.3466667,17.9666667 L9.89333333,14.5133333 L20.3,14.5133333 C20.72,14.5133333 21.0466667,14.1866667 21.0466667,13.7666667 C21.0466667,13.3466667 20.72,13.02 20.3,13.02 L20.3,13.02 Z'
          id='Shape' fill='#FFF' />
        </g>
      </g>
    </g>
  </svg>

)

export default BackIcon
