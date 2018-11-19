const wrap = (line, maxLen) => {
    const lineArray = line.split('')
    if(lineArray.length <= maxLen){
        return line
    } 
    
    return lineArray.splice(maxLen, 0, '\n')
    .join('')

};







module.exports = wrap;