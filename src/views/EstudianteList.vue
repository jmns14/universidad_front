<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="text-center">
                <h1>Estudiantes</h1>
            </div>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Direccion</th>
                            <th>Ciudad</th>
                            <th>Semestre</th>
                            <th>Fecha de Registro</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="contenido">
                        <tr v-if="this.cargando">
                            <td colspan="10">
                                <h3>Cargando...</h3>
                            </td>
                        </tr>
                        <tr v-else v-for="estudiante, i in this.estudiantes" :key="estudiante.id">
                            <td v-text="estudiante.id"></td>
                            <td v-text="estudiante.documento"></td>
                            <td v-text="estudiante.nombres"></td>
                            <td v-text="estudiante.telefono"></td>
                            <td v-text="estudiante.email"></td>
                            <td v-text="estudiante.direccion"></td>
                            <td v-text="estudiante.ciudad"></td>
                            <td v-text="estudiante.semestre"></td>
                            <td v-text="new Date(estudiante.created_at).toLocaleDateString()"></td>
                            <td>
                                <router-link :to="{ path: 'estudiantes/view/' + estudiante.id }" class="btn btn-info">
                                    <i class="fa-solid fa-eye"></i>
                                </router-link>
                                &nbsp;
                                <router-link :to="{ path: 'estudiantes/edit/' + estudiante.id }" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                                &nbsp;
                                <button class="btn btn-danger"
                                    v-on:click="$event => deleteEstudiante(estudiante.id, estudiante.nombres)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { confirmar } from '../funciones';

export default {
    data() {
        return {
            estudiantes: null,
            cargando: false
        }
    },
    mounted() {
        this.getEstudiantes();
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
        deleteEstudiante(id, nombre) {
            confirmar('http://universidad_back.test/api/v1/estudiantes/', id, 'Eliminar estudiante', 'Realmente desea eliminar a ' + nombre + '?')
            this.cargando = false;
        }
    }
}
</script>