import { App, inject, reactive, readonly } from "vue";
import axios from "axios";
import { Post, thisWeek, thisMonth, today } from "./mocks";

export interface User {
  id: string;
  username: string;
  password: string;
}

export type Author = Omit<User, "password">;

interface BaseState<T> {
  //o(n)
  ids: string[];
  //o(1)
  all: Map<string, T>;
  loaded: boolean;
}

type PostsState = BaseState<Post>;
interface AuthorsState extends BaseState<Author> {
  currentUserId: string | undefined;
}
export interface State {
  authors: AuthorsState;
  posts: PostsState;
}

export const storeKey = Symbol("store");

export class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  install(app: App) {
    app.provide(storeKey, this);
  }

  getState() {
    return readonly(this.state);
  }

  async createPost(post: Post) {
    const { data } = await axios.post<Post>("/posts", post);
    this.state.posts.all.set(data.id, data);
    this.state.posts.ids.push(data.id);
    console.log(this.state.posts.ids);
  }

  async updatePost(post: Post) {
    const { data } = await axios.put<Post>("/posts", post);
    this.state.posts.all.set(data.id, data);
  }

  async createUser(user: User) {
    console.log(user);
    const { data } = await axios.post<Author>("/users", user);
    this.state.authors.all.set(data.id, data);
    this.state.authors.ids.push(data.id);
    this.state.authors.currentUserId = data.id;
    console.log(this.state.authors);
  }

  async fetchPosts() {
    console.log("fetch....");
    const response = await axios.get<Post[]>("/posts");
    const postState: PostsState = {
      ids: [],
      all: new Map(),
      loaded: true,
    };
    for (const post of response.data) {
      postState.ids.push(post.id);
      postState.all.set(post.id, post);
    }
    this.state.posts = postState;
  }
}

const all = new Map<string, Post>();

export const store = new Store({
  authors: {
    ids: [],
    all: new Map<string, Author>(),
    loaded: false,
    currentUserId: undefined,
  },
  posts: {
    ids: [],
    all,
    loaded: false,
  },
});

//use
//composable
//provide/inject

export function useStore(): Store {
  const _store = inject<Store>(storeKey);
  if (!_store) {
    throw Error("Did you forget to call provide ?");
  }
  return _store;
}
