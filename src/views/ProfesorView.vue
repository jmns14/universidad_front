<template>
  <div class="row mt-top-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalles del profesor
        </div>
        <div class="card-body">
          <div class="d-grid col-6 mx-auto mb-3">
            <router-link :to="{ path: '/profesores' }" class="btn btn-info">
              <i class="fa-solid fa-arrow-left"> Regresar</i>
            </router-link>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-id-card"></i></span>
            <label v-text="documento" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
            <label v-text="nombres" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
            <label v-text="telefono" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
            <label v-text="email" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-house"></i></span>
            <label v-text="direccion" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-city"></i></span>
            <label v-text="ciudad" class="form-control"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  data() {
    return {
      id: 0,
      documento: '',
      nombres: '',
      telefono: '',
      email: '',
      direccion: '',
      ciudad: '',
      url: 'http://universidad_back.test/api/v1/profesores',
      cargando: false
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getProfesor();
  },
  methods: {
    getProfesor() {
      axios.get(this.url).then((res) => {
        this.documento = res.data.documento;
        this.nombres = res.data.nombres;
        this.telefono = res.data.telefono;
        this.email = res.data.email;
        this.direccion = res.data.direccion;
        this.ciudad = res.data.ciudad;
      });
    },
  }
}
</script>