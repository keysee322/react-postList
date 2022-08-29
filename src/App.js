import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "zJavascript", body: "2Description"},
    {id: 2, title: "bJavascript 2", body: "1Description"},
    {id: 3, title: "aJavascript 3", body: "3Description"},
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const removePost = (post) => {
  setPosts(posts.filter(p=> p.id !== post.id))
  }

  const createPost = (newPost) =>{
  setPosts([...posts, newPost])
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  }

  const searchQuery = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MyInput
          placeholder="Поиск"
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            {value: 'title', name:'По названию'},
            {value: 'body', name:'По описанию'},
          ]}
        />
      </div>
      {posts.length !==0
        ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
        : <h1 style={{textAlign:"center"}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
