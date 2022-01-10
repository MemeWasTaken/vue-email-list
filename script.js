const app = new Vue(
    {
        el: "#app",
        data: {
            tempEmail: [],
        },
        created(){
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(response.data.response);
                        // this.tempEmail0 = response.data.response
                        this.tempEmail.push(response.data.response)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    }
)