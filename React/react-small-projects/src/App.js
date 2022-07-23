import React from 'react';
import TabApp from './08_Tab/TabApp';
import TodoList from './06_Todo/TodoList';
import TodoList2 from './07_Todo/TodoList2';
import MenuApp from './05_Menu/MenuApp';
import TourApp from './02_Tours/TourApp';
import ReviewsApp from './03_Reviews/ReviewsApp';
import AccordionApp from './04_accordion/AccordionApp';
import Birthday from './01_Birthday_Remainder/Birthday';
import SliderApp from './09_Slider/SliderApp';
import ShoppingApp from './Shopping/ShoppingApp';
import UserList from './Table/UserList';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorApp from './10_colors/ColorsApp';
import GallaryApp from './11_Gallery/GallaryApp';
import TodoApp from './12_Todo/TodoApp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<TabApp />} />
        <Route path='/tab' element={<TabApp />} />
        <Route path='/todo1' element={<TodoList />} />
        <Route path='/todo2' element={<TodoList2 />} />
        <Route path='/menu' element={<MenuApp />} />
        <Route path='/tours' element={<TourApp />} />
        <Route path='/reviews' element={<ReviewsApp />} />
        <Route path='/accordion' element={<AccordionApp />} />
        <Route path='/slider' element={<SliderApp />} />
        <Route path='/shopping' element={<ShoppingApp />} />
        <Route path='/table' element={<UserList />} />
        <Route path='/birthday' element={<Birthday />} />
        <Route path='/colors' element={<ColorApp />} />
        <Route path='/gallery' element={<GallaryApp />} />
        <Route path='/todo3' element={<TodoApp />} />
      </Routes>
    </Router>
  );
}
