function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            combatlogs: [],
            hero_health: 100,
            monster_health: 100,
            currentRound: 0,
            winner: null
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monster_health + '%' };
        },
        heroBarStyles() {
            return { width: this.hero_health + '%' };
        },
        specialMoveDisabled() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        hero_health(value) {
            if(value <= 0 && this.monster_health <= 0) {
                // draw
                this.winner = 'draw';
                const log = `<p>They both died!</p>`;
                this.combatlogs.push(log);
            } else if (value <= 0) {
                // hero lost
                this.winner = 'monster';
                const log = `<p>The hero fell bravely in battle, such a n00b!</p>`;
                this.combatlogs.unshift(log);
            }
        },
        monster_health(value) {
            if(value <= 0 && this.hero_health <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // monster lost
                this.winner = 'hero';
                const log = `<p>The monster has been slain, GG no re!</p>`;
                this.combatlogs.push(log);
            }
        }
    },
    methods: {
        startGame() {
            this.combatlogs = [];
            this.hero_health = 100;
            this.monster_health = 100;
            this.currentRound = 0;
            this.winner = null;
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            if(this.monster_health - attackValue < 0){
                this.monster_health = 0;
            } else{
                this.monster_health -= attackValue;
            }
            const log = `<p>Hero dealt <span style="color: red">` + attackValue + `</span> damage to monster!</p>`;
            this.combatlogs.push(log);
            this.attackHero();
        },
        attackHero() {
            const attackValue = getRandomValue(8, 15);
            if(this.hero_health - attackValue < 0){
                this.hero_health = 0;
            } else{
                this.hero_health -= attackValue;
            }
            const log = `<p>Monster dealt <span style="color: red">` + attackValue + `</span> damage to hero!</p>`;
            this.combatlogs.push(log);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            if(this.monster_health - attackValue < 0){
                this.monster_health = 0;
            } else {
                this.monster_health -= attackValue;
            }
            const log = `<p>Hero dealt <span style="color: red">` + attackValue + `</span> damage to monster!</p>`;
            this.combatlogs.push(log);
            this.attackHero();
        },
        healHero() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if(this.hero_health + healValue > 100){
                this.hero_health = 100;
            } else {
                this.hero_health += healValue;
            }
            const log = `<p>Hero healed <span style="color: green">` + healValue + `</span> health to himself!</p>`;
            this.combatlogs.push(log);
            this.attackHero();
        },
        surrender() {
            this.winner = 'monster';
            const log = `<p>The hero ran away, such a coward!</p>`;
            this.combatlogs.push(log);
        }
    }
});

app.mount('#game');