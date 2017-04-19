export default (sourceArray, targetArray) => {

    if ( !(Array.isArray(sourceArray) && Array.isArray(targetArray)) ) {
        throw new TypeError('One or both of the arguments provided are not arrays');
    }

    const results = targetArray.map( (col) => {
        return sourceArray.some(val => col === val);
    });

    return (results.every(res => res === true ) && results.length === sourceArray.length);
};
