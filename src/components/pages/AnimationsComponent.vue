<template>

            <h1>Animations</h1>
            <hr>
            <button class="btn btn-primary" @click="show = !show">alert</button>
            <transition name="fade">
                <div class="alert alert-info" v-if="show">some info</div>
            </transition>
            <transition name="slide" type="animation">
                <div class="alert alert-info" v-if="show">some info</div>
            </transition>
            <transition name="fade">
                <div class="alert alert-info" v-if="show">some info</div>
            </transition>


</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }

}
</script>
<style>
.container {
    text-align: left;
}
/* Fade Transitions */
/* Fade Transitions */
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

/* Slide Transitions */
.slide-enter {
    opacity: 0;
    transform: translateY(20px); /* Inicializa la posición de deslizamiento */
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}

.slide-leave {
    opacity: 1;
    transform: translateY(0); /* Posición inicial del deslizamiento */
}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
}

/* Keyframes for slide-in and slide-out animations */
@keyframes slide-in {
    from {
        transform: translateY(20px);
        opacity: 0; /* Asegura que la opacidad también cambia durante la animación */
    }
    to {
        transform: translateY(0);
        opacity: 1; /* Finaliza con opacidad completa */
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1; /* Asegura que la opacidad también cambia durante la animación */
    }
    to {
        transform: translateY(20px);
        opacity: 0; /* Finaliza con opacidad en 0 */
    }
}


</style>