const getItems = async () => {
    try {
        return fetch("http://127.0.0.1:3001/notes/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async(response)=>{
        if (response.status === 200) {
          const data = await response.json();
          return data 
        }
        else {
            throw new Error("Unexpected response status");
          }
        
        })
    } catch (error) {
        console.log("error in get notes");
    }
}

export default getItems