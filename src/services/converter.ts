export default function(obj: any) {
    const result = {};
  
    for (const objectPath in obj) {
      const keys = objectPath.split('.');
  
      let current: any = result;
  
      while (keys.length > 1) {
        const key = keys.shift();
  
        if(key) {
          current = current[key] = current[key] || {};
        }
      }
  
      current[keys[0]] = obj[objectPath]
    }
  
    return result;
}