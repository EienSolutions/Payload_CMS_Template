import { GlobalConfig } from "payload/types";
import { descBanner } from '../../../components/descBanner';
import { CapacityComp } from '../../../components/CapacityComp';
import { PropertiesModel } from "../../../components/PropertiesModel";
import { charSlider } from "../../../components/CharSlider";
import { InfoVehicle } from "../../../components/InfoVehicle";
import { ImageGallery } from "../../../components/ImageGallery";
import { Recommendations } from "../../../components/Recommendations";


const K7: GlobalConfig = {
	slug: "K7",
	fields: [
		// --- Secciones  E-10X---
		descBanner,
		PropertiesModel,
        charSlider,
		InfoVehicle,
		CapacityComp,
        //--- Falta un componente ModelsBulletList
        
		ImageGallery,
		Recommendations

	],
};

export default K7;