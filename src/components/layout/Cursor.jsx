'use client'
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <div className="hidden md:block">
        <AnimatedCursor
            innerSize={15}
            outerSize={30}
            // 1. Change Base Color to WHITE (255, 255, 255)
            color='255, 255, 255' 
            outerAlpha={0.2}
            innerScale={1}
            outerScale={2}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
            // 2. Add 'mixBlendMode: exclusion'. This flips the color on bright backgrounds.
            outerStyle={{
                mixBlendMode: 'exclusion' 
            }}
            innerStyle={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                mixBlendMode: 'exclusion'
            }}
        />
    </div>
  )
}

export default Cursor