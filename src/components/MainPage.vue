<template>
    <div>
        <button v-on:click="reload"> RNG </button>
        <h3>Class: {{cla}}</h3>
        <div v-if="cla==='Spy'">
            <h3>Gun: {{firstW}}</h3>
            <h3>Melee: {{secondW}}</h3>
            <h3>Watch: {{thirdW}}</h3>
            <h3>Sapper: {{forthW}}</h3>
        </div>
        <div v-else>
            <h3>Primary: {{firstW}}</h3>
            <h3>Secondary: {{secondW}}</h3>
            <h3>Melee: {{thirdW}}</h3>
        </div>
    </div>
</template>

<script>
import { classes, firstWeapon, secondWeapon, thirdWeapon, forthWeapon } from '../assets/tf2-data.js';
export default {
    name: 'Page',
    data() {
        let classId = this.getRandomInt(9);
        let firstId = this.getRandomInt(firstWeapon[classId].length);
        let secondId = this.getRandomInt(secondWeapon[classId].length);
        let thirdId = this.getRandomInt(thirdWeapon[classId].length);
        let forthId = null;
        let cla = classes[classId];
        let firstW = firstWeapon[classId][firstId];
        let secondW = secondWeapon[classId][secondId];
        let thirdW = thirdWeapon[classId][thirdId];
        let forthW = null;

        if (classId == 8) {
            forthId = this.getRandomInt(forthWeapon[classId].length);
            forthW = forthWeapon[classId][forthId];
        }

        return {
            cla,
            firstW,
            secondW,
            thirdW,
            forthW
        }
    },
    methods: {
        getRandomInt(max) {
            return  Math.floor(Math.random() * max);
        },
        reload() {
            console.log("e")
            this.$forceUpdate();
            document.location.reload();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>