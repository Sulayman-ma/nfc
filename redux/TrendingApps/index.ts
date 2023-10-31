import { createSlice } from '@reduxjs/toolkit';
import { GetTrending } from './AsyncThunks';

interface StateType {
    state: "Loading" | "" | "Error" | "Success",
    data: trendingItem[],
    trendingItem: trendingItem| null
}

interface trendingItem {
  appId: string,
  icon: string,
  title: string,
  developer: string,
  summary: string,
  price: number,
  currency: string,
  score: number
}

const initialState:Partial<StateType> = {
    state: "",
    data: [],
    trendingItem: null
};

export const StateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    GetTrendingItem:(state, action) => {
      if(state.data.length > 0){
        state.trendingItem = state.data.find((state) => state.appId === action.payload.appId)
      }
    },
  },
  extraReducers(builder) {
      builder.addCase(GetTrending.fulfilled,(state, action) => {
        state.data = action.payload;
        state.state = 'Success'
      })
      .addCase(GetTrending.pending,state => {
        state.state = "Loading";
      })
      .addCase(GetTrending.rejected, state=>{
        state.state = "Error"
      })
  },
});
export const { GetTrendingItem } = StateSlice.actions;
export default StateSlice.reducer;
