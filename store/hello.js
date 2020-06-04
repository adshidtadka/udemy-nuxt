export const state = () => ({
  message: "Hello Vuex",
});

export const mutations = {
  updateMessage(state, payload) {
    state.message = payload;
  },
};

export const actions = {
  updateMessage(context, payload) {
    context.commit("updateMessage", payload);
  },
};
