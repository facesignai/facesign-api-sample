import * as React from 'react'

import { IconSvgProps } from '@/types'

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    width='154'
    height='31'
    viewBox='0 0 154 31'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M17.9251 5.2009H7.68217V2H17.9251C21.4607 2 24.3269 4.86619 24.3269 8.40181V18.6447H21.126V8.40181C21.126 6.634 19.6929 5.2009 17.9251 5.2009Z'
      fill='#4FD1C5'
    />
    <path
      d='M6.40181 23.126H16.6447V26.3269H6.40181C2.86619 26.3269 -3.09094e-07 23.4607 0 19.9251L6.61384e-07 9.68217H3.20091L3.2009 19.9251C3.2009 21.6929 4.634 23.126 6.40181 23.126Z'
      fill='#4FD1C5'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M18.5652 14.1634C18.5652 17.6991 15.6991 20.5652 12.1634 20.5652C8.62782 20.5652 5.76163 17.6991 5.76163 14.1634C5.76163 10.6278 8.62782 7.76163 12.1634 7.76163C15.6991 7.76163 18.5652 10.6278 18.5652 14.1634ZM15.3643 14.1634C15.3643 15.9312 13.9312 17.3643 12.1634 17.3643C10.3956 17.3643 8.96253 15.9312 8.96253 14.1634C8.96253 12.3956 10.3956 10.9625 12.1634 10.9625C13.9312 10.9625 15.3643 12.3956 15.3643 14.1634Z'
      fill='#4FD1C5'
    />
    <path
      d='M33.8318 6.06597C33.8318 5.6761 33.9525 5.35121 34.1938 5.0913C34.4537 4.81282 34.8436 4.67358 35.3634 4.67358H45.4443C45.9642 4.67358 46.3448 4.8221 46.5861 5.11915C46.846 5.41619 46.976 5.82463 46.976 6.34445C46.976 6.82715 46.8646 7.2263 46.6418 7.54191C46.4376 7.85752 46.0663 8.01533 45.5279 8.01533H37.6469V12.5545H44.776C45.2587 12.5545 45.6207 12.7123 45.8621 13.0279C46.1034 13.325 46.2241 13.7241 46.2241 14.2254C46.2241 14.7081 46.1127 15.1072 45.8899 15.4229C45.6857 15.7385 45.3144 15.8963 44.776 15.8963H37.6469V22.5519C37.6469 22.9789 37.517 23.3595 37.2571 23.6937C37.0157 24.0278 36.5145 24.1949 35.7533 24.1949C35.0664 24.1949 34.5744 24.065 34.2774 23.8051C33.9803 23.5452 33.8318 23.1274 33.8318 22.5519V6.06597ZM60.3014 22.6633C60.3014 23.2017 60.1622 23.5916 59.8837 23.8329C59.6238 24.0743 59.1689 24.1949 58.5191 24.1949C57.9622 24.1949 57.5166 24.0835 57.1824 23.8608C56.8668 23.6194 56.709 23.2203 56.709 22.6633V22.162C56.5048 22.422 56.2727 22.6819 56.0128 22.9418C55.7715 23.2017 55.4652 23.4338 55.0938 23.638C54.7411 23.8422 54.3234 24.0093 53.8407 24.1392C53.358 24.2692 52.801 24.3342 52.1698 24.3342C50.7032 24.3342 49.5428 23.9536 48.6888 23.1924C47.8534 22.4127 47.4357 21.3823 47.4357 20.1013C47.4357 19.3587 47.5564 18.7275 47.7977 18.2076C48.0576 17.6878 48.4011 17.2515 48.8281 16.8988C49.2736 16.5461 49.7842 16.2676 50.3597 16.0634C50.9538 15.8591 51.5757 15.7013 52.2255 15.5899C52.931 15.46 53.6365 15.3579 54.342 15.2836C55.066 15.2094 55.8457 15.1444 56.6812 15.0887V14.5596C56.6812 14.2811 56.644 14.0119 56.5698 13.752C56.4955 13.4735 56.3656 13.2229 56.1799 13.0001C56.0128 12.7773 55.7715 12.6009 55.4559 12.471C55.1403 12.341 54.7504 12.276 54.2863 12.276C53.9892 12.276 53.7107 12.2946 53.4508 12.3317C53.2095 12.3689 52.9681 12.4339 52.7268 12.5267C52.504 12.6009 52.2626 12.7123 52.0027 12.8609C51.7614 13.0094 51.4829 13.1857 51.1673 13.39C50.926 13.5571 50.6939 13.6963 50.4711 13.8077C50.2669 13.9191 50.007 13.9748 49.6914 13.9748C49.2644 13.9748 48.8838 13.817 48.5496 13.5014C48.2154 13.1672 48.0483 12.768 48.0483 12.3039C48.0483 11.9883 48.1783 11.6541 48.4382 11.3014C48.6981 10.9301 49.088 10.5959 49.6078 10.2989C50.1462 9.98324 50.796 9.72333 51.5572 9.51911C52.3369 9.31489 53.2466 9.21278 54.2863 9.21278C56.4213 9.21278 57.9529 9.6305 58.8812 10.4659C59.828 11.3014 60.3014 12.6009 60.3014 14.3646V22.6633ZM56.6812 17.4279C55.9757 17.5022 55.2981 17.5857 54.6483 17.6785C54.0171 17.7714 53.5436 17.8549 53.228 17.9292C52.3369 18.1148 51.7521 18.384 51.4736 18.7368C51.2137 19.0709 51.0838 19.4144 51.0838 19.7671C51.0838 20.2498 51.2323 20.6304 51.5293 20.9089C51.8264 21.1688 52.3369 21.2988 53.061 21.2988C54.212 21.2988 55.1031 21.0388 55.7343 20.519C56.3656 19.9806 56.6812 19.2937 56.6812 18.4583V17.4279ZM70.8042 9.21278C71.8253 9.21278 72.7071 9.35202 73.4497 9.6305C74.2109 9.90898 74.8421 10.2432 75.3434 10.633C75.8446 11.0229 76.2159 11.4406 76.4573 11.8862C76.7172 12.3317 76.8472 12.7216 76.8472 13.0558C76.8472 13.5385 76.6708 13.9376 76.3181 14.2532C75.9839 14.5689 75.5754 14.7267 75.0927 14.7267C74.74 14.7267 74.4522 14.6338 74.2295 14.4482C74.0252 14.244 73.7839 14.0119 73.5054 13.752C73.0784 13.3621 72.67 13.0558 72.2801 12.833C71.8902 12.5917 71.3704 12.471 70.7206 12.471C69.9595 12.471 69.3561 12.6381 68.9105 12.9722C68.465 13.3064 68.1308 13.7149 67.908 14.1976C67.6852 14.6617 67.5367 15.1537 67.4624 15.6735C67.4067 16.1933 67.3789 16.6296 67.3789 16.9823C67.3789 17.3722 67.416 17.8178 67.4903 18.319C67.5831 18.8203 67.7502 19.2937 67.9915 19.7393C68.2515 20.1663 68.6042 20.5283 69.0498 20.8253C69.5139 21.1224 70.108 21.2709 70.832 21.2709C71.5189 21.2709 72.0573 21.1595 72.4472 20.9367C72.8371 20.714 73.2641 20.3612 73.7282 19.8785C73.9324 19.6557 74.1274 19.4701 74.313 19.3216C74.5172 19.1545 74.7771 19.0709 75.0927 19.0709C75.3155 19.0709 75.529 19.1173 75.7332 19.2102C75.956 19.303 76.1417 19.433 76.2902 19.6C76.4573 19.7486 76.5873 19.9249 76.6801 20.1291C76.7915 20.3334 76.8472 20.5469 76.8472 20.7696C76.8472 21.141 76.6986 21.5494 76.4016 21.995C76.1231 22.422 75.7147 22.8211 75.1763 23.1924C74.6379 23.5637 73.9788 23.87 73.1991 24.1114C72.4379 24.3713 71.5654 24.5013 70.5814 24.5013C69.2818 24.5013 68.1772 24.297 67.2675 23.8886C66.3578 23.4616 65.6152 22.9047 65.0397 22.2177C64.4827 21.5308 64.0743 20.7418 63.8144 19.8507C63.573 18.9595 63.4523 18.0406 63.4523 17.0937C63.4523 15.8499 63.6287 14.7359 63.9815 13.752C64.3342 12.768 64.8355 11.9419 65.4852 11.2735C66.135 10.6052 66.9055 10.0946 67.7966 9.74189C68.7063 9.38915 69.7088 9.21278 70.8042 9.21278ZM86.0859 9.21278C88.1095 9.21278 89.7154 9.844 90.9036 11.1064C92.1103 12.3503 92.7137 14.1419 92.7137 16.4811C92.7137 17.0195 92.5466 17.3908 92.2124 17.595C91.8968 17.7992 91.442 17.9013 90.8479 17.9013H82.772C82.9577 20.1848 84.1923 21.3266 86.4758 21.3266C87.0699 21.3266 87.5711 21.2338 87.9796 21.0481C88.388 20.8439 88.7407 20.6675 89.0378 20.519C89.3163 20.3705 89.5762 20.222 89.8175 20.0735C90.0589 19.9249 90.3466 19.8507 90.6808 19.8507C91.0521 19.8507 91.3956 20.0363 91.7112 20.4076C92.0268 20.7789 92.1846 21.1966 92.1846 21.6608C92.1846 21.995 92.0825 22.292 91.8783 22.5519C91.6926 22.7933 91.377 23.0532 90.9314 23.3317C90.3374 23.703 89.6226 23.9814 88.7872 24.1671C87.9703 24.3713 87.1627 24.4734 86.3644 24.4734C85.2133 24.4734 84.1644 24.3249 83.2176 24.0278C82.2893 23.7308 81.5003 23.276 80.8505 22.6633C80.2007 22.0506 79.6995 21.2802 79.3467 20.3519C78.994 19.4051 78.8176 18.2912 78.8176 17.0102C78.8176 16.0262 78.9569 15.0701 79.2353 14.1419C79.5138 13.195 79.9501 12.3596 80.5442 11.6355C81.1383 10.9115 81.8902 10.3267 82.7999 9.88113C83.7281 9.43557 84.8235 9.21278 86.0859 9.21278ZM88.8428 15.033C88.8428 14.6988 88.7872 14.3646 88.6758 14.0305C88.5644 13.6963 88.388 13.39 88.1467 13.1115C87.9239 12.833 87.6361 12.6102 87.2834 12.4431C86.9306 12.276 86.5036 12.1925 86.0024 12.1925C85.2041 12.1925 84.5079 12.4339 83.9138 12.9165C83.3383 13.3992 83.0041 14.1047 82.9113 15.033H88.8428ZM103.634 12.5545C104.358 12.703 105.082 12.9073 105.806 13.1672C106.53 13.4085 107.18 13.752 107.756 14.1976C108.35 14.6246 108.832 15.1815 109.204 15.8684C109.575 16.5368 109.761 17.3722 109.761 18.3747C109.761 19.4701 109.557 20.4076 109.148 21.1874C108.758 21.9485 108.22 22.5798 107.533 23.081C106.846 23.5637 106.038 23.9165 105.11 24.1392C104.182 24.362 103.189 24.4734 102.13 24.4734C100.682 24.4734 99.457 24.3156 98.4545 24C97.4705 23.703 96.6722 23.3688 96.0596 22.9975C95.5769 22.7004 95.2613 22.4034 95.1127 22.1063C94.9828 21.8093 94.9178 21.5308 94.9178 21.2709C94.9178 20.8439 95.0292 20.4448 95.252 20.0735C95.4191 19.795 95.6326 19.5629 95.8925 19.3773C96.171 19.1916 96.468 19.0895 96.7836 19.0709C97.0992 19.0709 97.3777 19.1359 97.6191 19.2659C97.8604 19.3958 98.1389 19.5629 98.4545 19.7671C98.6958 19.9342 98.9465 20.1013 99.2064 20.2684C99.4663 20.4169 99.7541 20.5561 100.07 20.6861C100.404 20.7975 100.775 20.8996 101.184 20.9924C101.592 21.0667 102.065 21.1038 102.604 21.1038C103.662 21.1038 104.46 20.9275 104.999 20.5747C105.556 20.2034 105.834 19.6279 105.834 18.8481C105.834 18.0684 105.565 17.4836 105.027 17.0937C104.488 16.7039 103.662 16.4068 102.548 16.2026L101.072 15.9241C100.292 15.7756 99.5406 15.5714 98.8165 15.3115C98.0925 15.033 97.452 14.671 96.895 14.2254C96.3381 13.7798 95.8925 13.2322 95.5583 12.5824C95.2241 11.914 95.0571 11.1064 95.0571 10.1596C95.0571 9.30561 95.2149 8.51659 95.5305 7.79254C95.8646 7.04993 96.3473 6.41871 96.9786 5.89889C97.6283 5.3605 98.4174 4.94278 99.3456 4.64573C100.292 4.34869 101.379 4.20017 102.604 4.20017C103.421 4.20017 104.228 4.28371 105.027 4.4508C105.843 4.61789 106.568 4.84995 107.199 5.14699C107.849 5.44404 108.378 5.79678 108.786 6.20521C109.194 6.61365 109.399 7.0685 109.399 7.56976C109.399 7.8668 109.324 8.16385 109.176 8.46089C109.046 8.7208 108.851 8.95287 108.591 9.15709C108.35 9.34274 108.062 9.44485 107.728 9.46341C107.431 9.46341 107.171 9.42628 106.948 9.35202C106.744 9.2592 106.521 9.11067 106.28 8.90646C105.834 8.55372 105.314 8.23811 104.72 7.95963C104.145 7.68115 103.356 7.54191 102.353 7.54191C101.741 7.54191 101.221 7.60689 100.794 7.73685C100.385 7.8668 100.051 8.04317 99.7912 8.26596C99.5498 8.47017 99.3735 8.7208 99.2621 9.01785C99.1693 9.29633 99.1228 9.58409 99.1228 9.88113C99.1228 10.2153 99.1971 10.5124 99.3456 10.7723C99.5127 11.0322 99.7262 11.255 99.9861 11.4406C100.265 11.6263 100.58 11.7841 100.933 11.914C101.286 12.044 101.666 12.1461 102.075 12.2204L103.634 12.5545ZM114.806 24.1949C113.488 24.1949 112.829 23.6937 112.829 22.6912V11.2457C112.829 10.7073 112.987 10.2803 113.303 9.96468C113.618 9.64907 114.129 9.49126 114.834 9.49126C115.428 9.49126 115.883 9.62122 116.199 9.88113C116.533 10.141 116.7 10.5402 116.7 11.0786V22.6355C116.7 23.1924 116.533 23.5916 116.199 23.8329C115.865 24.0743 115.4 24.1949 114.806 24.1949ZM114.806 3.8103C115.345 3.8103 115.837 3.97739 116.282 4.31156C116.746 4.64573 116.979 5.16556 116.979 5.87104C116.979 6.50226 116.774 7.00352 116.366 7.37483C115.976 7.74613 115.456 7.93178 114.806 7.93178C114.157 7.93178 113.628 7.74613 113.219 7.37483C112.829 7.00352 112.634 6.50226 112.634 5.87104C112.634 5.27695 112.829 4.78497 113.219 4.3951C113.628 4.00523 114.157 3.8103 114.806 3.8103ZM134.002 23.1367C134.002 24.3806 133.844 25.4481 133.528 26.3392C133.213 27.2304 132.749 27.9637 132.136 28.5392C131.542 29.1147 130.799 29.5324 129.908 29.7924C129.036 30.0708 128.033 30.2101 126.901 30.2101C125.545 30.2101 124.478 30.0894 123.698 29.8481C122.918 29.6253 122.334 29.3746 121.944 29.0962C121.517 28.7991 121.303 28.3814 121.303 27.843C121.303 27.3603 121.442 26.924 121.721 26.5342C121.999 26.1443 122.399 25.9494 122.918 25.9494C123.197 25.9494 123.448 26.005 123.67 26.1164C123.893 26.2464 124.144 26.3856 124.422 26.5342C124.701 26.6827 125.035 26.8126 125.425 26.924C125.815 27.054 126.325 27.119 126.956 27.119C127.977 27.119 128.776 26.8312 129.351 26.2557C129.945 25.6802 130.242 24.8262 130.242 23.6937V22.1063C129.871 22.589 129.333 23.0253 128.627 23.4152C127.94 23.8051 127.086 24 126.065 24C125.118 24 124.264 23.8329 123.503 23.4987C122.742 23.146 122.092 22.654 121.554 22.0228C121.034 21.3916 120.626 20.6304 120.329 19.7393C120.05 18.8296 119.911 17.8178 119.911 16.7039C119.911 15.5714 120.059 14.5503 120.356 13.6406C120.653 12.7123 121.071 11.9326 121.61 11.3014C122.148 10.6516 122.798 10.1503 123.559 9.79759C124.339 9.44485 125.202 9.26848 126.149 9.26848C126.724 9.26848 127.226 9.33346 127.653 9.46341C128.098 9.59337 128.488 9.76046 128.822 9.96468C129.156 10.1503 129.435 10.3638 129.658 10.6052C129.899 10.828 130.094 11.0415 130.242 11.2457V10.6609C130.242 10.1967 130.419 9.88113 130.772 9.71405C131.124 9.52839 131.542 9.43557 132.025 9.43557C132.712 9.43557 133.213 9.60265 133.528 9.93683C133.844 10.2524 134.002 10.6516 134.002 11.1343V23.1367ZM130.354 16.676C130.354 15.4321 130.085 14.4203 129.546 13.6406C129.008 12.8609 128.182 12.471 127.068 12.471C126.065 12.471 125.285 12.8609 124.729 13.6406C124.19 14.4018 123.921 15.4043 123.921 16.6482C123.921 17.9106 124.19 18.9131 124.729 19.6557C125.285 20.3798 126.047 20.7418 127.012 20.7418C128.107 20.7418 128.934 20.3983 129.491 19.7114C130.066 19.0059 130.354 17.9941 130.354 16.676ZM145.842 9.21278C146.808 9.21278 147.606 9.37059 148.237 9.6862C148.887 9.98324 149.444 10.4195 149.908 10.995C150.391 11.6263 150.679 12.3317 150.771 13.1115C150.864 13.8727 150.911 14.5967 150.911 15.2836V22.6633C150.911 23.2017 150.753 23.5916 150.437 23.8329C150.122 24.0743 149.639 24.1949 148.989 24.1949C148.432 24.1949 147.968 24.0835 147.597 23.8608C147.244 23.6194 147.068 23.2203 147.068 22.6633V15.3672C147.068 14.5503 146.984 13.9562 146.817 13.5849C146.65 13.2136 146.39 12.9537 146.037 12.8052C145.703 12.6566 145.295 12.5824 144.812 12.5824C144.311 12.5824 143.884 12.6659 143.531 12.833C143.178 12.9815 142.881 13.1765 142.64 13.4178C142.399 13.6406 142.213 13.8819 142.083 14.1419C141.953 14.4018 141.86 14.6431 141.804 14.8659C141.712 15.2001 141.656 15.5807 141.637 16.0077C141.637 16.4347 141.637 16.7967 141.637 17.0937V22.5798C141.637 23.1553 141.48 23.573 141.164 23.8329C140.867 24.0743 140.366 24.1949 139.66 24.1949C139.085 24.1949 138.63 24.0743 138.296 23.8329C137.961 23.5916 137.794 23.1924 137.794 22.6355V11.1343C137.794 10.633 137.934 10.2246 138.212 9.90898C138.509 9.59337 139.01 9.43557 139.716 9.43557C140.199 9.43557 140.626 9.54696 140.997 9.76974C141.368 9.97396 141.554 10.401 141.554 11.0507V11.3849C141.944 10.8094 142.501 10.3081 143.225 9.88113C143.967 9.43557 144.84 9.21278 145.842 9.21278Z'
      fill='#2A4365'
    />
  </svg>
)

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z'
        fill='currentColor'
      />
    </svg>
  )
}

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'
        fill='currentColor'
      />
    </svg>
  )
}

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
      fill='currentColor'
    />
  </svg>
)

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g fill='currentColor'>
      <path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
      <path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
    </g>
  </svg>
)

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
      fill='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
)

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}
  >
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <path
      d='M22 22L20 20'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
  </svg>
)

export const NextUILogo: React.FC<IconSvgProps> = props => {
  const { width, height = 40 } = props

  return (
    <svg
      fill='none'
      height={height}
      viewBox='0 0 161 32'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='fill-black dark:fill-white'
        d='M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z'
      />
      <path
        className='fill-black dark:fill-white'
        d='M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z'
      />
      <path
        className='fill-white dark:fill-black'
        d='M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z'
      />
    </svg>
  )
}
