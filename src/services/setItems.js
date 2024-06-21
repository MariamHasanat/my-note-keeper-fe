const setItems = async (data) => {
    try {
        return fetch("http://127.0.0.1:3001/notes/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data
        }).then(async (response) => {
            if (response.status === 200) {
                console.log("success");
                return await response.json();
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