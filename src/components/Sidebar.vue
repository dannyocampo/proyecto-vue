<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="sidebar">
        <h2>Barra Lateral</h2>
        <ul>
            <li>
                <RouterLink to="/contador">Contador</RouterLink>
            </li>
            <li>
                <RouterLink to="/Lista-de-Tareas">Lista de Tareas</RouterLink>
            </li>
            <li>
                <RouterLink to="/Registrar">Registrar</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
    .sidebar{
        width: 200px;
        background: #f0f0f0;
        padding: 20px;
    }
</style>