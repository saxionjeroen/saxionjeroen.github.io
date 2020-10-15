<template>
    <div class="container">
        <div v-show="!hide">
            <input type="number" placeholder="Prijs" v-model="prijs" name="Prijs" required><br>

            <button type="submit" v-on:click="addRow">Voeg toe</button><br>

            <input type="text" placeholder="Factuurnummer" v-model="factuurnummer" name="Factuurnummer" required><br>
            <input type="text" placeholder="Naam klant" v-model="naam" name="naam" required><br>
            <input type="text" placeholder="Adres klant" v-model="adres" name="Adres" required><br>
            <input type="text" placeholder="Postcode + Stad klant" v-model="stad" name="Stad" required><br>


            <button type="submit" v-on:click="hidePrijs">Hide</button>
        </div>

        <h2 class="w3-text-theme">
            <i class="fa fa-recycle"></i> Katalysator Recycling Twente <i class="fa fa-recycle"></i>
        </h2>
        <div>
            <table>
                <tr class="w3-theme-l1">
                    <td>test</td>
                </tr>
                <tr class="w3-theme-l1">
                    <td>adres</td>
                </tr>
            </table>
            <table class="right">
                <tr class="w3-theme-l1">
                    <td>{{naam}}</td>
                </tr>
                <tr class="w3-theme-l1">
                    <td>{{adres}}</td>
                </tr>
                <tr class="w3-theme-l1">
                    <td>{{stad}}</td>
                </tr>
            </table>
        </div>
        <grid :cols="['Factuurdatum', 'Vervaldatum', 'Factuurnummer']"
              :rows="[[getDatum(false),getDatum(true),factuurnummer]]"
              :auto-width="false"></grid>
        <br>
        <grid :cols="cols" :rows="rows" :auto-width="false"></grid>
        <br>
        <table class="right">
            <tr class="w3-theme-l1">
                <td>Totaal excl.</td><td>€{{totaal}}</td>
            </tr>
            <tr class="w3-theme-l1">
                <td>BTW</td><td>€0</td>
            </tr>
            <tr class="w3-theme-l1">
                <td>Totaal incl.</td><td>€{{totaal}}</td>
            </tr>
        </table>
        <br>
        <button v-show="!printClicked" v-on:click="print">
            Print
        </button>
        <div v-show="printClicked" class="footer">tekst wat je wilt iets zoals binnen x dagen op deze reken plaatsen svp</div>
    </div>
</template>

<script>
    import Grid from 'gridjs-vue'

    export default {
        name: "factuur",
        components: {
            Grid
        },
        data() {
            return {
                cols: ['Omschrijving', 'Prijs Excl.', 'BTW perc.', 'Prijs incl.'],
                rows: [],
                prijs: '',
                totaal: 0,
                hide: false,
                factuurnummer: '',
                naam: '',
                stad: '',
                adres: '',
                printClicked: false
            }
        },
        methods: {
            addRow() {
                if (!isNaN(this.prijs)) {
                    this.totaal += parseInt(this.prijs)
                    this.rows.push(['Katalysator', "€" + this.prijs, '0%', "€" + this.prijs])
                    this.prijs = ''
                }
            },
            hidePrijs() {
                this.hide = true
            },
            getDatum(volgendeMaand) {
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = today.getFullYear();

                today = dd + '-' + mm + '-' + yyyy;
                if (volgendeMaand) {
                    today = dd + '-' + (parseInt(mm) + 1) + '-' + yyyy;
                }
                return today
            },
            print() {
                this.printClicked = true
                setTimeout(()=>{

                    window.print()
                }, 500)
            }
        }
    }
</script>

<style scoped>
    table {
        width: 30%;
    }

    .right{
        float: right;
    }

    /* Bordered form */
    form {
        border: 3px solid #f1f1f1;
    }

    /* Full-width inputs */
    input[type=text], input[type=password], input[type=number] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #ff5722;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    /* Center the avatar image inside this container */
    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    /* Avatar image */
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    /* Add padding to containers */
    .container {
        padding-left: 100px;
        padding-right: 100px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: black;
        text-align: center;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 800px) {
        span.psw {
            display: block;
            float: none;
        }

        .cancelbtn {
            width: 100%;
        }

        button {
            width: 100% !important;
        }

        input {
            width: 100% !important;
        }

        .container {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
</style>