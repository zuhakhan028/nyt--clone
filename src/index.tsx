import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryArticle from './components/countryarticle/countryArticle';
import MoreDispatches from './components/moredispatches/moreDispatches';
import CountryNews from './components/countrynews/countryNews';
import ArticleDetail from './components/articledetails/articleDetails';

const router=createBrowserRouter(
[
  {path:"/",
element:<App/>},
{
  path:"/Dispatches",
  element:<MoreDispatches text={"Dispatches"}/>
},
  {
    path:"/The Saturday Profile",
    element:<MoreDispatches text={"The Saturday Profile"}/>
  },{
path:"/country/:countryname",
element:<CountryNews/>
  },{
    path:"/article/:index",
    element:<ArticleDetail/>
  },
  {
    path: '/country/:countryname/article/:articleId',
    element: <CountryArticle/>
  }
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
