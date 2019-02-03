<template>
    <div class="hello">
        <div class="holder">

            <form @submit.prevent="addSkill">
                <input type="text" placeholder="Enter a skill you have..." v-model="skill" v-validate="'min:5'"
                       name="skill">

                <transition name="alert-in">
                    <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
                </transition>

            </form>

            <ul>

                <transition-group name="list">
                    <li v-for="(data, index) in skills" :key="index + 0">
                        <span class="skill-name">{{ data.skill }}</span>
                        <span v-on:click="remove(index)" class="remove-skill">
                            <font-awesome-icon icon="minus-circle" />
                        </span>

                    </li>

                </transition-group>

            </ul>

            <p> These are the skills that you possess.</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue,
    } from "vue-property-decorator";

    @Component
    export default class Skills extends Vue {
        @Prop() private skills = [
            { skill: "Vue" },
            { skill: "Frontend Developer" },
        ];

        @Prop() private skill: string = "";

        public addSkill() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.skills.push({ skill: this.skill });
                    this.skill = "";
                } else {
                    console.warn("Not Valid");
                }
            });
        }

        public remove(id: number) {
            this.skills.splice(id, 1);
        }

    }
</script>

<style scoped lang="scss" src="./Skills.scss">

</style>
