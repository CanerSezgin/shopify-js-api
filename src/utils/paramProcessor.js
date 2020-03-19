module.exports = params => {
  if(!params || typeof params !== 'object'){ return {} }
  
    const keys = Object.keys(params)
    const obj = {}
    keys.forEach(key => {
      let processed;
      const value = params[key]
      processed = value
      if(Array.isArray(value)){
        processed = value.join(',')
      }
      obj[key] = processed
    });
    return obj
  }