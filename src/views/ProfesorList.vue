<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="text-center">
                <h1>Profesores</h1>
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
                            <th>Fecha de Registro</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="contenido">
                        <tr v-if="this.cargando">
                            <td colspan="9">
                                <h3>Cargando...</h3>
                            </td>
                        </tr>
                        <tr v-else v-for="profesor, i in this.profesores" :key="profesor.id">
                            <td v-text="profesor.id"></td>
                            <td v-text="profesor.documento"></td>
                            <td v-text="profesor.nombres"></td>
                            <td v-text="profesor.telefono"></td>
                            <td v-text="profesor.email"></td>
                            <td v-text="profesor.direccion"></td>
                            <td v-text="profesor.ciudad"></td>
                            <td v-text="new Date(profesor.created_at).toLocaleDateString()"></td>
                            <td>
                                <router-link :to="{ path: 'profesores/view/' + profesor.id }" class="btn btn-info">
                                    <i class="fa-solid fa-eye"></i>
                                </router-link>
                                &nbsp;
                                <router-link :to="{ path: 'profesores/edit/' + profesor.id }" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                                &nbsp;
                                <button class="btn btn-danger"
                                    v-on:click="$event => deleteProfesor(profesor.id, profesor.nombres)">
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
            profesores: null,
            cargando: false
        }
    },
    mounted() {
        this.getProfesores();
    },
    methods: {
        getProfesores() {
            this.cargando = true;
            axios.get('http://universidad_back.test/api/v1/profesores').then(
                res => {
                    this.profesores = res.data;
                    this.cargando = false;
                }
            );
        },
        deleteProfesor(id, nombre) {
            confirmar('http://universidad_back.test/api/v1/profesores/', id, 'Eliminar profesor', 'Realmente desea eliminar a ' + nombre + '?')
            this.cargando = false;
        }
    }
}
</script>
  