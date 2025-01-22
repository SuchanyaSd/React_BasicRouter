## Step 1
```bash
npm create vite . or ชื่อไฟล์ที่อยากตั้ง
npm install
npm run dev
```

## Step 2 push project github
```bash
git init
git add .
git commit -m "init"
git push
```

## When updated code to github
```bash
git add .
git commit -m "init"
git push
```

## Step 3 Install React Router
```bash
npm i react-router
```

```jsx
//rfce
import { Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About"
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register"
import Dashboard from "../pages/admin/Dashboard"
import Manage from "../pages/admin/Manage"
import Setting from "../pages/admin/Setting"

function AppRoutes() {
    return (
        <div>      

            <Routes>
                {/* Public */}
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                {/* Private */}
                <Route path="admin" element={<Layout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path="manage" element={<Manage/>} />
                    <Route path="setting" element={<Setting/>} />
                </Route>

           
            </Routes>
        </div>
    )
}

export default AppRoutes
```

## Step 4 Global state with Austand
```bash
npm install zustand
```

## Stop 5 Fetch data
```bash
npm install axios
```