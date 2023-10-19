<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudiantes
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/estudiantes">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/estudiantes/create">Registrar nuevo</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profesores
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/profesores">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/profesores/create">Registrar nuevo</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Asignaturas
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/asignaturas">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/asignaturas/create">Registrar nueva</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/asignar_materia">Asignar materias</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

