import api from "../api";

const getDaily = async (discordId, forms) => {
    try {
        const response = await api.post(`/daily/${discordId}`, forms);
        console.log(response)
        return response
    } catch (err) {
        console.error(err)
        throw err.response.status;
    }
};

export default getDaily;
