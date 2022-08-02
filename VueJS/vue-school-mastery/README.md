# vueschool-forum

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Roadmap

### Displaying a list of elements in Vue 3

- SFC (Single File Components)
- Give your components a good description
- Component name should be Multi-word (e.g. PageHome , PageAbout , PageContact etc.)
- v-for directive is used to iterate over an array of data

```vue
<li v-for="item in items">{{ item.name }}</li>
```

### install and use vue-router

- router-view : is used to render the component in the router
- route-link : is used to link to the component

### Redirect With Vue Router

#### ThreadShowPage

## 1st way

```vue
<div v-if="thread" class="col-large push-top">
    <button class="btn-home">
      <router-link to="/"> Home </router-link>
    </button>
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{
            userById(postById(postId).userId).name
          }}</a>

          <a href="#">
            <img
              class="avatar-large"
              :src="userById(postById(postId).userId).avatar"
              alt=""
            />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-full text-center">
    <h1>This thread does not exist</h1>
    <p>
      <router-link :to="{ name: 'Home' }">
        Read some cool 🤓 threads
      </router-link>
    </p>
  </div>
```
