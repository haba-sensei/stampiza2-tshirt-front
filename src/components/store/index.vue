<template>
    <div class="container mx-auto flex">
        <div class="w-1/2 h-screen">
            <div class="flex justify-center h-1/2" style="width: 800px; height: 800px;">
                <div class="stack">
                    <img :src="filterImage"
                        style="position: relative; top: -250px;width: 350px; height: 350px;"
                        alt="Image 2" class="rounded" />
                    <img src="../../assets/images/hombre.png" style="width: 800px; height: 800px;" alt="Image 1" class="rounded" />
                </div>
            </div>
        </div>
        <div class="w-1/2 h-screen ">
            <div class="container mx-auto flex flex-col mt-20 h-full">
                <ul class="steps">
                    <li class="step step-info">Registrate</li>
                    <li class="step step-info">Elige un diseño</li>
                    <li class="step">Agregalo al carrito</li>
                    <li class="step">Realiza la compra</li>
                    <li class="step">Recive tu producto</li>
                </ul>
                <div class="w-3/4 mx-auto mt-4 mb-4">
                    <h1 class="text-xl">Search</h1>
                </div>
                <div class="w-3/4 mx-auto">
                    <h1 class="text-xl">Content {{ image }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { fetchAndProcessImage } from "../../controller/image.controller"
const image = await fetchAndProcessImage();
const filterImage = URL.createObjectURL(image);
</script>

<style scoped></style>