import { configureStore } from "@reduxjs/toolkit";
import SubscriptionStore from './Subscription';

export default configureStore({
  reducer: {
    subscription: SubscriptionStore,
  },
});
