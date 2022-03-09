<script setup>
</script>


<template>
    <div class="container-fluid">
        <div class="card rounded pl-3 pr-3 pt-5 pb-5">
            <form>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nome</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="Digite seu nome"
                            />
                            <small id="emailHelp" class="form-text text-muted"></small>
                            <label for="exampleFormControlSelect1">Setor</label>
                            <select
                                class="form-control"
                                id="exampleFormControlSelect1 "
                                placeholder="seleciona um i0tem"
                            >
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Ads</option>
                                <option>Social Media</option>
                                <option>Branding & Marketing</option>
                                <option>Architectural Genie</option>
                                <option>Branding</option>
                            </select>
                            <small id="emailHelp" class="form-text text-muted"></small>
                            <label for="exampleFormControlSelect1">Função</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Account executive</option>
                                <option>Brand Manager</option>
                                <option>Copywriting</option>
                                <option>Content Manager</option>
                                <option>Specialist</option>
                                <option>Computer Network Architect</option>
                                <option>Trainee</option>
                            </select>
                            <div class="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customSwitch1"
                                />
                                <label
                                    class="custom-control-label"
                                    for="customSwitch1"
                                >Toggle this switch element</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="Email"
                        />
                        <small id="emailHelp" class="form-text text-muted"></small>
                        <label for="exampleFormControlSelect1">Cargo</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Account executive</option>
                            <option>Brand Manager</option>
                            <option>Copywriting</option>
                            <option>Content Manager</option>
                            <option>Specialist</option>
                            <option>Computer Network Architect</option>
                            <option>Trainee</option>
                        </select>
                    </div>
                </div>
                <div class="alingButton mr-3 mb-3">
                    <router-link to="/" type="button" class="btn colorButton">Salvar</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
/* input[type="checkbox"] {
    -webkit-appearance: none;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 2);
    transition: 0.5%;
}
input:checked[type="checkbox"]{
    background: pink;
}
input[type="checkbox"]:before {
    -webkit-appearance: none;
    outline: none;
    border-radius: 20px;
    transform: scale(1.1);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 2);
    transition: 0.5%;
} */
</style>
