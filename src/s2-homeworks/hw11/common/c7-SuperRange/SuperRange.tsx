import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            {...props}
            sx={{
                color: '#00CC22',
                height: 4,
                width: 150,
                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22',
                },
            }}
        />
    )
}

export default SuperRange
