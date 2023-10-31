import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrending } from '../../api';


export const GetTrending = createAsyncThunk(
    'trending/all',
    async (_data, thunkAPI) => {
        try {
          return await getTrending();
        } catch (error: any) {
          const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
    }
)
