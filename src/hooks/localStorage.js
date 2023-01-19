//set localStorage data
export const setLocalData = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  };
  
  //get localStorage data
  export const getLocalData = async (name) => {
    const data = localStorage.getItem(name);
    if(typeof data !== 'undefined' && data !== null) return await JSON.parse(data);
    else return null;
  };
  
  //remove localStorage data
  export const removeLocalData = (name) => {
    localStorage.removeItem(name);
  };
  