const { createApp } = Vue;

createApp({
    data() {
        return {
            generatedEmails: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        };
    },
    methods: {
        generateEmails() {
            this.generatedEmails = [];
        
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiUrl).then(response => this.generatedEmails.push(response.data.response)); 
            }
           
        },
    },
    mounted(){
        this.generateEmails()
    }
}).mount('#app');
