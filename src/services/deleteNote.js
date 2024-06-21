const deleteNote = async (id) => {
    try {
        return fetch(`http://127.0.0.1:3001/notes/${id}`, {
            method: "DELETE",
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
        console.log("error in delete note");
    }
}

export default deleteNote