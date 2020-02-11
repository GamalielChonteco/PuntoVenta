import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'
    >
      <Link
        className='sidebar-brand d-flex align-items-center justify-content-center'
        to='/'
      >
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-shopping-cart'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>Bits & Bytes</div>
      </Link>

      <hr className='sidebar-divider my-0' />

      <li className='nav-item'>
        <Link className='nav-link' to='/dashboard'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Sistema</div>

      <li className='nav-item'>
        <Link className='nav-link' to='#' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='true' aria-controls='collapseTwo'>
          <i className='fas fa-fw fa-box'></i>
          <span>Productos</span>
        </Link>
        <div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <Link className='collapse-item' to='/'>Activos</Link>
            <Link className='collapse-item' to='/'>Inactivos</Link>
            <Link className='collapse-item' to='/'>Todos</Link>
          </div>
        </div>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/usuarios'>
          <i className='fas fa-fw fa-users'></i>
          <span>Usuarios</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          className='nav-link collapsed'
          to='/valores'
        >
          <i className='fas fa-fw fa-cogs'></i>
          <span>Valores</span>
        </Link>
      </li>

      <hr className='sidebar-divider d-none d-md-block' />

      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle'></button>
      </div>
    </ul>
  );
};

export default Sidebar;
