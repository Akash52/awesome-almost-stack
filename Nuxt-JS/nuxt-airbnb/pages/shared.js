import axios from "axios";

export async function fetchData({ store, redirect, isClient }) {
  if (isClient) return;
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    store.commit("setTodos", data);
  } catch (error) {
    redirect("/error");
  }
}
