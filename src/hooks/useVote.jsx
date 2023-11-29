// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useVote = () => {
    const axiosPublic = useAxiosPublic();

    const { data: vote = [], isPending: loading, refetch } = useQuery({
        queryKey: ['vote'],
        queryFn: async () => {
            const res = await axiosPublic.get('/votes');
            return res.data;
        }
    })


    return [vote, loading, refetch]
}

export default useVote;