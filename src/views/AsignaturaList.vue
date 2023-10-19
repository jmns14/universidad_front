<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="text-center">
                <h1>Asignaturas</h1>
            </div>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Creditos</th>
                            <th>Area</th>
                            <th>Obligatoria</th>
                            <th>Fecha de Registro</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="contenido">
                        <tr v-if="this.cargando">
                            <td colspan="7">
                                <h3>Cargando...</h3>
                            </td>
                        </tr>
                        <tr v-else v-for="asignatura, i in this.asignaturas" :key="asignatura.id">
                            <td v-text="asignatura.id"></td>
                            <td v-text="asignatura.nombre"></td>
                            <td v-text="asignatura.descripcion"></td>
                            <td v-text="asignatura.creditos"></td>
                            <td v-text="asignatura.area_de_conocimiento"></td>
                            <td v-text="asignatura.obligatoria ? 'Si' : 'No'"></td>
                            <td v-text="new Date(asignatura.created_at).toLocaleDateString()"></td>
                            <td>
                                <router-link :to="{ path: 'asignaturas/view/' + asignatura.id }" class="btn btn-info">
                                    <i class="fa-solid fa-eye"></i>
                                </router-link>
                                &nbsp;
                                <router-link :to="{ path: 'asignaturas/edit/' + asignatura.id }" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                                &nbsp;
                                <button class="btn btn-danger"
                                    v-on:click="$event => deleteAsignatura(asignatura.id, asignatura.nombre)">
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
            asignaturas: null,
            cargando: false
        }
    },
    mounted() {
        this.getAsignaturas();
    },
    methods: {
        getAsignaturas() {
            this.cargando = true;
            axios.get('http://universidad_back.test/api/v1/asignaturas').then(
                res => {
                    this.asignaturas = res.data;
                    this.cargando = false;
                }
            );
        },
        deleteAsignatura(id, nombre) {
            confirmar('http://universidad_back.test/api/v1/asignaturas/', id, 'Eliminar asignatura', 'Realmente desea eliminar ' + nombre + '?')
            this.cargando = false;
        }
    }
}
</script>
  