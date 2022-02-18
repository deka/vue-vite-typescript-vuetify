// Styles
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
