const loadState = (itemName: string) => {
  try {
    const serializedState = localStorage.getItem(itemName);
    if (serializedState === null) return undefined;

    const state = JSON.parse(serializedState);

    return state;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("An error occured while saving current state.");
  }
};

const localStore = {
  loadState,
  saveState,
};

export default localStore;
