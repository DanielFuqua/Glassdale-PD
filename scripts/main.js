import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import  { ConvictionSelect } from "./convictions/ConvictionSelect.js";

getOfficers()
getCriminals().then(() => CriminalList())
getConvictions().then(ConvictionSelect)