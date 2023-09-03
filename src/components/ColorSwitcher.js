import React from 'react'

function ColorSwitcher({switchColor}) {
    
    const colors = ['#FFF9B1','#DAF7A1','#FF9D48','#FFCEE0','#B1D3F6'];




    const rgbToHex = (rgb) => {
        const rgbArray = rgb.match(/\d+/g).map(Number);

        const r = rgbArray[0].toString(16).padStart(2,'0');
        const g = rgbArray[1].toString(16).padStart(2,'0');
        const b = rgbArray[2].toString(16).padStart(2,'0');

        const hexColor = `#${r}${g}${b}`;
    
        return hexColor;
    }

const handleColorChange = (e) => {
    switchColor(rgbToHex(e.target.style.backgroundColor));
}

  return (
    <div className='color-switcher-container'>
        {colors.map((color)=>(
            <button className='color-switcher-button' style={{backgroundColor: color}} onClick={handleColorChange} />

        ))}
    </div>
  )
}

export default ColorSwitcher