import { awadhi } from "./Awadhi";
import { bhojpuriSongs } from "./bhojpuri";
import { kabir } from "./kabir";
import { maithili } from "./maithili";
import { punjabi } from "./punjabi";
import { qawwali } from "./Qawwali";
import { uncategorised } from "./song";

export const songsdata = [
  { list: qawwali, title: "Qawwali" },
  { list: qawwali, title: "Ghazals" },
  { list: qawwali, title: "Sufi" },
  { list: uncategorised, title: "Un Categorised" },
  { list: bhojpuriSongs, title: "Bhojpuri songs" },
  { list: maithili, title: "Maithili songs" },
  { list: punjabi, title: "Punjabi songs" },
  { list: kabir, title: "Kabir" },
  { list: awadhi, title: "Awadhi" },
];