<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div  class="form">
                <label for="nombre">Nombre: </label>
                <Field type="text" name="nombre" id="nombre" placeholder="ingrese su nombre" />
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email: </label>
                <Field type="email" name="email" id="email" placeholder="ingrese su email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div  class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import {Form, ErrorMessage} from 'vee-validate';
    import { Field } from 'vee-validate';
    import { schema } from '../schema/validationSchema';
    const onSubmit = () =>{
        console.log('Se ha enviado el formulario')
    }
</script>

<style scoped>
    .form{
        margin-bottom: 15px;
    }
</style>