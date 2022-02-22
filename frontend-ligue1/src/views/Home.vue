<template>
        <div class="home">
            <section>
                <article v-for="club in clubs" :key="club.id" class="home-club">
                    <div class="home-club-link">
                        
                    </div>
                </article>
            </section>
        </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: 'Home',
            components: {},
        data() {
            return {
 
            }
        }
    }
</script>


<style scope lang="scss">

</style>