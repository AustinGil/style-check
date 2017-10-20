<template>
	<div class="styles">
		<h1>Styles Check</h1>
		<p>A tool to help designers and developers see how their stylesheets render global HTML elements and make sure nothing was forgotten.</p>
		<div class="styles__form">
			<form>
				Add From:
				<div class="add-from">
					<label>
						<input type="radio" name="add-from" v-model="addFrom" value="url">URL
					</label>
					<label>
						<input type="radio" name="add-from" v-model="addFrom" value="computer">Computer
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

				<button type="submit" @click.prevent="submitForm($event)">Add Styles</button>
			</form>
		</div>

		<ul class="styles__list" v-if="styles.length">
			<li v-for="(style, index) in styles" :key="index" class="styles__style">
				<a :href="style.url" target="_blank" rel="noopener">{{ style.nickName ? style.nickName : style.fileName }}</a>
				<!-- TODO: Add ability to remove styles -->
				<!-- <button class="styles__remove-style">X</button> -->

				<!-- TODO: Add ability to reorder styles -->
			</li>
		</ul>

		<div class="credits">
			<p>&lt;/&gt; with 👓 by
				<a href="https://stegosource.com">Stegosource</a>
			</p>
		</div>
	</div>
</template>

<script type="ts">
import { mapState } from "vuex";
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
  watch: {
    addFrom() {
      this.clearForm();
    }
  },
  computed: {
    ...mapState(["styles"])
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
    }
  }
};
</script>

<style>
.styles {
  max-width: 250px;
  padding: 10px;
  word-wrap: break-word;
}

.styles__form {
  margin-bottom: 20px;
}

.add-from {
  display: flex;
  justify-content: space-between;
}

.styles__list {
  padding-left: 0;
  list-style-type: none;
}

.styles__style {
  margin-bottom: 15px;
}
</style>
