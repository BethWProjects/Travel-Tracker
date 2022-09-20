let fetchData = (dataFileName) =>
  fetch(`http://localhost:3001/api/v1/${dataFileName}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Not a 200 status');
        }
        return response.json()
    })   
    .then(`response => response.${dataFileName}Data`)
    .catch(err => alert('there was an error in providing you the information'))
//comment
export { fetchData }