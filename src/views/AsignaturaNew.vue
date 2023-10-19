<template>
    <div class="row mt-top-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Registrar asignatura
                </div>
                <div class="card-body">
                    <form v-on:submit="registrar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-file-signature"></i></span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese el nombre" required
                                class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-tag"></i></span>
                            <input type="text" v-model="descripcion" id="descripcion" placeholder="Ingrese la descripcion"
                                required class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-business-time"></i></span>
                            <input type="text" v-model="creditos" id="creditos" placeholder="Ingrese los creditos" required
                                class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-building-columns"></i></span>
                            <input type="text" v-model="area_de_conocimiento" id="area_de_conocimiento" placeholder="Ingrese el area de conocimiento"
                                required class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <input v-model="obligatoria" id="obligatoria" class="form-check-input mt-0" type="checkbox" 
                                    aria-label="Obligatoria">
                            </div>
                            <label type="text" class="form-control" aria-label="Obligatoria">Obligatoria</label>
                        </div>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones';

export default {
    data() {
        return {
            nombre: '',
            descripcion: '',
            creditos: '',
            area_de_conocimiento: '',
            obligatoria: false,
            url: 'http://universidad_back.test/api/v1/asignaturas',
            cargando: false
        }
    },
    methods: {
        registrar() {
            this.cargando = true;

            var parametros = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                creditos: this.creditos,
                area_de_conocimiento: this.area_de_conocimiento,
                obligatoria: this.obligatoria,
            };
            enviarSolicitud('POST', parametros, this.url, 'Asignatura registrada!!');
        }
    }
}
</script>