// import { H2, View, ActionTree } from "../src/dist/index";
import { H2, ActionTree, View } from "@hirokihello/hydrogen";

type State = typeof state;
type Actions = typeof actions;

const state = {
  count: 0
};

const actions: ActionTree<State> = {
  increment: (state: State) => {
    state.count++;
  }
};

const view: View<State, Actions> = (state, actions) => {
    const a = (<div class="hgoe">
                  <h1>hirokihello blog service front with hydrogen</h1>
                </div>
                );
    return a;
};

new H2<State>({
  el: "#app",
  state,
  view,
  actions
});
