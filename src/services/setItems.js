const setItems = async (data) => {
    try {
        return fetch("url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : data
        }).then(async(response)=>{
        if (response.status === 200) {  
          return response.json();
        }
        else {
            throw new Error("Unexpected response status");
          }
        
        })
    } catch (error) {
        console.log("error in create new note");
    }
}

export default setItems