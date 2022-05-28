const modal = {
    data() {
        return {
            kilogram: '',
            amount: ''
        }
    },
    methods: {
        save() {
            if (this.kilogram && this.amount) {
                localStorage.setItem('kilogram', this.kilogram)
                localStorage.setItem('amount', this.amount)
            } else {
                alert('Заполните форму')
            }
        }
    },
    template: `
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Заполните форму</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="input-group flex-nowrap mb-3">
                    <input type="number" class="form-control" placeholder="Килограмм" v-model="kilogram">
                </div>
                <div class="input-group flex-nowrap">
                    <input type="number" class="form-control" placeholder="Паднос сони" v-model="amount">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="save">Сохранить</button>
            </div>
        </div>
    `
}