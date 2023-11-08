import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GetTrending } from "../redux/TrendingApps/AsyncThunks"

const UseGetTrendingApps = () => {


    const dispatch = useDispatch()

    useEffect(()=> {
            dispatch(GetTrending())

    }, [])
}

export default UseGetTrendingApps