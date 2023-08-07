import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={
            {
                color: '#00CC22',
                width: "150px",
                height: '4px',
                '& .MuiSlider-rail': {
                color: "#8B8B8B"
            },
                '& .MuiSlider-thumb': {
                color: "#fff",
                border: 1,
                borderColor: '#00CC22'
            },
                '& .MuiSlider-thumb: after': {
                backgroundColor: "#01CB22",
                width: '6px',
                height: '6px'
            }
            }
        }
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
