import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";

getOfficers()
getCriminals().then(() => CriminalList())