<template>
    <div class="row mt-top-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Asignar materia
                </div>
                <div class="card-body">
                    <form v-on:submit="asignar">
                        <div class="form-floating input-group mb-3">
                            <select class="form-select" v-model="estudiantes" id="estudiantes">
                                <option v-for="estudiante, i in this.estudiantes" :key="estudiante.id">
                                    {{ estudiante.nombres }}
                                </option>
                            </select>
                            <label for="floatingSelect">Selecciona un estudiante</label>
                        </div>
                        &nbsp;
                        <div class="form-floating input-group mb-3">
                            <select multiple v-model="asignaturas" class="form-select">
                                <option v-for="asignatura in asignaturas" :key="asignatura.id">
                                    {{ asignatura.nombre }}
                                </option>
                            </select>
                            <label for="floatingSelect">Selecciona las asignaturas</label>
                        </div>
                        &nbsp;
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-success"><i class="fa-solid fa-chalkboard-user"></i> Matricular </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones';
import axios from 'axios';

export default {
    data() {
        return {
            estudiantes: [],
            asignaturas: [],
            estudiante: null,
            profesores: null,
            url: 'http://universidad_back.test/api/v1/asignaturas',
            cargando: false
        }
    },
    mounted() {
        this.getEstudiantes();
        this.getAsignaturas();
    },
    methods: {
        getEstudiantes() {
            this.cargando = true;
            axios.get('http://universidad_back.test/api/v1/estudiantes').then(
                res => {
                    this.estudiantes = res.data;
                    this.cargando = false;
                }
            );
        },
        getAsignaturas() {
            this.cargando = true;
            axios.get('http://universidad_back.test/api/v1/asignaturas').then(
                res => {
                    this.asignaturas = res.data;
                    this.cargando = false;
                }
            );
        },

        asignar() {
            this.cargando = true;

            var parametros = {
                asignatura_id: this.asignatura,
                estudiante_id: this.estudiante,
                profesor_id: this.profesor,
            };
            enviarSolicitud('POST', parametros, this.url, 'Asignaturas matriculadas!!');
        }
    }
}
</script>