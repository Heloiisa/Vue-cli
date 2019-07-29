<template>
<div class="container-fluid">
  <div class="CadEmpresa">
    <b-form>
      <input id="cd_empresa" type="hidden" v-model="cd_empresa" />
      <b-row>
        <b-col md="6" sm="6">
          <b-form-group label="Nome da Empresa:" label-for="nm_empresa">
            <b-form-input
              id="nm_empresa"
              type="text"
              v-model="category.nm_empresa"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome da Empresa..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="6">
          <b-form-group label="Nome Fantasia:" label-for="idEmpresaFantasia">
            <b-form-input
              id="idEmpresaFantasia"
              type="text"
              v-model="category.nm_empresa_fantasia"
              :readonly="mode === 'remove'"
              placeholder="Informe o Nome Fantasia..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Tipo Empresa:" label-for="idEmpresaTipo">
            <b-form-select id="idEmpresaTipo" :options="options" v-model="selected" />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CNPJ:" label-for="idDocumentoEmpresa">
            <b-form-input
              id="idDocumentoEmpresa"
              type="text"
              v-model="category.nm_nr_cnpj"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o CNPJ da Empresa..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Email da Empresa:" label-for="idEmailEmpresa">
            <b-form-input
              id="idEmailEmpresa"
              type="text"
              v-model="category.nm_email"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o Email da Empresa..."
            />
          </b-form-group>
        </b-col>
        <b-col md="1" sm="12">
          <b-form-group label="DDD:" label-for="idTelefone">
            <b-form-input
              id="idTelefone"
              type="text"
              v-model="category.nr_ddd_telefone"
              required
              :readonly="mode === 'remove'"
              placeholder="Inf. o DDD."
            />
          </b-form-group>
        </b-col>
        <b-col md="5" sm="12">
          <b-form-group label="Telefone:" label-for="idTelefone">
            <b-form-input
              id="idDDD"
              type="text"
              v-model="category.nr_telefone"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o telefone..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome Representante:" label-for="idNomeRepresentante">
            <b-form-input
              id="idNomeRepresentante"
              type="text"
              v-model="category.representante"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o nome do Representante..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="CPF Representante:" label-for="idDocumentoRepresentante">
            <b-form-input
              id="idDocumentoRepresentante"
              type="text"
              v-model="category.cpfrepresentante"
              required
              :readonly="mode === 'remove'"
              placeholder="Informe o telefone..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="text-sm-right col-sm3">
        <b-button variant="primary"  v-if="mode === 'save'" @click="save">Salvar</b-button>
        <b-button variant="danger" v-if="mode === 'remove'"
                @click="remove">Excluir</b-button>
        <b-button class="ml-2" @click="reset">Cancelar</b-button>
      </div>
    </b-form>
    <hr />
     <b-col cols="12">
    <b-table hover striped :items="categories"  :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
          <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
        </b-button>
        <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
          <font-awesome-icon icon="trash-alt"></font-awesome-icon>
        </b-button>
      </template>
    </b-table>
     </b-col>
  </div>
</div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "CadEmpresa",
  data: function() {
    return {
      category: {
        nm_empresa: "",
        nm_empresa_fantasia: "",
        cd_empresa_tipo: "",
        nm_nr_cnpj: "",
        nm_email: "",
        nr_telefone: "",
        nr_ddd_telefone: ""
      },
         selected: null,
        options: [
          { value: null, text: 'Selecione' },
          { value: 'a', text: '-' },

        ],
        mode: 'save',
      categories: [],
      fields: [
        {
          key: "cd_empresa",
          label: "Código",
          sortable: true
        },
        {
          key: "nm_nr_cnpj",
          label: "CNPJ",
          sortable: true
        },
        {
          key: "nm_empresa",
          label: "Nome",
          sortable: true
        },
        {
          key: "nm_empresa_fantasia",
          label: "Nome fantasia",
          sortable: true
        },
        {
          key: "nm_email",
          label: "Email",
          sortable: true
        },
        {
          key: "nr_ddd_telefone",
          label: "DDD",
          sortable: true
        },
        {
          key: "nr_telefone",
          label: "Telefone",
          sortable: true
        },
        {
          key: "actions",
          label: "Ações"
        }
      ]
    };
  },
  methods: {
    loadCategories() {
      var self = this;
      const url = `${baseApiUrl}/api/empresas`;
      axios.get(url).then(res => {
        self.categories = res.data;
      });
    },
    reset() {
      this.mode = "save";
      this.category = {};
      this.loadCategories();
    },
    save() {
      const method = this.category.cd_empresa ? "put" : "post";
      const cd_empresa = this.category.cd_empresa
        ? `${this.category.cd_empresa}`: "";
      axios[method](`${baseApiUrl}/api/empresa/${cd_empresa}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
  remove() {
      const cd_empresa = this.category.cd_empresa;
      axios
        .delete(`${baseApiUrl}/api/empresa/${cd_empresa}`)
        .then(() => {
           this.$toasted.global.defaultSuccess()
            this.reset()
        })
        .catch(showError);
    },

    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
    }
  },
  mounted() {
    this.loadCategories();
  }
};
</script>

<style>
</style>