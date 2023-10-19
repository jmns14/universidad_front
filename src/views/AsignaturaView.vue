<template>
  <div class="row mt-top-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalles del asignatura
        </div>
        <div class="card-body">
          <div class="d-grid col-6 mx-auto mb-3">
            <router-link :to="{ path: '/asignaturas' }" class="btn btn-info">
              <i class="fa-solid fa-arrow-left"> Regresar</i>
            </router-link>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-file-signature"></i></span>
            <label v-text="nombre" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-tag"></i></span>
            <label v-text="descripcion" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-business-time"></i></span>
            <label v-text="creditos" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="fa-solid fa-building-columns"></i></span>
            <label v-text="area_de_conocimiento" class="form-control"></label>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input v-model="obligatoria" id="obligatoria" :checked="obligatoria" class="form-check-input mt-0"
                type="checkbox" aria-label="Obligatoria" disabled>
            </div>
            <label type="text" class="form-control" aria-label="Obligatoria">Obligatoria</label>
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
      nombre: '',
      descripcion: '',
      creditos: '',
      area_de_conocimiento: '',
      obligatoria: false,
      url: 'http://universidad_back.test/api/v1/asignaturas',
      cargando: false
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getAsignatura();
  },
  methods: {
    getAsignatura() {
      axios.get(this.url).then((res) => {
        this.nombre = res.data.nombre;
        this.descripcion = res.data.descripcion;
        this.creditos = res.data.creditos;
        this.area_de_conocimiento = res.data.area_de_conocimiento;
        this.obligatoria = res.data.obligatoria;
      });
    },
  }
}
</script>