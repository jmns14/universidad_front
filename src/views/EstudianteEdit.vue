<template>
  <div class="row mt-top-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Editar estudiante
        </div>
        <div class="card-body">
          <form v-on:submit="actualizar">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-id-card"></i></span>
              <input type="text" v-model="documento" id="documento" placeholder="Ingrese el documento" required
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="nombres" id="nombres" placeholder="Ingrese el nombre" required
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
              <input type="text" v-model="telefono" id="telefono" placeholder="Ingrese el telefono" required
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
              <input type="email" v-model="email" id="email" placeholder="Ingrese el email" required class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-house"></i></span>
              <input type="text" v-model="direccion" id="direccion" placeholder="Ingrese direccion" required
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-city"></i></span>
              <input type="text" v-model="ciudad" id="ciudad" placeholder="Ingrese la ciudad" required
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-building-columns"></i></span>
              <input type="text" v-model="semestre" id="semestre" placeholder="Ingrese el semestre" required
                class="form-control">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-warning"><i class="fa-solid fa-refresh"></i> Guardar cambios</button>
            </div>
          </form>
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
      semestre: '',
      url: 'http://universidad_back.test/api/v1/estudiantes',
      cargando: false
    }
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url += '/' + this.id;
    this.getEstudiante();
  },
  methods: {
    getEstudiante() {
      axios.get(this.url).then((res) => {
        this.documento = res.data.documento;
        this.nombres = res.data.nombres;
        this.telefono = res.data.telefono;
        this.email = res.data.email;
        this.direccion = res.data.direccion;
        this.ciudad = res.data.ciudad;
        this.semestre = res.data.semestre;
      });
    },
    actualizar() {
      this.cargando = true;
      var parametros = {
        documento: this.documento,
        nombres: this.nombres,
        telefono: this.telefono,
        email: this.email,
        direccion: this.direccion,
        ciudad: this.ciudad,
        semestre: this.semestre,
      };
      enviarSolicitud('PUT', parametros, this.url, 'Estudiante Editado!!');
    }
  }
}
</script>