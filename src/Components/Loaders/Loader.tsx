import { Progress, ProgressProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'

interface LoadingProp{
    loading: boolean
}

const Loader: React.FC<LoadingProp> = ({loading}) => {
    const [counter, setCounter]= useState<number>(0)
    const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#e9f383',
        '100%': '#2bc6db',
    };
    useEffect(()=>{
        let interval
        if (counter < 90 && loading) {
            interval = setInterval(() => {
                setCounter(prev => (prev < 90 ? prev + 1 : prev));
            }, 500); 
          } else if (!loading) {
            setCounter(100); 
          }
    },[loading])
  return (
    <div
        style={{position: "absolute", width:"100%",height:"90dvh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}
    >
        <LoaderStyle />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 315"
        style={{width: "30vw", height:"30vh", opacity: 1, zIndex:9999}}
      >
        <g>
            <g id="color_index_g">
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="60.6503" y1="559.2881" x2="256.0495" y2="809.8849" gradientTransform="matrix(1 0 0 1 0 -526)">
                    <stop offset="0" style={{stopColor:"#e7ef49"}}/>
                    <stop offset="1" style={{stopColor:"#1fceed"}}/>
                </linearGradient>
                <path className="st0" d="M314.997,157.499c0,20.849-4.053,40.748-11.407,58.954c-9.31,23.068-23.933,43.428-42.346,59.556&#x9;&#x9;c-27.714,24.272-64.013,38.989-103.745,38.989c-29.011,0-56.198-7.843-79.53-21.535c-22.297-13.062-41.086-31.456-54.637-53.434&#x9;&#x9;C10.59,219.35,2.483,195.492,0.49,169.922C0.16,165.821,0,161.683,0,157.499C0,70.521,70.511,0,157.499,0&#x9;&#x9;c1.57,0,3.132,0.019,4.693,0.066h0.009c10.504,0.31,20.736,1.646,30.62,3.912c14.736,3.376,28.692,8.821,41.528,16.006&#x9;&#x9;C282.468,46.935,314.997,98.422,314.997,157.499z"/>
            </g>
            <g>
                <path className="st1" d="M314.997,157.501c0,86.987-70.511,157.499-157.499,157.499c-8.482,0-16.815-0.668-24.93-1.965&#x9;&#x9;c75.138-11.943,132.568-77.028,132.568-155.533c0-78.495-57.43-143.59-132.568-155.533c8.116-1.298,16.448-1.966,24.93-1.966&#x9;&#x9;C244.486,0.003,314.997,70.524,314.997,157.501z"/>
                <path className="st2" d="M174.031,53.415c0,69.505-56.349,125.854-125.854,125.854c-16.88,0-32.98-3.32-47.688-9.348&#x9;&#x9;C0.16,165.821,0,161.683,0,157.499C0,70.521,70.511,0,157.499,0c1.57,0,3.132,0.019,4.693,0.066h0.009&#x9;&#x9;C169.79,16.269,174.031,34.344,174.031,53.415z"/>
                <path className="st2" d="M234.376,21.056c0,13.41-10.871,24.29-24.291,24.29c-13.41,0-24.281-10.88-24.281-24.29&#x9;&#x9;c0-6.658,2.68-12.695,7.015-17.078c14.736,3.376,28.692,8.821,41.528,16.006C234.367,20.341,234.376,20.698,234.376,21.056z"/>
                <path className="st2" d="M303.59,216.453c-9.31,23.068-23.933,43.428-42.346,59.556c-6.404-6.677-10.344-15.742-10.344-25.729&#x9;&#x9;c0-20.548,16.654-37.202,37.202-37.202C293.631,213.076,298.879,214.28,303.59,216.453z"/>
                <path className="st2" d="M93.288,262.664c0,12.573-6.009,23.745-15.319,30.798c-22.297-13.062-41.086-31.456-54.637-53.434&#x9;&#x9;c7.015-9.696,18.432-16.006,31.315-16.006C75.985,224.023,93.288,241.317,93.288,262.664z"/>
            </g>
            <g>
                <path className="st3 second_fade" id="biggesst" d="M130.695,224.022c-24.9,0-36.355-24.79-36.536-42.392l-0.871-80.333c-0.164-10.344,5.054-22.452,13.294-30.826&#x9;&#x9;c7.423-7.543,16.429-11.53,26.044-11.53c3.033,0,6.11,0.412,9.143,1.224c29.689,7.956,58.168,27.38,87.156,48.286&#x9;&#x9;c9.92,7.284,15.812,19.418,15.794,32.481c-0.019,13.22-6.022,25.483-16.055,32.804c-27.446,19.683-56.668,39.617-86.026,48.437&#x9;&#x9;C138.554,223.399,134.535,224.022,130.695,224.022z"/>
                <path className="st3 second_fade" id="bigger" d="M130.695,219.32c-21.691,0-31.673-22.069-31.834-37.739l-0.871-80.335c-0.146-9.16,4.541-19.956,11.943-27.476&#x9;&#x9;c6.519-6.625,14.367-10.127,22.693-10.127c2.623,0,5.29,0.358,7.926,1.064c28.919,7.749,57.003,26.917,85.623,47.557&#x9;&#x9;c8.699,6.387,13.859,17.091,13.842,28.66c-0.017,11.726-5.298,22.571-14.124,29.012c-27.112,19.444-55.943,39.12-84.607,47.732&#x9;&#x9;C137.64,218.764,134.077,219.32,130.695,219.32L130.695,219.32z"/>
                <path className="st3" d="M213.274,279.732c-34.729,13.664-62.208-5.577-75.477-18.244c-1.777-1.712-1.824-4.138-0.752-5.896&#x9;&#x9;c0.207,0.32,0.451,0.63,0.752,0.912c13.269,12.667,40.748,31.917,75.477,18.253c32.199-12.667,38.716-42.488,39.337-61.756&#x9;&#x9;c0.028,0.198,0.047,0.404,0.047,0.621C252.855,232.43,248.012,266.068,213.274,279.732z"/>
            </g>
            <g>
                <path className="st4 second_fade" id="white" d="M222.875,116.841c-27.219-19.63-55.609-39.134-83.782-46.683c-20.701-5.547-35.69,16.61-35.46,31.027&#x9;&#x9;c0.29,26.78,0.58,53.559,0.87,80.339c0.148,14.416,10.352,38.196,35.159,30.742c27.369-8.223,55.602-27.307,82.905-46.886&#x9;&#x9;C238.124,154.027,238.394,128.235,222.875,116.841z"/>
                <path className="st4" d="M194.498,253.374c-13.039,5.643-16.762-7.516-16.762-7.516c7.528-1.537,15.453-3.842,23.426-7.24h0.024&#x9;&#x9;C201.186,238.617,207.525,247.743,194.498,253.374z"/>
                <path className="st4" d="M229.246,235.039c-9.834,10.242-18.359-0.456-18.359-0.456l-0.228-0.541&#x9;&#x9;c6.916-3.746,13.76-8.405,20.268-14.204C233.1,221.94,236.714,227.259,229.246,235.039z"/>
            </g>
            <g>
                <path className="st5" d="M230.927,219.838c2.174,2.101,5.788,7.421-1.681,15.201c-9.834,10.242-18.359-0.456-18.359-0.456l-0.226-0.537&#x9;&#x9;c-0.001,0-0.001,0-0.002,0.001c-3.16,1.711-6.328,3.225-9.497,4.57h0.024c0,0,6.34,9.125-6.688,14.756&#x9;&#x9;c-13.026,5.638-16.754-7.489-16.761-7.515l0,0c-14.473,2.943-27.45,3.037-36.356,2.492c-3.978-0.235-6.31,4.147-4.335,7.241&#x9;&#x9;c0.207,0.32,0.451,0.63,0.752,0.912c13.269,12.667,40.748,31.917,75.477,18.253c32.199-12.667,38.716-42.488,39.337-61.756&#x9;&#x9;c0.047-1.523,0.066-2.981,0.047-4.354c-0.047-4.467-5.699-6.338-8.473-2.849C239.983,211.101,235.535,215.756,230.927,219.838"/>
                <path className="st5 first_fade" id="black_eye" d="M197.306,141.483c0,6.893-1.843,13.354-5.069,18.912c-1.138-2.483-3.649-4.213-6.555-4.213&#x9;&#x9;c-3.978,0-7.203,3.226-7.203,7.203c0,3.357,2.295,6.179,5.398,6.978c-6.583,5.558-15.084,8.906-24.366,8.906&#x9;&#x9;c-20.867,0-37.795-16.918-37.795-37.786c0-5.2,1.053-10.156,2.953-14.67c2.614,3.461,6.78,5.689,11.463,5.689&#x9;&#x9;c7.956,0,14.407-6.451,14.407-14.407c0-4.674-2.229-8.83-5.68-11.454c4.505-1.9,9.46-2.953,14.651-2.953&#x9;&#x9;C180.379,103.689,197.306,120.607,197.306,141.483z"/>
            </g>
            <g>
                <circle className="st6 first_fade" cx="159.511" cy="141.479" r="11.309"/>
            </g>
        </g>
      </svg>
      <Progress percent={counter} strokeColor={twoColors} showInfo={false} style={{width:"50%"}}/>
    </div>
  )
}

export default Loader


const LoaderStyle= createGlobalStyle`
    .st0{fill:url(#SVGID_1_);}	
    .st1{opacity:0.06;fill:#332A40;enable-background:new    ;}	
    .st2{opacity:0.3;fill:#FFFFFF;enable-background:new    ;}	
    .st3{opacity:0.3;fill:#332A40;enable-background:new    ;}	
    .st4{fill:#FFFFFF;}	
    .st5{fill:#332A40;}	
    .st6{opacity:0.2;fill:#FFFFFF;enable-background:new    ;}
    @keyframes reduceOpacity {
        25% {
            opacity: 1;
        }
        25% {
            opacity: 0.75;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.25;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes reduceOpacity2 {
        30% {
            opacity: 1;
        }
        35% {
            opacity: 0.75;
        }
        60% {
            opacity: 0.5;
        }
        85% {
            opacity: 0.25;
        }
        100% {
            opacity: 0;
        }
    }
    .first_fade{
        animation-name: reduceOpacity;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    .second_fade{
        animation-name: reduceOpacity2;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
`