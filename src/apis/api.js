import axios from 'axios';

const URL = "http://localhost:4000";

export const getSample = async () => {
    const { data } = await axios.get(URL + "/sample");
    return data;
};

export const apiAddPost = async (contents) => {
    await axios.post(`${URL}/posting`, { contents });
}

export const apiGetPost = async () => {
    const { data } = await axios.get(`${URL}/posting`);
    return data;
};
