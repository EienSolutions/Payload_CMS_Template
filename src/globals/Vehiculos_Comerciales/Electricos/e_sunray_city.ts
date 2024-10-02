import { GlobalConfig } from "payload/types";
import { CapacityComp } from '../../../components/CapacityComp';
import { PropertiesModel } from "../../../components/PropertiesModel";
import { charSlider } from "../../../components/CharSlider";
import { InfoVehicle } from "../../../components/InfoVehicle";
import { ImageGallery } from "../../../components/ImageGallery";
import { Recommendations } from "../../../components/Recommendations";
import { descBanner } from "../../../components/descBanner";


const E_SUNRAY_CITY: GlobalConfig = {
	slug: "E_SUNRAY_CITY",
	fields: [
		// --- Secciones  E-10X---
		descBanner,
		PropertiesModel,
        charSlider,
		InfoVehicle,
		CapacityComp,
		ImageGallery,
		Recommendations

	],
};

export default E_SUNRAY_CITY;