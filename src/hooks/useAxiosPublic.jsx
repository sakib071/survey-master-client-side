import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://survey-master-server-gold.vercel.app'
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;