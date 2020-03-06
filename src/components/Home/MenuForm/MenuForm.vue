<template>
  <div class="box">
    <form @submit.prevent="submitMenuItem">
      <div class="box-header">
        <h1>Monte aqui o seu cardápio. O que está esperando?</h1>
        <div class="switch">
          <span>Comida</span>
          <label class="switch-element">
            <input type="checkbox" id="menuType" @change="changeMenuType" />
            <span class="slider"></span>
          </label>
          <span>Bebida</span>
        </div>
      </div>
      <div class="box-content">
        <div class="form-wrap">
          <div class="form-field half">
            <input
              id="title"
              type="text"
              placeholder="Título do pedido"
              minlength="3"
              maxlength="60"
              required
              v-model="formData.title"
            />
          </div>
          <div class="form-field half">
            <input
              id="flavor"
              type="text"
              placeholder="Sabor"
              minlength="3"
              maxlength="60"
              required
              v-model="formData.flavor"
            />
          </div>
          <div class="form-field price">
            <money
              value="0"
              id="price"
              v-bind="money"
              v-model="formData.price"
              placeholder="R$ 0,00"
              required
            ></money>
          </div>
          <div class="form-field">
            <textarea
              id="description"
              placeholder="Descrição"
              v-model="formData.description"
            ></textarea>
          </div>
          <vue-dropzone
            ref="menuDropzone"
            id="dropzone"
            :options="dropzoneOptions"
            @vdropzone-file-added="fileAdded"
          ></vue-dropzone>
        </div>
        <input
          value="Limpar"
          id="reset"
          color="red"
          type="reset"
          @click="clearForm()"
        />
        <input value="Cadastrar" id="submit" color="yellow" type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { Money } from "v-money";
import vue2Dropzone from "vue2-dropzone";

let formDataInitial = {
  title: null,
  flavor: null,
  price: 0,
  description: null,
  imageData: null
};

export default {
  name: "MenuForm",
  components: {
    Money,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      menuType: "food",
      formData: {
        ...formDataInitial
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false
      },
      dropzoneOptions: {
        url: "/",
        thumbnailWidth: 350,
        maxFiles: 1,
        autoProcessQueue: false,
        addRemoveLinks: true,
        acceptedFiles: ".png,.jpg,.jpeg",
        thumbnailMethod: "contain",
        dictDefaultMessage:
          "Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.",
        dictRemoveFile: "Remover imagem"
      }
    };
  },
  methods: {
    changeMenuType(event) {
      event.target.checked
        ? (this.menuType = "beverage")
        : (this.menuType = "food");
      this.$emit("onChangeMenuType", this.menuType);
    },
    fileAdded(file) {
      let _this = this;
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function(event) {
        _this.formData.imageData = event.target.result;
      };
    },
    clearForm() {
      this.$refs.menuDropzone.removeAllFiles();
      this.formData = {
        ...formDataInitial
      };
    },
    submitMenuItem() {
      this.$emit("onReceiveNewMenuItem", this.formData);
      this.clearForm();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "MenuForm";
</style>
