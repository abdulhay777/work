const content = {
    data() {
        return {
            select_length: 1,
            array: [],
            one_result: 0,
            all_result: 0
        }
    },
    methods: {
        addSelect() {
            this.select_length++
        },
        selectChange(key, e) {
            if (this.array[key]) {
                this.array[key].name = e.target.value
            } else {
                this.array[key] = []
                this.array[key].name = e.target.value
            }
        },
        numChange(key, e) {
            if (this.array[key]) {
                this.array[key].number = e.target.value
            } else {
                this.array[key] = []
                this.array[key].number = e.target.value
            }
        },
        result() {
            if (localStorage.getItem('kilogram') && localStorage.getItem('amount')) {
                this.all_result = 0
                this.one_result = Math.round(Number(localStorage.getItem('kilogram')) * 4050 / Number(localStorage.getItem('amount')))
                this.array.forEach((e, i) => {
                    this.array[i].number = Number(this.array[i].number) * this.one_result
                    this.all_result = this.all_result + Number(this.array[i].number)
                })
            }
        }
    },
    template: `
        <div>
            <div class="row mb-3" v-for="(select, key) of select_length">

                <div class="col-9">
                    <select class="form-select" @change="selectChange(key, $event)">
                        <option disabled selected>Работники</option>
                        <option value="Мукаддас">Мукаддас</option>
                        <option value="Дилшода">Дилшода</option>
                        <option value="Наргиза">Наргиза</option>
                        <option value="Мадина">Мадина</option>
                        <option value="Зиеда">Зиеда</option>
                        <option value="Мехринисо">Мехринисо</option>
                        <option value="Гулноза">Гулноза</option>
                        <option value="Гулчехра">Гулчехра</option>
                    </select>
                </div>

                <div class="col-3">
                    <input type="number" class="form-control" @change="numChange(key, $event)">
                </div>

            </div>

            <div class="row">
                <div class="col-12">
                    <button type="button" class="btn btn-outline-primary w-100" @click="addSelect">Добавить</button>
                    <button type="button" class="btn btn-outline-success w-100 mt-2" data-bs-toggle="modal" data-bs-target="#resultModal" @click="result">Результат</button>
                </div>
            </div>

            <div class="modal fade" id="resultModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Результат</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Имя</th>
                                        <th scope="col">Зарплата</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(res, i) of array">
                                        <th scope="row">{{i + 1}}</th>
                                        <td>{{res.name}}</td>
                                        <td>{{res.number}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <figure class="text-end">
                                <blockquote class="blockquote">
                                    <p>Общиый результат: {{all_result}}</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    {{one_result}}
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `
}