<template>
  <form class="add-style" @submit.prevent="submitForm($event)">
    
    Add Styles From:
    <div class="add-style__from">
      <label>
        <input type="radio" name="add-from" v-model="addFrom" @change="clearForm" value="url">URL
      </label>
      <label>
        <input type="radio" name="add-from" v-model="addFrom" @change="clearForm" value="computer">Computer
      </label>
      <!-- <label> -->
      <!-- <input type="radio" name="add-from" v-model="addFrom" value="inline">Inline -->
      <!-- </label> -->
    </div>

    <!-- Maybe include a quick add feature -->

    <label v-if="addFrom == 'url'">URL
      <input type="url" v-model="newStyle.url" placeholder="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" required>
    </label>

    <label v-if="addFrom == 'computer'">File
      <input type="file" @change="getStyleFromComputer($event)">
    </label>

    <!-- <label>Custom -->
    <!-- <textarea placeholder="body { ... }"></textarea> -->
    <!-- </label> -->

    <label>Nickname (optional)
      <input type="text" v-model="newStyle.nickName" placeholder="Bootstrap">
    </label>

    <button type="submit">Add Styles</button>
  </form>
</template>

<script type="ts">
import { mapActions } from "vuex";
import axios from "axios";
// TODO: Look into https://codemirror.net/
// TODO: Add TypeScript functionality

export default {
  data() {
    return {
      newStyle: {
        url: "",
        nickName: ""
      },
      inputs: {
        url: "",
        nickName: "",
        upload: null
      },
      addFrom: "url"
    };
  },
  methods: {
    ...mapActions(["commitStyle"]),

    clearForm() {
      this.newStyle = {};
    },

    getFileNameFromPath(path) {
      const lastSlashIndex = path.lastIndexOf("/");
      if (!lastSlashIndex) {
        return path;
      }
      return path.slice(lastSlashIndex + 1);
    },

    getStyleFromUrl(url) {
      if (!url) {
        // TODO: You need a URL!!!
        alert("Please add a URL");
        throw Error("Missing URL");
        return;
      }

      // TODO: make sure file exists
      this.newStyle.fileName = this.getFileNameFromPath(url);
      return this.newStyle;
    },

    getStyleFromComputer(event) {
      const selectedFile = event.target.files[0] || false;

      if (!selectedFile) {
        return;
      }

      const vm = this;
      const newStyle = {
        fileName: selectedFile.name
      };
      // fileSize: selectedFile.size

      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
      // http://www.javascripture.com/FileReader
      // http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api
      // https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
      // https://developer.mozilla.org/en-US/docs/Web/API/Blob
      // https://developer.mozilla.org/en-US/docs/Web/API/File
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

      const reader = new FileReader();
      reader.onload = function() {
        // When the reader fires, we do stuff here.
        var fileContents = reader.result;

        if (fileContents) {
          newStyle.contents = fileContents;

          Object.assign(vm.newStyle, newStyle);
        }
      };
      // Fire the reader.
      reader.readAsText(selectedFile);
    },

    async submitForm(event) {
      // console.dir(event.target);
      let newStyle;

      switch (this.addFrom) {
        case "url":
          newStyle = await this.getStyleFromUrl(this.newStyle.url);
          break;

        case "computer":
          newStyle = this.newStyle;
          break;
      }

      this.commitStyle(newStyle);
      this.clearForm();
      // event.target.reset();
    }
  }
};
</script>

<style>
.add-style {
  margin-bottom: 20px;
}

.add-style__from {
  display: flex;
  justify-content: space-between;
}
</style>
