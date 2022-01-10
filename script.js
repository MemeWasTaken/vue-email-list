const app = new Vue(
    {
        el: "#app",
        data: {
            tempEmail0: '',
            tempEmail1: '',
            tempEmail2: '',
            tempEmail3: '',
            tempEmail4: '',
            tempEmail5: '',
            tempEmail6: '',
            tempEmail7: '',
            tempEmail8: '',
            tempEmail9: '',
        },
        created(){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail0 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail1 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail2 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail3 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail4 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail5 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail6 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail7 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail8 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.tempEmail9 = response.data.response
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
)