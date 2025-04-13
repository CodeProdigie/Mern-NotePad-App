import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePages/WelcomePage'
import WelcomeLogin from './pages/WelcomePages/WelcomeLogin'
import RegisterStart from './pages/RegistrationPages/RegisterStart'
import RegisterNext from './pages/RegistrationPages/RegisterNext'
import Login from './pages/RegistrationPages/Login'
import Dashboard from './pages/Dashboard'
import Country from './pages/Country'
import CreateCountry from './components/Country/CreateCountry'
import './boxicons/css/boxicons.min.css'
import Region from './pages/Region'
import CreateRegion from './components/Region/CreateRegion'
import Category from './pages/Category'
import CreateCategory from './components/Category/CreateCategory'
import Manager from './pages/Manager'
import CreateManger from './components/Manager/CreateManger'
import CaseManager from './pages/CaseManager'
import CreateCaseManger from './components/CaseManager/CreateCaseManger'
import School from './pages/School'
import CreateSchool from './components/School/CreateSchool'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/welcomelogin' element={<WelcomeLogin />} />
        <Route path='/registerstart' element={<RegisterStart />} />
        <Route path='/registernext' element={<RegisterNext />} />
        <Route path='/login' element={<Login />} />
        
        {/* Dashboard Route and Nested Children */}
        <Route path='/dashboard' element={<Dashboard />}>
                 {/* Country */}
          <Route path='country' element={<Country />} />
          <Route path='country/createcountry' element={<CreateCountry />} />
                 {/* Region */}
          <Route path='region'  element={<Region />} />
          <Route path='region/createregion' element={<CreateRegion />} />
                 {/* Category */}
          <Route path='category' element={<Category />} />
          <Route path='category/createcategory' element={<CreateCategory />} />
                 {/* Manager */}
          <Route path='manager' element={<Manager />} />
          <Route path='manager/createmanager' element={<CreateManger />} />
                 {/* Case Manager */}
          <Route path='casemanager' element={<CaseManager />} />
          <Route path='casemanager/createcasemanager' element={<CreateCaseManger />} />
                 {/* School */}
          <Route path='school' element={<School />} />
          <Route path='school/createschool' element={<CreateSchool />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
