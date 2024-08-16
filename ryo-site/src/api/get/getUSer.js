import axios from "axios";

const getUser = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        const response = await axios.get('https://discord.com/api/users/@me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })

        return response.data
    } catch (err) {
        console.error("System error", err)
        return err
    }
}

export default getUser