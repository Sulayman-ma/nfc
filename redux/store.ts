import { configureStore } from "@reduxjs/toolkit";
import SubscriptionStore from './Subscription';
import TrendingStore from "./TrendingApps"

export default configureStore({
  reducer: {
    subscription: SubscriptionStore,
    trending: TrendingStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
