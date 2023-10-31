import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetTrending } from "../redux/TrendingApps/AsyncThunks"

const UseGetTrendingApps = () => {

    const { state } = useSelector((state) => state.trending)
    const dispatch = useDispatch()

    useEffect(()=> {
            dispatch(GetTrending())

    }, [])
}

export default UseGetTrendingApps